document.addEventListener('DOMContentLoaded', () => {
    const toolsContainer = document.getElementById('tools-container');
    const searchInput = document.getElementById('search-input');

    fetch('pages/bash/bash_tools.json')
        .then(response => response.json())
        .then(data => {
            displayTools(data.sections);

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                filterTools(data.sections, searchTerm);
            });
        })
        .catch(error => {
            console.error('Error fetching bash_tools.json:', error);
            toolsContainer.innerHTML = '<p class="error-message">Failed to load tools.</p>';
        });

    function displayTools(sections) {
        toolsContainer.innerHTML = '';
        sections.forEach(section => {
            if (section.title && section.title !== "Bash Tools") {
                const toolDiv = document.createElement('div');
                toolDiv.classList.add('tool-section');
                toolDiv.innerHTML = `
                    <h2>${section.title}</h2>
                    ${section.description ? `<p class="instruction">${section.description}</p>` : ''}
                    ${section.instruction ? `<p class="instruction">${section.instruction}</p>` : ''}
                    ${section.code ? `<div class="code-block"><code>${escapeHtml(section.code)}</code></div>` : ''}
                    ${section.download_link ? `<a href="${section.download_link}" class="download-link">Download</a>` : ''}
                    ${section.warning ? `<p class="warning-text">${section.warning}</p>` : ''}
                `;
                toolsContainer.appendChild(toolDiv);
            } else if (section.description && section.title === "Bash Tools") {
                const bashToolsDescription = document.createElement('div');
                bashToolsDescription.classList.add('tool-section');
                bashToolsDescription.innerHTML = `<p class="instruction">${section.description}</p>`;
                toolsContainer.appendChild(bashToolsDescription);
            }
        });
    }

    function filterTools(sections, searchTerm) {
        const filteredTools = sections.filter(section => {
            if (section.title && section.title !== "Bash Tools") {
                return (section.title.toLowerCase().includes(searchTerm) ||
                        (section.description && section.description.toLowerCase().includes(searchTerm)) ||
                        (section.code && section.code.toLowerCase().includes(searchTerm)));
            }
            return true;
        });
        displayTools(filteredTools);
    }
    function escapeHtml(unsafe) {
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
});
