// Toggle sidebar visibility
const toggleSidebarButton = document.getElementById('settings-toggle');
const sidebar = document.getElementById('sidebar');

// Initially hide the sidebar
sidebar.style.display = 'none';

// Show or hide sidebar when the button is clicked
toggleSidebarButton.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        toggleSidebarButton.innerHTML = '<span class="material-icons">close</span>'; // Change button text to 'close' icon
    } else {
        sidebar.style.display = 'none';
        toggleSidebarButton.innerHTML = '<span class="material-icons">settings</span>'; // Change button text to 'settings' icon
    }
});
