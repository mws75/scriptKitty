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

  // ── Catppuccin family ────────────────────────────────────────────────────

  'Catppuccin Mocha': {
    monacoId: 'catppuccin-mocha', isDark: true,
    statusbar: '#313244', statusfg: '#cdd6f4',
    viz: { key:'#89dceb', string:'#a6e3a1', number:'#fab387', boolean:'#cba6f7', null:'#cba6f7', punct:'#cdd6f4', count:'#6c7086', arrow:'#585b70', error:'#f38ba8', empty:'#6c7086' },
    definition: def('vs-dark',
      { 'editor.background':'#1e1e2e', 'editor.foreground':'#cdd6f4', 'editor.selectionBackground':'#45475a', 'editorCursor.foreground':'#f5e0dc', 'editor.lineHighlightBackground':'#313244' },
      [
        { token:'comment',                    foreground:'6c7086' },
        { token:'keyword',                    foreground:'cba6f7' },
        { token:'keyword.operator',           foreground:'89dceb' },
        { token:'storage',                    foreground:'cba6f7' },
        { token:'string',                     foreground:'a6e3a1' },
        { token:'string.key.json',            foreground:'89dceb' },
        { token:'number',                     foreground:'fab387' },
        { token:'constant.numeric',           foreground:'fab387' },
        { token:'constant.language',          foreground:'fab387' },
        { token:'entity.name.function',       foreground:'89b4fa' },
        { token:'entity.name.class',          foreground:'f38ba8' },
        { token:'support.type',               foreground:'94e2d5' },
        { token:'variable',                   foreground:'cdd6f4' },
        { token:'entity.other.attribute-name',foreground:'89dceb' },
      ]
    ),
  },

  'Catppuccin Frappe': {
    monacoId: 'catppuccin-frappe', isDark: true,
    statusbar: '#292c3c', statusfg: '#c6d0f5',
    viz: { key:'#99d1db', string:'#a6d189', number:'#ef9f76', boolean:'#ca9ee6', null:'#ca9ee6', punct:'#c6d0f5', count:'#737994', arrow:'#626880', error:'#e78284', empty:'#737994' },
    definition: def('vs-dark',
      { 'editor.background':'#303446', 'editor.foreground':'#c6d0f5', 'editor.selectionBackground':'#414559', 'editorCursor.foreground':'#f2d5cf', 'editor.lineHighlightBackground':'#292c3c' },
      [
        { token:'comment',                    foreground:'737994' },
        { token:'keyword',                    foreground:'ca9ee6' },
        { token:'keyword.operator',           foreground:'99d1db' },
        { token:'storage',                    foreground:'ca9ee6' },
        { token:'string',                     foreground:'a6d189' },
        { token:'string.key.json',            foreground:'99d1db' },
        { token:'number',                     foreground:'ef9f76' },
        { token:'constant.numeric',           foreground:'ef9f76' },
        { token:'constant.language',          foreground:'ef9f76' },
        { token:'entity.name.function',       foreground:'8caaee' },
        { token:'entity.name.class',          foreground:'e78284' },
        { token:'support.type',               foreground:'81c8be' },
        { token:'variable',                   foreground:'c6d0f5' },
        { token:'entity.other.attribute-name',foreground:'99d1db' },
      ]
    ),
  },

  'Catppuccin Macchiato': {
    monacoId: 'catppuccin-macchiato', isDark: true,
    statusbar: '#1e2030', statusfg: '#cad3f5',
    viz: { key:'#91d7e3', string:'#a6da95', number:'#f5a97f', boolean:'#c6a0f6', null:'#c6a0f6', punct:'#cad3f5', count:'#6e738d', arrow:'#5b6078', error:'#ed8796', empty:'#6e738d' },
    definition: def('vs-dark',
      { 'editor.background':'#24273a', 'editor.foreground':'#cad3f5', 'editor.selectionBackground':'#363a4f', 'editorCursor.foreground':'#f4dbd6', 'editor.lineHighlightBackground':'#1e2030' },
      [
        { token:'comment',                    foreground:'6e738d' },
        { token:'keyword',                    foreground:'c6a0f6' },
        { token:'keyword.operator',           foreground:'91d7e3' },
        { token:'storage',                    foreground:'c6a0f6' },
        { token:'string',                     foreground:'a6da95' },
        { token:'string.key.json',            foreground:'91d7e3' },
        { token:'number',                     foreground:'f5a97f' },
        { token:'constant.numeric',           foreground:'f5a97f' },
        { token:'constant.language',          foreground:'f5a97f' },
        { token:'entity.name.function',       foreground:'8aadf4' },
        { token:'entity.name.class',          foreground:'ed8796' },
        { token:'support.type',               foreground:'8bd5ca' },
        { token:'variable',                   foreground:'cad3f5' },
        { token:'entity.other.attribute-name',foreground:'91d7e3' },
      ]
    ),
  },

  // ── Cyberpunk — dark ─────────────────────────────────────────────────────

  'Tokyo Night': {
    monacoId: 'tokyo-night', isDark: true,
    statusbar: '#16161e', statusfg: '#7aa2f7',
    viz: { key:'#7dcfff', string:'#9ece6a', number:'#ff9e64', boolean:'#bb9af7', null:'#bb9af7', punct:'#a9b1d6', count:'#565f89', arrow:'#414868', error:'#f7768e', empty:'#565f89' },
    definition: def('vs-dark',
      { 'editor.background':'#1a1b26', 'editor.foreground':'#a9b1d6', 'editor.selectionBackground':'#283457', 'editorCursor.foreground':'#c0caf5', 'editor.lineHighlightBackground':'#292e42' },
      [
        { token:'comment',                    foreground:'565f89' },
        { token:'keyword',                    foreground:'bb9af7' },
        { token:'keyword.operator',           foreground:'89ddff' },
        { token:'storage',                    foreground:'bb9af7' },
        { token:'string',                     foreground:'9ece6a' },
        { token:'string.key.json',            foreground:'7dcfff' },
        { token:'number',                     foreground:'ff9e64' },
        { token:'constant.numeric',           foreground:'ff9e64' },
        { token:'constant.language',          foreground:'ff9e64' },
        { token:'entity.name.function',       foreground:'7aa2f7' },
        { token:'entity.name.class',          foreground:'2ac3de' },
        { token:'support.type',               foreground:'2ac3de' },
        { token:'variable',                   foreground:'f7768e' },
        { token:'entity.other.attribute-name',foreground:'73daca' },
      ]
    ),
  },

  'Synthwave \'84': {
    monacoId: 'synthwave-84', isDark: true,
    statusbar: '#2a1f3d', statusfg: '#ff7edb',
    viz: { key:'#36f9f6', string:'#ff8b39', number:'#f97e72', boolean:'#fede5d', null:'#fede5d', punct:'#ffffff', count:'#848bbd', arrow:'#495495', error:'#fe4450', empty:'#848bbd' },
    definition: def('vs-dark',
      { 'editor.background':'#262335', 'editor.foreground':'#ffffff', 'editor.selectionBackground':'#3a2d5b', 'editorCursor.foreground':'#ff7edb', 'editor.lineHighlightBackground':'#2d2b55' },
      [
        { token:'comment',                    foreground:'848bbd' },
        { token:'keyword',                    foreground:'ff7edb' },
        { token:'keyword.operator',           foreground:'ff7edb' },
        { token:'storage',                    foreground:'fede5d' },
        { token:'string',                     foreground:'ff8b39' },
        { token:'string.key.json',            foreground:'36f9f6' },
        { token:'number',                     foreground:'f97e72' },
        { token:'constant.numeric',           foreground:'f97e72' },
        { token:'constant.language',          foreground:'fede5d' },
        { token:'entity.name.function',       foreground:'36f9f6' },
        { token:'entity.name.class',          foreground:'72f1b8' },
        { token:'support.type',               foreground:'72f1b8' },
        { token:'variable',                   foreground:'fe4450' },
        { token:'entity.other.attribute-name',foreground:'36f9f6' },
      ]
    ),
  },

  'Cyberpunk 2077': {
    monacoId: 'cyberpunk-2077', isDark: true,
    statusbar: '#fcee0a', statusfg: '#0d0208',
    viz: { key:'#01cdfe', string:'#05ffa1', number:'#ff71ce', boolean:'#fcee0a', null:'#fcee0a', punct:'#f0f0f0', count:'#454b6c', arrow:'#2a2d4a', error:'#ff2d55', empty:'#454b6c' },
    definition: def('vs-dark',
      { 'editor.background':'#0d0208', 'editor.foreground':'#f0f0f0', 'editor.selectionBackground':'#1a1a3e', 'editorCursor.foreground':'#fcee0a', 'editor.lineHighlightBackground':'#12121f' },
      [
        { token:'comment',                    foreground:'454b6c' },
        { token:'keyword',                    foreground:'fcee0a' },
        { token:'keyword.operator',           foreground:'01cdfe' },
        { token:'storage',                    foreground:'fcee0a' },
        { token:'string',                     foreground:'05ffa1' },
        { token:'string.key.json',            foreground:'01cdfe' },
        { token:'number',                     foreground:'ff71ce' },
        { token:'constant.numeric',           foreground:'ff71ce' },
        { token:'constant.language',          foreground:'b967ff' },
        { token:'entity.name.function',       foreground:'01cdfe' },
        { token:'entity.name.class',          foreground:'b967ff' },
        { token:'support.type',               foreground:'b967ff' },
        { token:'variable',                   foreground:'ff71ce' },
        { token:'entity.other.attribute-name',foreground:'01cdfe' },
      ]
    ),
  },

  'Neon Noir': {
    monacoId: 'neon-noir', isDark: true,
    statusbar: '#1a0510', statusfg: '#ff2d78',
    viz: { key:'#00d4ff', string:'#00ff9f', number:'#ff9f00', boolean:'#ff2d78', null:'#ff2d78', punct:'#e0e0e0', count:'#555555', arrow:'#333333', error:'#ff2d55', empty:'#555555' },
    definition: def('vs-dark',
      { 'editor.background':'#0d0d0d', 'editor.foreground':'#e8e8e8', 'editor.selectionBackground':'#2d0a1a', 'editorCursor.foreground':'#ff2d78', 'editor.lineHighlightBackground':'#1a1a1a' },
      [
        { token:'comment',                    foreground:'555555' },
        { token:'keyword',                    foreground:'ff2d78' },
        { token:'keyword.operator',           foreground:'00d4ff' },
        { token:'storage',                    foreground:'ff2d78' },
        { token:'string',                     foreground:'00ff9f' },
        { token:'string.key.json',            foreground:'00d4ff' },
        { token:'number',                     foreground:'ff9f00' },
        { token:'constant.numeric',           foreground:'ff9f00' },
        { token:'constant.language',          foreground:'bf5fff' },
        { token:'entity.name.function',       foreground:'00d4ff' },
        { token:'entity.name.class',          foreground:'bf5fff' },
        { token:'support.type',               foreground:'bf5fff' },
        { token:'variable',                   foreground:'ff2d78' },
        { token:'entity.other.attribute-name',foreground:'00d4ff' },
      ]
    ),
  },

  // ── Cyberpunk — light ────────────────────────────────────────────────────

  'Holographic': {
    monacoId: 'holographic', isDark: false,
    statusbar: '#7c3aed', statusfg: '#ffffff',
    viz: { key:'#0891b2', string:'#0891b2', number:'#db2777', boolean:'#7c3aed', null:'#7c3aed', punct:'#0a0a2e', count:'#94a3b8', arrow:'#cbd5e1', error:'#dc2626', empty:'#94a3b8' },
    definition: def('vs',
      { 'editor.background':'#f8f9ff', 'editor.foreground':'#0a0a2e', 'editor.selectionBackground':'#ddd6fe', 'editorCursor.foreground':'#7c3aed', 'editor.lineHighlightBackground':'#f0ebff' },
      [
        { token:'comment',                    foreground:'94a3b8' },
        { token:'keyword',                    foreground:'7c3aed' },
        { token:'keyword.operator',           foreground:'0891b2' },
        { token:'storage',                    foreground:'7c3aed' },
        { token:'string',                     foreground:'0891b2' },
        { token:'string.key.json',            foreground:'2563eb' },
        { token:'number',                     foreground:'db2777' },
        { token:'constant.numeric',           foreground:'db2777' },
        { token:'constant.language',          foreground:'7c3aed' },
        { token:'entity.name.function',       foreground:'2563eb' },
        { token:'entity.name.class',          foreground:'059669' },
        { token:'support.type',               foreground:'059669' },
        { token:'variable',                   foreground:'0a0a2e' },
        { token:'entity.other.attribute-name',foreground:'2563eb' },
      ]
    ),
  },

  'Neon Paper': {
    monacoId: 'neon-paper', isDark: false,
    statusbar: '#d400ff', statusfg: '#ffffff',
    viz: { key:'#3a86ff', string:'#00b4d8', number:'#ff006e', boolean:'#d400ff', null:'#d400ff', punct:'#111111', count:'#adb5bd', arrow:'#ced4da', error:'#d00000', empty:'#adb5bd' },
    definition: def('vs',
      { 'editor.background':'#ffffff', 'editor.foreground':'#111111', 'editor.selectionBackground':'#e9d5ff', 'editorCursor.foreground':'#d400ff', 'editor.lineHighlightBackground':'#faf5ff' },
      [
        { token:'comment',                    foreground:'adb5bd' },
        { token:'keyword',                    foreground:'d400ff' },
        { token:'keyword.operator',           foreground:'3a86ff' },
        { token:'storage',                    foreground:'d400ff' },
        { token:'string',                     foreground:'00b4d8' },
        { token:'string.key.json',            foreground:'3a86ff' },
        { token:'number',                     foreground:'ff006e' },
        { token:'constant.numeric',           foreground:'ff006e' },
        { token:'constant.language',          foreground:'d400ff' },
        { token:'entity.name.function',       foreground:'3a86ff' },
        { token:'entity.name.class',          foreground:'06d6a0' },
        { token:'support.type',               foreground:'06d6a0' },
        { token:'variable',                   foreground:'111111' },
        { token:'entity.other.attribute-name',foreground:'3a86ff' },
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
