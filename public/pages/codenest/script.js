// Sidebar toggles
const settingsBtn = document.getElementById('settings-toggle');
const assistantBtn = document.getElementById('assistant-toggle');
const settingsSidebar = document.getElementById('settings-sidebar');
const assistantSidebar = document.getElementById('assistant-sidebar');

function toggleSidebar(id) {
    const sidebar = document.getElementById(id);
    sidebar.classList.toggle('show');
}

settingsBtn.addEventListener('click', () => {
    settingsSidebar.classList.toggle('show');
    settingsSidebar.classList.add('right');
    assistantSidebar.classList.remove('show');
});

assistantBtn.addEventListener('click', () => {
    assistantSidebar.classList.toggle('show');
    assistantSidebar.classList.add('left');
    settingsSidebar.classList.remove('show');
});

// Inject dynamic version data
const typeFromJs = 'Web';
const versionFromJs = '1.0';
const releaseFromJs = 'Stable';
const assistantFromJs = 'ChatGPT';

document.getElementById('type-js').textContent = typeFromJs;
document.getElementById('version-js').textContent = versionFromJs;
document.getElementById('release-js').textContent = releaseFromJs;
