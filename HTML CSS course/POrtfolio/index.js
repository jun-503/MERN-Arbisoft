document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    
    toggleSwitch.addEventListener('click', () => {
        toggleSwitch.classList.toggle('active');
        
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('toggle-switch');
    
    // Check the user's saved preference for theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Save the current theme in local storage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.removeItem('theme');
        }
    });
});





