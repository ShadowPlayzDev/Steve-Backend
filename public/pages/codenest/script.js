const toggleSidebarButton = document.getElementById('settings-toggle');
const sidebar = document.getElementById('sidebar');

// Default icon
toggleSidebarButton.innerHTML = '<span class="material-icons">settings</span>';

toggleSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');

  const isOpen = sidebar.classList.contains('open');
  toggleSidebarButton.innerHTML = `
    <span class="material-icons">${isOpen ? 'close' : 'settings'}</span>
  `;
});
