// ── JSON Visualizer ───────────────────────────────────────────────────────
// Collapsible tree view with Monaco-matched type coloring.
// Auto-expands to depth 2; deeper nodes start collapsed.

// Colors pulled directly from Monaco's built-in vs-dark / vs token themes
const PALETTES = {
  dark: {
    key:     '#9cdcfe',   // JSON property name
    string:  '#ce9178',   // string value
    number:  '#b5cea8',   // number
    boolean: '#569cd6',   // true / false
    null:    '#569cd6',   // null  (same as keyword in Monaco)
    punct:   '#d4d4d4',   // brackets, colons
    count:   '#6a9955',   // item/key count hint
    arrow:   '#858585',   // collapse arrow
    error:   '#f44747',
    empty:   '#858585',
  },
  light: {
    key:     '#0451a5',
    string:  '#a31515',
    number:  '#098658',
    boolean: '#0000ff',
    null:    '#0000ff',
    punct:   '#000000',
    count:   '#008000',
    arrow:   '#767676',
    error:   '#cd3131',
    empty:   '#767676',
  },
};

let pal = PALETTES.dark;

/**
 * Update palette from a theme's viz object, or fall back to generic dark/light.
 * @param {object|boolean} paletteOrDark  viz palette object, or boolean isDark
 */
export function setTheme(paletteOrDark) {
  if (typeof paletteOrDark === 'boolean') {
    pal = paletteOrDark ? PALETTES.dark : PALETTES.light;
  } else {
    pal = { ...PALETTES.dark, ...paletteOrDark };
  }
}

/**
 * Re-render the visualizer into `container`.
 * @param {HTMLElement} container
 * @param {string} jsonText  raw text from the editor
 */
export function render(container, jsonText) {
  container.innerHTML = '';

  if (!jsonText.trim()) {
    container.appendChild(makeEmpty('No content'));
    return;
  }

  try {
    const data = JSON.parse(jsonText);
    container.appendChild(buildNode(data, null, 0));
  } catch (e) {
    container.appendChild(makeError(e.message));
  }
}

// ── Node construction ─────────────────────────────────────────────────────

function buildNode(value, key, depth) {
  const type = typeOf(value);
  const autoExpand = depth < 2;

  if (type === 'object' || type === 'array') {
    return buildComplex(value, key, depth, type, autoExpand);
  }
  return buildPrimitive(value, key, type);
}

function buildPrimitive(value, key, type) {
  const row = el('div', 'viz-row');

  // indent spacer at depth 0 so there's breathing room
  row.appendChild(el('span', 'viz-arrow')); // empty spacer to align with arrows

  if (key !== null) {
    row.appendChild(keySpan(key));
    row.appendChild(punc(': '));
  }

  const valSpan = el('span', `viz-val viz-${type}`);
  valSpan.style.color = pal[type] ?? pal.punct;

  const raw = formatPrimitive(value, type);
  if (type === 'string' && raw.length > 80) {
    valSpan.textContent = raw.slice(0, 80) + '…"';
    valSpan.title = raw; // full value on hover
  } else {
    valSpan.textContent = raw;
  }

  row.appendChild(valSpan);
  return row;
}

