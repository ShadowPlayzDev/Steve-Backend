document.getElementById("toggle-sidebar").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
});

document.getElementById("assistant-btn").addEventListener("click", function () {
    alert("Assistant Button Clicked!"); // Placeholder for opening assistant features
});

const htmlTab = document.getElementById("html-tab");
const cssTab = document.getElementById("css-tab");
const jsTab = document.getElementById("js-tab");

const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const previewFrame = document.getElementById("preview");

htmlTab.addEventListener("click", function() {
    htmlEditor.style.display = "block";
    cssEditor.style.display = "none";
    jsEditor.style.display = "none";
});

cssTab.addEventListener("click", function() {
    htmlEditor.style.display = "none";
    cssEditor.style.display = "block";
    jsEditor.style.display = "none";
});

jsTab.addEventListener("click", function() {
    htmlEditor.style.display = "none";
    cssEditor.style.display = "none";
    jsEditor.style.display = "block";
});

function updatePreview() {
    const htmlContent = htmlEditor.value;
    const cssContent = cssEditor.value;
    const jsContent = jsEditor.value;
    
    previewFrame.srcdoc = `
        <html>
            <head>
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                <script>${jsContent}</script>
            </body>
        </html>
    `;
}

htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);
jsEditor.addEventListener("input", updatePreview);
