import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker   from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker    from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker   from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker     from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { open, save }       from '@tauri-apps/plugin-dialog';
import { invoke }           from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { render as vizRender, setTheme as vizSetTheme } from './visualizer.js';
import { THEMES, THEME_NAMES, DEFAULT_THEME, registerThemes } from './themes.js';
import { format as formatSql } from 'sql-formatter';

// ── Monaco worker setup ──────────────────────────────────────────────────
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json')                                 return new jsonWorker();
    if (['css','scss','less'].includes(label))            return new cssWorker();
    if (['html','handlebars','razor'].includes(label))    return new htmlWorker();
    if (['typescript','javascript'].includes(label))      return new tsWorker();
    return new editorWorker();
  },
};

// ── State ────────────────────────────────────────────────────────────────
let currentPath  = null;
let vizOpen      = false;
let vizJob       = null;
let autoDetect   = true;
const appWindow  = getCurrentWindow();

// ── DOM refs ─────────────────────────────────────────────────────────────
const prettifyBtn= document.getElementById('prettify-btn');
const vizPane    = document.getElementById('viz-pane');
const vizDivider = document.getElementById('viz-divider');
const vizContent = document.getElementById('viz-content');
const vizBtn     = document.getElementById('viz-toggle');
const statusbar  = document.getElementById('statusbar');
const langPicker = document.getElementById('lang-picker');
const themePicker= document.getElementById('theme-picker');

// ── Language list (display → monaco id) ─────────────────────────────────
const LANGUAGES = [
  ['Auto Detect',   null],
  ['Plain Text',    'plaintext'],
  ['Bash / Shell',  'shell'],
  ['C',             'c'],
  ['C++',           'cpp'],
  ['C#',            'csharp'],
  ['CSS',           'css'],
  ['Dart',          'dart'],
  ['Dockerfile',    'dockerfile'],
  ['Go',            'go'],
  ['GraphQL',       'graphql'],
  ['Groovy',        'groovy'],
  ['HTML',          'html'],
  ['Java',          'java'],
  ['JavaScript',    'javascript'],
  ['JSON',          'json'],
  ['Kotlin',        'kotlin'],
  ['Lua',           'lua'],
  ['Makefile',      'makefile'],
  ['Markdown',      'markdown'],
  ['Objective-C',   'objective-c'],
  ['Perl',          'perl'],
  ['PHP',           'php'],
  ['PowerShell',    'powershell'],
  ['Python',        'python'],
  ['R',             'r'],
  ['Ruby',          'ruby'],
  ['Rust',          'rust'],
  ['Scala',         'scala'],
  ['SCSS',          'scss'],
  ['SQL',           'sql'],
  ['Swift',         'swift'],
  ['T-SQL',         'mssql'],
  ['TOML',          'ini'],
  ['TypeScript',    'typescript'],
  ['XML',           'xml'],
  ['YAML',          'yaml'],
];

const EXT_TO_LANG = {
  js:'javascript', mjs:'javascript', cjs:'javascript',
  ts:'typescript', tsx:'typescript', jsx:'javascript',
  py:'python', json:'json', jsonc:'json',
  html:'html', htm:'html', css:'css', scss:'scss', less:'less',
  md:'markdown', mdx:'markdown', sql:'sql',
  sh:'shell', bash:'shell', zsh:'shell',
  ps1:'powershell', psm1:'powershell',
  rs:'rust', go:'go', java:'java', cs:'csharp',
  cpp:'cpp', cc:'cpp', cxx:'cpp', c:'c', h:'c',
  xml:'xml', csproj:'xml', props:'xml',
  yaml:'yaml', yml:'yaml', toml:'ini', txt:'plaintext',
  dart:'dart', swift:'swift', kt:'kotlin', rb:'ruby',
  php:'php', r:'r', lua:'lua', groovy:'groovy',
};

// ── Populate pickers ─────────────────────────────────────────────────────
LANGUAGES.forEach(([label, id]) => {
  const opt = document.createElement('option');
  opt.value = id ?? 'auto';
  opt.textContent = label;
  langPicker.appendChild(opt);
});
langPicker.value = 'auto';
langPicker.className = 'status-select';

THEME_NAMES.forEach(name => {
  const opt = document.createElement('option');
  opt.value = name;
  opt.textContent = name;
  themePicker.appendChild(opt);
});
themePicker.value = DEFAULT_THEME;
themePicker.className = 'status-select';

// ── Editor ───────────────────────────────────────────────────────────────
registerThemes(monaco);

const editor = monaco.editor.create(document.getElementById('editor'), {
  value: '',
  language: 'plaintext',
  theme: THEMES[DEFAULT_THEME].monacoId,
  fontSize: 14,
  fontFamily: 'Consolas, "Cascadia Code", "Courier New", monospace',
  fontLigatures: true,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  automaticLayout: true,
  tabSize: 4,
  insertSpaces: true,
  wordWrap: 'off',
  renderWhitespace: 'none',
  smoothScrolling: true,
  cursorSmoothCaretAnimation: 'on',
  padding: { top: 10, bottom: 10 },
  formatOnPaste: true,
  formatOnType: true,
});

// ── Status bar live updates ───────────────────────────────────────────────
editor.onDidChangeCursorPosition(({ position }) => {
  document.getElementById('cursor-pos').textContent =
    `Ln ${position.lineNumber}, Col ${position.column}`;
});

