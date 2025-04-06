const assistantSidebar = document.getElementById('assistant-sidebar');
const settingsSidebar = document.getElementById('settings-sidebar');
const assistantToggle = document.getElementById('assistant-toggle');
const settingsToggle = document.getElementById('settings-toggle');

assistantToggle.addEventListener('click', () => {
    const isOpen = assistantSidebar.style.display === 'flex';
    assistantSidebar.style.display = isOpen ? 'none' : 'flex';
    // Close other sidebar
    settingsSidebar.style.display = 'none';
});

settingsToggle.addEventListener('click', () => {
    const isOpen = settingsSidebar.style.display === 'flex';
    settingsSidebar.style.display = isOpen ? 'none' : 'flex';
    // Close other sidebar
    assistantSidebar.style.display = 'none';
});
