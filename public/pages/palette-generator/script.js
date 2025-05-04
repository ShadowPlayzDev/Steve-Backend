// script.js
const paletteContainer = document.getElementById('palette');
const regenBtn = document.getElementById('regenBtn');
const addBtn = document.getElementById('addBtn');
const complementBtn = document.getElementById('complementBtn');
const shareBtn = document.getElementById('shareBtn');
const deleteBtn = document.getElementById('deleteBtn'); // for delete button
const colorPicker = document.getElementById('colorPicker'); // for color picker input

let palette = [];
let locked = {};

function randomColor() {
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return hex;
}

function generatePalette(n = 5) {
  palette = palette.map((color, i) => locked[i] ? color : randomColor());
  while (palette.length < n) palette.push(randomColor());
  renderPalette();
}

function updateShareLink() {
  const base = location.origin + location.pathname;
  const hash = palette.join('-').replace(/#/g, '');
  const shareURL = `${base}#${palette.join('-')}`; // Hash method
  history.replaceState(null, '', `#${palette.join('-')}`); // Update URL hash
  console.log("Share this link:", shareURL);
}

function renderPalette() {
  paletteContainer.innerHTML = '';
  palette.forEach((color, index) => {
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = color;
    box.innerText = color;

    const actions = document.createElement('div');
    actions.className = 'color-actions';

    const lock = document.createElement('span');
    lock.className = 'material-symbols-outlined';
    lock.innerText = locked[index] ? 'lock' : 'lock_open';
    lock.onclick = () => {
      locked[index] = !locked[index];
      renderPalette();
    };

    const copy = document.createElement('span');
    copy.className = 'material-symbols-outlined';
    copy.innerText = 'content_copy';
    copy.onclick = () => {
      navigator.clipboard.writeText(color);
    };

    const del = document.createElement('span');
    del.className = 'material-symbols-outlined';
    del.innerText = 'delete';
    del.onclick = () => {
      palette.splice(index, 1);
      locked = Object.keys(locked).filter(key => key != index).reduce((obj, key) => {
        obj[key] = locked[key];
        return obj;
      }, {});
      renderPalette();
    };

    actions.append(lock, copy, del);
    box.append(actions);
    box.onclick = () => openColorPicker(index);

    paletteContainer.appendChild(box);
  });
  updateShareLink();
}

function openColorPicker(index) {
  colorPicker.value = palette[index];
  colorPicker.style.display = 'block';
  colorPicker.oninput = () => {
    palette[index] = colorPicker.value;
    renderPalette();
  };
}

regenBtn.addEventListener('click', () => generatePalette(palette.length));
addBtn.addEventListener('click', () => {
  palette.push(randomColor());
  renderPalette();
});

complementBtn.addEventListener('click', () => {
  palette = palette.map((hex, i) => {
    if (locked[i]) return hex; // Ignore locked colors
    const c = parseInt(hex.slice(1), 16);
    const r = 255 - (c >> 16 & 255);
    const g = 255 - (c >> 8 & 255);
    const b = 255 - (c & 255);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  });
  renderPalette();
});

shareBtn.addEventListener('click', () => {
  const hash = palette.join('-').replace(/#/g, '');
  const shareURL = `${location.origin}${location.pathname}#${hash}`; // Hash method
  navigator.clipboard.writeText(shareURL);
  alert('Shareable link copied!');
});

// Load palette from URL hash if present
const hash = location.hash.slice(1);
if (hash) {
  palette = hash.split('-').map(c => '#' + c);
  renderPalette();
} else {
  // Or use ?share param
  const params = new URLSearchParams(window.location.search);
  const shareColors = params.get('share');
  if (shareColors) {
    palette = shareColors.split(',').map(c => c.trim());
    renderPalette();
  } else {
    generatePalette();
  }
}
