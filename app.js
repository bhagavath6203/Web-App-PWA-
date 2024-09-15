// Default login credentials
const defaultUsername = 'admin';
const defaultPassword = 'password';

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === defaultUsername && password === defaultPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('resume-section').style.display = 'block';
    } else {
        alert('Invalid login credentials');
    }
});

// Handle logout
document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('resume-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});

// Menu Navigation: Display corresponding section when menu item is clicked
document.querySelectorAll('#resume-menu a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const section = this.getAttribute('data-section');

        // Hide all sections
        document.querySelectorAll('.resume-section').forEach(sec => {
            sec.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(section).style.display = 'block';
    });
});