function buildComplex(value, key, depth, type, expanded) {
  const isArr = type === 'array';
  const entries = isArr ? value : Object.entries(value);
  const count   = isArr ? value.length : entries.length;
  const open    = isArr ? '[' : '{';
  const close   = isArr ? ']' : '}';
  const countHint = isArr
    ? `${count} item${count !== 1 ? 's' : ''}`
    : `${count} key${count !== 1 ? 's' : ''}`;

  const wrapper = el('div', 'viz-node');

  // ── Header row ──────────────────────────────────────────────
  const header = el('div', 'viz-row viz-header');
  if (count > 0) header.style.cursor = 'pointer';

  const arrow = el('span', 'viz-arrow');
  arrow.style.color = pal.arrow;
  arrow.textContent = count > 0 ? (expanded ? '▾' : '▸') : ' ';
  header.appendChild(arrow);

  if (key !== null) {
    header.appendChild(keySpan(key));
    header.appendChild(punc(': '));
  }

  header.appendChild(punc(open));

  // collapsed summary
  const summary = el('span', 'viz-summary');
  summary.style.color = pal.count;
  summary.textContent = ` ${countHint} `;
  summary.style.display = expanded ? 'none' : 'inline';
  header.appendChild(summary);

  const inlineClose = punc(close);
  inlineClose.style.display = expanded ? 'none' : 'inline';
  header.appendChild(inlineClose);

  wrapper.appendChild(header);

  // ── Children ────────────────────────────────────────────────
  const childrenEl = el('div', 'viz-children');
  childrenEl.style.display = expanded ? 'block' : 'none';

  if (isArr) {
    value.forEach((item, i) => {
      const child = el('div', 'viz-child');
      // show array index as a muted prefix
      const idx = el('span', 'viz-index');
      idx.style.color = pal.count;
      idx.textContent = String(i);
      child.appendChild(idx);
      child.appendChild(buildNode(item, null, depth + 1));
      childrenEl.appendChild(child);
    });
  } else {
    Object.entries(value).forEach(([k, v]) => {
      const child = el('div', 'viz-child');
      child.appendChild(buildNode(v, k, depth + 1));
      childrenEl.appendChild(child);
    });
  }

  wrapper.appendChild(childrenEl);

  // ── Footer (closing bracket, shown when expanded) ──────────
  const footer = el('div', 'viz-row viz-footer');
  const footerSpacer = el('span', 'viz-arrow'); // align with arrows
  footer.appendChild(footerSpacer);
  footer.appendChild(punc(close));
  footer.style.display = expanded ? 'flex' : 'none';
  wrapper.appendChild(footer);

  // ── Click: toggle expand/collapse ──────────────────────────
  if (count > 0) {
    header.addEventListener('click', (e) => {
      const opening = childrenEl.style.display === 'none';

      // Alt/Option+click: recursively expand or collapse all
      if (e.altKey) {
        setAllExpanded(wrapper, opening);
        return;
      }

      childrenEl.style.display = opening ? 'block' : 'none';
      footer.style.display      = opening ? 'flex'  : 'none';
      summary.style.display     = opening ? 'none'  : 'inline';
      inlineClose.style.display = opening ? 'none'  : 'inline';
      arrow.textContent         = opening ? '▾' : '▸';
    });
  }

  return wrapper;
}

/** Recursively expand or collapse every node inside a wrapper. */
function setAllExpanded(wrapper, expand) {
  wrapper.querySelectorAll('.viz-header').forEach(header => {
    const node        = header.parentElement;
    const childrenEl  = node.querySelector(':scope > .viz-children');
    const footer      = node.querySelector(':scope > .viz-footer');
    const summary     = header.querySelector('.viz-summary');
    const inlineClose = summary?.nextElementSibling;
    const arrow       = header.querySelector('.viz-arrow');

    if (!childrenEl) return;

    childrenEl.style.display  = expand ? 'block'  : 'none';
    if (footer)      footer.style.display      = expand ? 'flex'   : 'none';
    if (summary)     summary.style.display      = expand ? 'none'   : 'inline';
    if (inlineClose) inlineClose.style.display  = expand ? 'none'   : 'inline';
    if (arrow)       arrow.textContent          = expand ? '▾' : '▸';
  });
}

// ── Utilities ─────────────────────────────────────────────────────────────

function typeOf(v) {
  if (v === null)        return 'null';
  if (Array.isArray(v)) return 'array';
  return typeof v; // 'object' | 'string' | 'number' | 'boolean'
}

function formatPrimitive(value, type) {
  if (type === 'string') return `"${value}"`;
  if (type === 'null')   return 'null';
  return String(value);
}

function keySpan(key) {
  const s = el('span', 'viz-key');
  s.style.color = pal.key;
  s.textContent = `"${key}"`;
  return s;
}

function punc(text) {
  const s = el('span', 'viz-punc');
  s.style.color = pal.punct;
  s.textContent = text;
  return s;
}

function el(tag, className) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  return e;
}

function makeEmpty(msg) {
  const d = el('div', 'viz-empty');
  d.style.color = pal.empty;
  d.textContent = msg;
  return d;
}

function makeError(msg) {
  const d = el('div', 'viz-error');
  d.style.color = pal.error;
  d.textContent = `⚠  ${msg}`;
  return d;
}
