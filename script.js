//your JS code here. If required.
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function applyPreferences() {
    const fontSize = getCookie("fontSize") || "16";
    const fontColor = getCookie("fontColor") || "#000000";

    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    document.getElementById("fontsize").value = fontSize;
    document.getElementById("fontcolor").value = fontColor;
}

document.getElementById("fontForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    setCookie("fontSize", fontSize, 30);
    setCookie("fontColor", fontColor, 30);

    applyPreferences();
});

document.addEventListener("DOMContentLoaded", applyPreferences);

// Preview functionality
const fontsizeInput = document.getElementById("fontsize");
const fontcolorInput = document.getElementById("fontcolor");
const preview = document.getElementById("preview");

function updatePreview() {
    preview.style.fontSize = `${fontsizeInput.value}px`;
    preview.style.color = fontcolorInput.value;
}

fontsizeInput.addEventListener("input", updatePreview);
fontcolorInput.addEventListener("input", updatePreview);