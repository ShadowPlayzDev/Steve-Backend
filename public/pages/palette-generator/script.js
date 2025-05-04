// script.js
const paletteContainer = document.getElementById('palette');
const regenBtn = document.getElementById('regenBtn');
const addBtn = document.getElementById('addBtn');
const complementBtn = document.getElementById('complementBtn');

let palette = [];
let locked = {};

function randomColor() {
  const hex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return hex;
}

function generatePalette(n = 5) {
  palette = palette.map((color, i) => locked[i] ? color : randomColor());
  while (palette.length < n) palette.push(randomColor());
  renderPalette();
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

    actions.append(lock, copy);
    box.append(actions);
    paletteContainer.appendChild(box);
  });
}

regenBtn.addEventListener('click', () => generatePalette(palette.length));
addBtn.addEventListener('click', () => {
  palette.push(randomColor());
  renderPalette();
});

complementBtn.addEventListener('click', () => {
  palette = palette.map(hex => {
    const c = parseInt(hex.slice(1), 16);
    const r = 255 - (c >> 16 & 255);
    const g = 255 - (c >> 8 & 255);
    const b = 255 - (c & 255);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  });
  renderPalette();
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    generatePalette(palette.length);
  }
});

generatePalette();
