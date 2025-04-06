const assistantBtn = document.getElementById('assistant-btn');
const settingsBtn = document.getElementById('settings-btn');

const assistantSidebar = document.getElementById('assistant-sidebar');
const settingsSidebar = document.getElementById('settings-sidebar');

const closeAssistant = document.getElementById('close-assistant');
const closeSettings = document.getElementById('close-settings');

// Initially hide both sidebars
assistantSidebar.style.display = 'none';
settingsSidebar.style.display = 'none';

// Toggle Assistant Sidebar
assistantBtn.addEventListener('click', () => {
    const isVisible = assistantSidebar.style.display === 'block';
    assistantSidebar.style.display = isVisible ? 'none' : 'block';
});

// Toggle Settings Sidebar
settingsBtn.addEventListener('click', () => {
    const isVisible = settingsSidebar.style.display === 'block';
    settingsSidebar.style.display = isVisible ? 'none' : 'block';
});

// Close buttons
closeAssistant.addEventListener('click', () => {
    assistantSidebar.style.display = 'none';
});

closeSettings.addEventListener('click', () => {
    settingsSidebar.style.display = 'none';
});
