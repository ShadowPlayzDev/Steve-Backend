document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables for colors and their locked state
  let colors = [];
  let lockedColors = [];

  // Add initial colors to the palette (for example purposes)
  for (let i = 0; i < 5; i++) {
    colors.push(getRandomColor());
  }

  // Create the palette
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
      
      // Lock/Unlock button (Material icon)
      const lockBtn = document.createElement('span');
      lockBtn.classList.add('material-icons');
      lockBtn.textContent = lockedColors.includes(index) ? 'lock' : 'lock_open';
      lockBtn.addEventListener('click', () => toggleLock(index));
      
      // Complement button (Material icon)
      const complementBtn = document.createElement('span');
      complementBtn.classList.add('material-icons');
      complementBtn.textContent = 'color_lens';
      complementBtn.addEventListener('click', () => applyComplement(index));

      // Color selector button (Material icon)
      const colorSelectorBtn = document.createElement('span');
      colorSelectorBtn.classList.add('material-icons');
      colorSelectorBtn.textContent = 'palette';
      colorSelectorBtn.addEventListener('click', () => openColorPicker(index));

      colorActions.appendChild(lockBtn);
      colorActions.appendChild(complementBtn);
      colorActions.appendChild(colorSelectorBtn);

      colorBox.appendChild(colorActions);
      paletteContainer.appendChild(colorBox);
    });
  }

  // Generate a random color in hex format
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  // Toggle lock/unlock for a color
  function toggleLock(index) {
    if (lockedColors.includes(index)) {
      lockedColors = lockedColors.filter(i => i !== index);
    } else {
      lockedColors.push(index);
    }
    renderPalette();
  }

  // Apply complementary color (invert the current color)
  function applyComplement(index) {
    if (!lockedColors.includes(index)) {
      const currentColor = colors[index];
      const complementColor = getComplementColor(currentColor);
      colors[index] = complementColor;
      renderPalette();
    }
  }

  // Calculate complement (invert the hex color)
  function getComplementColor(color) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    
    // Inverting the color
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');
    b = (255 - b).toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
  }

  // Open a color picker for a color
  function openColorPicker(index) {
    const colorBox = document.querySelectorAll('.color-box')[index];
    const currentColor = colors[index];

    // Create and show a color picker
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = currentColor;
    
    colorPicker.addEventListener('input', (e) => {
      colors[index] = e.target.value;
      renderPalette();
    });

    // Append the color picker to the color box
    colorBox.appendChild(colorPicker);
  }

  // Generate the share link based on the colors
  function generateShareLink() {
    const shareLink = `${window.location.origin}/palette-generator?share=${colors.join(',')}`;

    // Update the URL without reloading the page
    window.history.pushState({}, "", shareLink);

    // Optionally, copy the share link to the clipboard
    const linkInput = document.createElement('input');
    linkInput.value = shareLink;
    document.body.appendChild(linkInput);
    linkInput.select();
    document.execCommand('copy');
    document.body.removeChild(linkInput);

    alert(`Share link copied: ${shareLink}`);
  }

  // Render the initial palette
  renderPalette();

  // Attach event listeners to buttons
  document.querySelector('.generate-link').addEventListener('click', generateShareLink);
});
