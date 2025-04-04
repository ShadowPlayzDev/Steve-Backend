// Toggle sidebar visibility
const toggleSidebarButton = document.getElementById('settings-toggle');
const sidebar = document.getElementById('sidebar');
const toggleSidebarText = document.getElementById('toggle-sidebar');

// Initially hide the sidebar
sidebar.style.display = 'none';

// Show or hide sidebar when the button is clicked
toggleSidebarButton.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        toggleSidebarText.textContent = 'Close Sidebar'; // Change button text
    } else {
        sidebar.style.display = 'none';
        toggleSidebarText.textContent = 'Open Sidebar'; // Change button text
    }
});