// ── Language picker ───────────────────────────────────────────────────────
langPicker.addEventListener('change', () => {
  const val = langPicker.value;
  if (val === 'auto') {
    autoDetect = true;
    // re-detect from path if we have one
    if (currentPath) {
      const lang = langFromPath(currentPath);
      monaco.editor.setModelLanguage(editor.getModel(), lang);
    }
  } else {
    autoDetect = false;
    monaco.editor.setModelLanguage(editor.getModel(), val);
  }
  editor.focus();
});

// ── Theme picker ──────────────────────────────────────────────────────────
function applyTheme(name) {
  const theme = THEMES[name];
  if (!theme) return;
  monaco.editor.setTheme(theme.monacoId);
  statusbar.style.background = theme.statusbar;
  statusbar.style.color      = theme.statusfg;
  document.getElementById('filename').style.color   = theme.statusfg;
  document.getElementById('cursor-pos').style.color = theme.statusfg;
  document.body.classList.toggle('light', !theme.isDark);
  vizSetTheme(theme.viz);
  if (vizOpen) refreshViz();
}

themePicker.addEventListener('change', () => {
  applyTheme(themePicker.value);
  editor.focus();
});

// Apply default theme on load
applyTheme(DEFAULT_THEME);

// ── JSON visualizer ───────────────────────────────────────────────────────
editor.onDidChangeModelContent(() => {
  if (!vizOpen) return;
  clearTimeout(vizJob);
  vizJob = setTimeout(refreshViz, 300);
});

function refreshViz() {
  vizRender(vizContent, editor.getValue());
}

function toggleViz() {
  vizOpen = !vizOpen;
  vizPane.style.display    = vizOpen ? 'block' : 'none';
  vizDivider.style.display = vizOpen ? 'block' : 'none';
  vizBtn.classList.toggle('active', vizOpen);
  if (vizOpen) refreshViz();
}

vizBtn.addEventListener('click', toggleViz);
editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP, toggleViz);

// ── Resize divider ────────────────────────────────────────────────────────
let dragging = false, dragStartX = 0, dragStartWidth = 0;

vizDivider.addEventListener('mousedown', e => {
  dragging = true;
  dragStartX     = e.clientX;
  dragStartWidth = vizPane.offsetWidth;
  vizDivider.classList.add('dragging');
  document.body.style.cursor    = 'col-resize';
  document.body.style.userSelect = 'none';
});
document.addEventListener('mousemove', e => {
  if (!dragging) return;
  const newW = Math.max(180, Math.min(640, dragStartWidth + (dragStartX - e.clientX)));
  vizPane.style.width = `${newW}px`;
});
document.addEventListener('mouseup', () => {
  if (!dragging) return;
  dragging = false;
  vizDivider.classList.remove('dragging');
  document.body.style.cursor    = '';
  document.body.style.userSelect = '';
});

// ── Helpers ───────────────────────────────────────────────────────────────
function langFromPath(path) {
  return EXT_TO_LANG[path.split('.').pop().toLowerCase()] || 'plaintext';
}

function setPath(path) {
  currentPath = path;
  const name  = path ? path.split(/[\\/]/).pop() : 'untitled';
  document.getElementById('filename').textContent = name;
  appWindow.setTitle(path ? `CodePad — ${name}` : 'CodePad');
  if (path && autoDetect) {
    const lang = langFromPath(path);
    monaco.editor.setModelLanguage(editor.getModel(), lang);
    // Sync picker to detected language
    const match = LANGUAGES.find(([, id]) => id === lang);
    langPicker.value = match ? lang : 'auto';
  }
}

// ── File operations ───────────────────────────────────────────────────────
async function openFile() {
  const path = await open({ multiple: false, filters: [{ name: 'All Files', extensions: ['*'] }] });
  if (!path) return;
  try {
    const content = await invoke('read_file', { path });
    editor.setValue(content);
    setPath(path);
    if (vizOpen) refreshViz();
  } catch (e) { console.error('Open failed:', e); }
  editor.focus();
}

async function saveFile() {
  if (!currentPath) return saveFileAs();
  try { await invoke('write_file', { path: currentPath, content: editor.getValue() }); }
  catch (e) { console.error('Save failed:', e); }
}

async function saveFileAs() {
  const path = await save({ filters: [{ name: 'All Files', extensions: ['*'] }] });
  if (!path) return;
  try {
    await invoke('write_file', { path, content: editor.getValue() });
    setPath(path);
  } catch (e) { console.error('Save As failed:', e); }
}

function newFile() {
  editor.setValue('');
  setPath(null);
  autoDetect = true;
  langPicker.value = 'auto';
  monaco.editor.setModelLanguage(editor.getModel(), 'plaintext');
  if (vizOpen) refreshViz();
  editor.focus();
}

// ── Keyboard shortcuts ────────────────────────────────────────────────────
editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO, openFile);
editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, saveFile);
editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, saveFileAs);
editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyN, newFile);

// ── Prettify ──────────────────────────────────────────────────────────────
prettifyBtn.addEventListener('click', () => {
  const lang = editor.getModel().getLanguageId();
  const raw  = editor.getValue();
  let result;
  if (lang === 'json') {
    try { result = JSON.stringify(JSON.parse(raw), null, 2); }
    catch { /* invalid JSON — leave as-is */ }
  } else if (lang === 'sql' || lang === 'mssql') {
    result = formatSql(raw, { language: 'sql', tabWidth: 4, keywordCase: 'upper' });
  }
  if (result !== undefined) editor.setValue(result);
  editor.focus();
});

// ── Init ──────────────────────────────────────────────────────────────────
setPath(null);
editor.focus();
