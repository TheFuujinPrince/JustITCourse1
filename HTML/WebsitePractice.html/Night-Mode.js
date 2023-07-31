// Night-mode.js

const nightModeSwitch = document.getElementById('night-mode-switch');
const nightModeLabel = document.getElementById('night-mode-label');
const nightModeStylesheet = document.getElementById('night-mode-stylesheet');

// Function to toggle night mode
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    nightModeLabel.textContent = nightModeSwitch.checked ? 'Day Mode' : 'Night Mode';
}

// Event listener for the night mode switch
nightModeSwitch.addEventListener('change', function() {
    toggleNightMode();
});

// Load night mode state from localStorage (if available)
document.addEventListener('DOMContentLoaded', function() {
    const nightModeState = localStorage.getItem('nightMode');
    if (nightModeState === 'enabled') {
        nightModeSwitch.checked = true;
        toggleNightMode();
    }
});

// Save night mode state to localStorage
nightModeSwitch.addEventListener('change', function() {
    if (nightModeSwitch.checked) {
        localStorage.setItem('nightMode', 'enabled');
    } else {
        localStorage.setItem('nightMode', 'disabled');
    }
});
