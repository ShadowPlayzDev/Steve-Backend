document.addEventListener("DOMContentLoaded", function () {
  let colors = [];
  let lockedColors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(getRandomColor());
  }

  function renderPalette() {
    const paletteContainer = document.querySelector('.palette');
    paletteContainer.innerHTML = '';

    colors.forEach((color, index) => {
      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = color;
      colorBox.dataset.index = index;

      const colorActions = document.createElement('div');
      colorActions.classList.add('color-actions');
      
      const lockBtn = document.createElement('span');
      lockBtn.classList.add('material-icons');
      lockBtn.textContent = lockedColors.includes(index) ? 'lock' : 'lock_open';
      lockBtn.addEventListener('click', () => toggleLock(index));
      
      const shuffleBtn = document.createElement('span');
      shuffleBtn.classList.add('material-icons');
      shuffleBtn.textContent = 'refresh';
      shuffleBtn.addEventListener('click', () => shuffleColors(index));

      const complementBtn = document.createElement('span');
      complementBtn.classList.add('material-icons');
      complementBtn.textContent = 'color_lens';
      complementBtn.addEventListener('click', () => applyComplement(index));

      const colorSelectorBtn = document.createElement('span');
      colorSelectorBtn.classList.add('material-icons');
      colorSelectorBtn.textContent = 'colorize';
      colorSelectorBtn.addEventListener('click', () => openColorPicker(index));

      colorActions.appendChild(lockBtn);
      colorActions.appendChild(shuffleBtn);
      colorActions.appendChild(complementBtn);
      colorActions.appendChild(colorSelectorBtn);

      colorBox.appendChild(colorActions);
      paletteContainer.appendChild(colorBox);
    });
  }

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function shuffleColors(index) {
    if (!lockedColors.includes(index)) {
      colors[index] = getRandomColor();
      renderPalette();
    }
  }

  function toggleLock(index) {
    if (lockedColors.includes(index)) {
      lockedColors = lockedColors.filter(i => i !== index);
    } else {
      lockedColors.push(index);
    }
    renderPalette();
  }

  function applyComplement(index) {
    if (!lockedColors.includes(index)) {
      const currentColor = colors[index];
      const complementColor = getComplementColor(currentColor);
      colors[index] = complementColor;
      renderPalette();
    }
  }

  function getComplementColor(color) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');
    b = (255 - b).toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
  }

  function openColorPicker(index) {
    const input = document.createElement('input');
    input.type = 'color';
    input.value = colors[index];
    input.addEventListener('input', (e) => {
      colors[index] = e.target.value;
      renderPalette();
    });
    input.click();
  }

  const addColorBtn = document.getElementById('add-color-btn');
  addColorBtn.addEventListener('click', () => {
    colors.push(getRandomColor());
    renderPalette();
  });

  renderPalette();
});
