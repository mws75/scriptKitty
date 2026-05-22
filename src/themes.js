// ── Theme definitions for CodePad ────────────────────────────────────────
// Each entry has:
//   monacoId  – passed to monaco.editor.setTheme()
//   isDark    – drives body.light class + viz default palette
//   statusbar / statusfg – status bar chrome colors
//   viz       – color palette for the JSON visualizer tree
//   definition – (optional) IStandaloneThemeData passed to defineTheme()

// Colors without '#' prefix — Monaco's rule format requires that
const def = (base, colors, rules) => ({ base, inherit: true, colors, rules });

export const THEMES = {

  'VSCode Dark+': {
    monacoId: 'vs-dark',   // built-in
    isDark: true,
    statusbar: '#007acc', statusfg: '#ffffff',
    viz: { key:'#9cdcfe', string:'#ce9178', number:'#b5cea8', boolean:'#569cd6', null:'#569cd6', punct:'#d4d4d4', count:'#6a9955', arrow:'#858585', error:'#f44747', empty:'#858585' },
  },

  'Monokai': {
    monacoId: 'monokai', isDark: true,
    statusbar: '#414339', statusfg: '#f8f8f2',
    viz: { key:'#a6e22e', string:'#e6db74', number:'#ae81ff', boolean:'#66d9ef', null:'#66d9ef', punct:'#f8f8f2', count:'#75715e', arrow:'#90908a', error:'#f92672', empty:'#90908a' },
    definition: def('vs-dark',
      { 'editor.background':'#272822', 'editor.foreground':'#f8f8f2', 'editor.selectionBackground':'#49483e', 'editorCursor.foreground':'#f8f8f0', 'editor.lineHighlightBackground':'#3e3d32' },
      [
        { token:'comment',                    foreground:'75715e' },
        { token:'keyword',                    foreground:'f92672' },
        { token:'keyword.operator',           foreground:'f92672' },
        { token:'storage',                    foreground:'f92672' },
        { token:'string',                     foreground:'e6db74' },
        { token:'string.key.json',            foreground:'a6e22e' },
        { token:'number',                     foreground:'ae81ff' },
        { token:'constant.numeric',           foreground:'ae81ff' },
        { token:'constant.language',          foreground:'66d9ef' },
        { token:'entity.name.function',       foreground:'a6e22e' },
        { token:'entity.name.class',          foreground:'a6e22e' },
        { token:'support.type',               foreground:'66d9ef' },
        { token:'entity.other.attribute-name',foreground:'a6e22e' },
      ]
    ),
  },

  'Dracula': {
    monacoId: 'dracula', isDark: true,
    statusbar: '#6272a4', statusfg: '#f8f8f2',
    viz: { key:'#50fa7b', string:'#f1fa8c', number:'#bd93f9', boolean:'#bd93f9', null:'#bd93f9', punct:'#f8f8f2', count:'#6272a4', arrow:'#6272a4', error:'#ff5555', empty:'#6272a4' },
    definition: def('vs-dark',
      { 'editor.background':'#282a36', 'editor.foreground':'#f8f8f2', 'editor.selectionBackground':'#44475a', 'editorCursor.foreground':'#f8f8f0', 'editor.lineHighlightBackground':'#44475a' },
      [
        { token:'comment',                    foreground:'6272a4' },
        { token:'keyword',                    foreground:'ff79c6' },
        { token:'keyword.operator',           foreground:'ff79c6' },
        { token:'storage',                    foreground:'ff79c6' },
        { token:'string',                     foreground:'f1fa8c' },
        { token:'string.key.json',            foreground:'50fa7b' },
        { token:'number',                     foreground:'bd93f9' },
        { token:'constant.numeric',           foreground:'bd93f9' },
        { token:'constant.language',          foreground:'bd93f9' },
        { token:'entity.name.function',       foreground:'50fa7b' },
        { token:'entity.name.class',          foreground:'8be9fd' },
        { token:'support.type',               foreground:'8be9fd' },
        { token:'entity.other.attribute-name',foreground:'50fa7b' },
        { token:'variable',                   foreground:'f8f8f2' },
      ]
    ),
  },

  'One Dark': {
    monacoId: 'one-dark', isDark: true,
    statusbar: '#21252b', statusfg: '#9da5b4',
    viz: { key:'#d19a66', string:'#98c379', number:'#d19a66', boolean:'#c678dd', null:'#c678dd', punct:'#abb2bf', count:'#5c6370', arrow:'#636d83', error:'#e06c75', empty:'#636d83' },
    definition: def('vs-dark',
      { 'editor.background':'#282c34', 'editor.foreground':'#abb2bf', 'editor.selectionBackground':'#3e4451', 'editorCursor.foreground':'#528bff', 'editor.lineHighlightBackground':'#2c313a' },
      [
        { token:'comment',                    foreground:'5c6370' },
        { token:'keyword',                    foreground:'c678dd' },
        { token:'keyword.operator',           foreground:'56b6c2' },
        { token:'storage',                    foreground:'c678dd' },
        { token:'string',                     foreground:'98c379' },
        { token:'string.key.json',            foreground:'d19a66' },
        { token:'number',                     foreground:'d19a66' },
        { token:'constant.numeric',           foreground:'d19a66' },
        { token:'constant.language',          foreground:'d19a66' },
        { token:'entity.name.function',       foreground:'61afef' },
        { token:'entity.name.class',          foreground:'e5c07b' },
        { token:'support.type',               foreground:'e5c07b' },
        { token:'variable',                   foreground:'e06c75' },
        { token:'entity.other.attribute-name',foreground:'d19a66' },
      ]
    ),
  },

  'GitHub Light': {
    monacoId: 'vs',   // built-in light
    isDark: false,
    statusbar: '#24292e', statusfg: '#ffffff',
    viz: { key:'#0451a5', string:'#032f62', number:'#005cc5', boolean:'#005cc5', null:'#005cc5', punct:'#24292e', count:'#6a737d', arrow:'#babbbd', error:'#cb2431', empty:'#babbbd' },
  },

  'Solarized Dark': {
    monacoId: 'solarized-dark', isDark: true,
    statusbar: '#073642', statusfg: '#93a1a1',
    viz: { key:'#268bd2', string:'#2aa198', number:'#d33682', boolean:'#2aa198', null:'#2aa198', punct:'#839496', count:'#586e75', arrow:'#586e75', error:'#dc322f', empty:'#586e75' },
    definition: def('vs-dark',
      { 'editor.background':'#002b36', 'editor.foreground':'#839496', 'editor.selectionBackground':'#073642', 'editorCursor.foreground':'#839496', 'editor.lineHighlightBackground':'#073642' },
      [
        { token:'comment',                    foreground:'586e75' },
        { token:'keyword',                    foreground:'859900' },
        { token:'keyword.operator',           foreground:'839496' },
        { token:'storage',                    foreground:'cb4b16' },
        { token:'string',                     foreground:'2aa198' },
        { token:'string.key.json',            foreground:'268bd2' },
        { token:'number',                     foreground:'d33682' },
        { token:'constant.numeric',           foreground:'d33682' },
        { token:'constant.language',          foreground:'2aa198' },
        { token:'entity.name.function',       foreground:'268bd2' },
        { token:'entity.name.class',          foreground:'b58900' },
        { token:'support.type',               foreground:'b58900' },
        { token:'variable',                   foreground:'268bd2' },
        { token:'entity.other.attribute-name',foreground:'839496' },
      ]
    ),
  },

  'Solarized Light': {
    monacoId: 'solarized-light', isDark: false,
    statusbar: '#eee8d5', statusfg: '#586e75',
    viz: { key:'#268bd2', string:'#2aa198', number:'#d33682', boolean:'#2aa198', null:'#2aa198', punct:'#657b83', count:'#93a1a1', arrow:'#93a1a1', error:'#dc322f', empty:'#93a1a1' },
    definition: def('vs',
      { 'editor.background':'#fdf6e3', 'editor.foreground':'#657b83', 'editor.selectionBackground':'#eee8d5', 'editorCursor.foreground':'#657b83', 'editor.lineHighlightBackground':'#eee8d5' },
      [
        { token:'comment',                    foreground:'93a1a1' },
        { token:'keyword',                    foreground:'859900' },
        { token:'keyword.operator',           foreground:'657b83' },
        { token:'storage',                    foreground:'cb4b16' },
        { token:'string',                     foreground:'2aa198' },
        { token:'string.key.json',            foreground:'268bd2' },
        { token:'number',                     foreground:'d33682' },
        { token:'constant.numeric',           foreground:'d33682' },
        { token:'constant.language',          foreground:'2aa198' },
        { token:'entity.name.function',       foreground:'268bd2' },
        { token:'entity.name.class',          foreground:'b58900' },
        { token:'variable',                   foreground:'268bd2' },
      ]
    ),
  },

  'Nord': {
    monacoId: 'nord', isDark: true,
    statusbar: '#3b4252', statusfg: '#d8dee9',
    viz: { key:'#8fbcbb', string:'#a3be8c', number:'#b48ead', boolean:'#81a1c1', null:'#81a1c1', punct:'#eceff4', count:'#616e88', arrow:'#4c566a', error:'#bf616a', empty:'#4c566a' },
    definition: def('vs-dark',
      { 'editor.background':'#2e3440', 'editor.foreground':'#d8dee9', 'editor.selectionBackground':'#434c5e', 'editorCursor.foreground':'#d8dee9', 'editor.lineHighlightBackground':'#3b4252' },
      [
        { token:'comment',                    foreground:'616e88' },
        { token:'keyword',                    foreground:'81a1c1' },
        { token:'keyword.operator',           foreground:'81a1c1' },
        { token:'storage',                    foreground:'81a1c1' },
        { token:'string',                     foreground:'a3be8c' },
        { token:'string.key.json',            foreground:'8fbcbb' },
        { token:'number',                     foreground:'b48ead' },
        { token:'constant.numeric',           foreground:'b48ead' },
        { token:'constant.language',          foreground:'81a1c1' },
        { token:'entity.name.function',       foreground:'88c0d0' },
        { token:'entity.name.class',          foreground:'8fbcbb' },
        { token:'support.type',               foreground:'8fbcbb' },
        { token:'variable',                   foreground:'d8dee9' },
        { token:'entity.other.attribute-name',foreground:'8fbcbb' },
      ]
    ),
  },

  'Gruvbox Dark': {
    monacoId: 'gruvbox-dark', isDark: true,
    statusbar: '#3c3836', statusfg: '#ebdbb2',
    viz: { key:'#b8bb26', string:'#b8bb26', number:'#d3869b', boolean:'#d3869b', null:'#d3869b', punct:'#ebdbb2', count:'#928374', arrow:'#665c54', error:'#fb4934', empty:'#665c54' },
    definition: def('vs-dark',
      { 'editor.background':'#282828', 'editor.foreground':'#ebdbb2', 'editor.selectionBackground':'#3c3836', 'editorCursor.foreground':'#ebdbb2', 'editor.lineHighlightBackground':'#3c3836' },
      [
        { token:'comment',                    foreground:'928374' },
        { token:'keyword',                    foreground:'fb4934' },
        { token:'keyword.operator',           foreground:'fe8019' },
        { token:'storage',                    foreground:'fb4934' },
        { token:'string',                     foreground:'b8bb26' },
        { token:'string.key.json',            foreground:'8ec07c' },
        { token:'number',                     foreground:'d3869b' },
        { token:'constant.numeric',           foreground:'d3869b' },
        { token:'constant.language',          foreground:'d3869b' },
        { token:'entity.name.function',       foreground:'b8bb26' },
        { token:'entity.name.class',          foreground:'fabd2f' },
        { token:'support.type',               foreground:'fabd2f' },
        { token:'variable',                   foreground:'83a598' },
        { token:'entity.other.attribute-name',foreground:'b8bb26' },
      ]
    ),
  },

  'Tomorrow Night': {
    monacoId: 'tomorrow-night', isDark: true,
    statusbar: '#282a2e', statusfg: '#c5c8c6',
    viz: { key:'#81a2be', string:'#b5bd68', number:'#de935f', boolean:'#b294bb', null:'#b294bb', punct:'#c5c8c6', count:'#969896', arrow:'#969896', error:'#cc6666', empty:'#969896' },
    definition: def('vs-dark',
      { 'editor.background':'#1d1f21', 'editor.foreground':'#c5c8c6', 'editor.selectionBackground':'#373b41', 'editorCursor.foreground':'#c5c8c6', 'editor.lineHighlightBackground':'#282a2e' },
      [
        { token:'comment',                    foreground:'969896' },
        { token:'keyword',                    foreground:'b294bb' },
        { token:'keyword.operator',           foreground:'8abeb7' },
        { token:'storage',                    foreground:'b294bb' },
        { token:'string',                     foreground:'b5bd68' },
        { token:'string.key.json',            foreground:'81a2be' },
        { token:'number',                     foreground:'de935f' },
        { token:'constant.numeric',           foreground:'de935f' },
        { token:'constant.language',          foreground:'de935f' },
        { token:'entity.name.function',       foreground:'81a2be' },
        { token:'entity.name.class',          foreground:'f0c674' },
        { token:'support.type',               foreground:'f0c674' },
        { token:'variable',                   foreground:'cc6666' },
        { token:'entity.other.attribute-name',foreground:'81a2be' },
      ]
    ),
  },

  'Rosé Pine Dawn': {
    monacoId: 'rose-pine-dawn', isDark: false,
    statusbar: '#d7827e', statusfg: '#fffaf3',
    viz: { key:'#d7827e', string:'#ea9d34', number:'#b4637a', boolean:'#907aa9', null:'#907aa9', punct:'#797593', count:'#9893a5', arrow:'#9893a5', error:'#b4637a', empty:'#9893a5' },
    definition: def('vs',
      { 'editor.background':'#faf4ed', 'editor.foreground':'#575279', 'editor.selectionBackground':'#dfdad9', 'editorCursor.foreground':'#575279', 'editor.lineHighlightBackground':'#f2e9e1' },
      [
        { token:'comment',                    foreground:'9893a5' },
        { token:'keyword',                    foreground:'907aa9' },
        { token:'keyword.operator',           foreground:'797593' },
        { token:'storage',                    foreground:'907aa9' },
        { token:'string',                     foreground:'ea9d34' },
        { token:'string.key.json',            foreground:'d7827e' },
        { token:'number',                     foreground:'b4637a' },
        { token:'constant.numeric',           foreground:'b4637a' },
        { token:'constant.language',          foreground:'d7827e' },
        { token:'entity.name.function',       foreground:'d7827e' },
        { token:'entity.name.class',          foreground:'56949f' },
        { token:'variable',                   foreground:'575279' },
      ]
    ),
  },

  'Catppuccin Latte': {
    monacoId: 'catppuccin-latte', isDark: false,
    statusbar: '#8839ef', statusfg: '#eff1f5',
    viz: { key:'#1e66f5', string:'#40a02b', number:'#fe640b', boolean:'#8839ef', null:'#8839ef', punct:'#5c5f77', count:'#9ca0b0', arrow:'#9ca0b0', error:'#d20f39', empty:'#9ca0b0' },
    definition: def('vs',
      { 'editor.background':'#eff1f5', 'editor.foreground':'#4c4f69', 'editor.selectionBackground':'#ccd0da', 'editorCursor.foreground':'#dc8a78', 'editor.lineHighlightBackground':'#e6e9ef' },
      [
        { token:'comment',                    foreground:'9ca0b0' },
        { token:'keyword',                    foreground:'8839ef' },
        { token:'keyword.operator',           foreground:'179299' },
        { token:'storage',                    foreground:'8839ef' },
        { token:'string',                     foreground:'40a02b' },
        { token:'string.key.json',            foreground:'1e66f5' },
        { token:'number',                     foreground:'fe640b' },
        { token:'constant.numeric',           foreground:'fe640b' },
        { token:'constant.language',          foreground:'fe640b' },
        { token:'entity.name.function',       foreground:'1e66f5' },
        { token:'entity.name.class',          foreground:'df8e1d' },
        { token:'support.type',               foreground:'df8e1d' },
        { token:'variable',                   foreground:'4c4f69' },
      ]
    ),
  },

  'Lavender': {
    monacoId: 'lavender', isDark: false,
    statusbar: '#8b6fc0', statusfg: '#ffffff',
    viz: { key:'#7c3aed', string:'#be185d', number:'#9333ea', boolean:'#8b5cf6', null:'#8b5cf6', punct:'#6b5b95', count:'#a99ec4', arrow:'#b8aed0', error:'#dc2626', empty:'#b8aed0' },
    definition: def('vs',
      { 'editor.background':'#f5f0ff', 'editor.foreground':'#4a3f6b', 'editor.selectionBackground':'#e2d8f5', 'editorCursor.foreground':'#6c5ce7', 'editor.lineHighlightBackground':'#ede8f8' },
      [
        { token:'comment',                    foreground:'a99ec4' },
        { token:'keyword',                    foreground:'8b5cf6' },
        { token:'keyword.operator',           foreground:'6366f1' },
        { token:'storage',                    foreground:'7c3aed' },
        { token:'string',                     foreground:'be185d' },
        { token:'string.key.json',            foreground:'7c3aed' },
        { token:'number',                     foreground:'9333ea' },
        { token:'constant.numeric',           foreground:'9333ea' },
        { token:'constant.language',          foreground:'a855f7' },
        { token:'entity.name.function',       foreground:'d946ef' },
        { token:'entity.name.class',          foreground:'6d28d9' },
        { token:'variable',                   foreground:'4a3f6b' },
      ]
    ),
  },

  'Sakura': {
    monacoId: 'sakura', isDark: false,
    statusbar: '#e8829b', statusfg: '#ffffff',
    viz: { key:'#8e24aa', string:'#c2185b', number:'#8e24aa', boolean:'#d6336c', null:'#d6336c', punct:'#7c5068', count:'#c9a0b0', arrow:'#d4a5b5', error:'#c62828', empty:'#d4a5b5' },
    definition: def('vs',
      { 'editor.background':'#fef5f8', 'editor.foreground':'#5c3d4f', 'editor.selectionBackground':'#fce4ec', 'editorCursor.foreground':'#d6336c', 'editor.lineHighlightBackground':'#fce4ec' },
      [
        { token:'comment',                    foreground:'c9a0b0' },
        { token:'keyword',                    foreground:'d6336c' },
        { token:'keyword.operator',           foreground:'ad1457' },
        { token:'storage',                    foreground:'c2185b' },
        { token:'string',                     foreground:'c2185b' },
        { token:'string.key.json',            foreground:'8e24aa' },
        { token:'number',                     foreground:'8e24aa' },
        { token:'constant.numeric',           foreground:'8e24aa' },
        { token:'constant.language',          foreground:'ad1457' },
        { token:'entity.name.function',       foreground:'9c27b0' },
        { token:'entity.name.class',          foreground:'7b1fa2' },
        { token:'variable',                   foreground:'5c3d4f' },
      ]
    ),
  },

};

export const THEME_NAMES = Object.keys(THEMES);
export const DEFAULT_THEME = 'VSCode Dark+';

/** Register all custom themes with Monaco. Call once at startup. */
export function registerThemes(monaco) {
  for (const [, theme] of Object.entries(THEMES)) {
    if (theme.definition) {
      monaco.editor.defineTheme(theme.monacoId, theme.definition);
    }
  }
}
