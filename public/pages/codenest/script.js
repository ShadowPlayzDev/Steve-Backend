// Toggle settings sidebar visibility
const toggleSettingsButton = document.getElementById('settings-toggle');
const settingsSidebar = document.getElementById('settings-sidebar');
const closeSettingsButton = document.getElementById('close-settings-btn');

// Toggle assistant sidebar visibility
const assistantButton = document.getElementById('assistant-btn');
const assistantSidebar = document.getElementById('assistant-sidebar');

// Initially hide the sidebars
settingsSidebar.classList.remove('open');
assistantSidebar.classList.remove('open');

// Open or close settings sidebar
toggleSettingsButton.addEventListener('click', () => {
    settingsSidebar.classList.toggle('open');
});

// Open assistant sidebar
assistantButton.addEventListener('click', () => {
    assistantSidebar.classList.toggle('open');
});

// Close settings sidebar
closeSettingsButton.addEventListener('click', () => {
    settingsSidebar.classList.remove('open');
});
