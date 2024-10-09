// Handle login and signup forms
document.getElementById("showSignup").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

// Signup form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Simulate storing credentials in localStorage
    if (email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert("Signup successful! Please login.");
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
    } else {
        alert("Please fill out all fields.");
    }
});

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Fetch stored credentials from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Simple validation for login
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid email or password. Please try again or sign up.");
    }
});
document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior

    // Clear the sessionStorage to log the user out
    sessionStorage.clear();

    // Redirect the user to the login page
    window.location.href = "index.html"; // Adjust this path if needed
});
// JavaScript for handling navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('data-target'); // Get the target section ID

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block'; // Show the clicked section
            }
        });
    });

    // Optional: Logout button functionality
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Clear session storage or perform logout actions
        sessionStorage.clear(); // Clear user session data if needed

        // Redirect to the login page
        window.location.href = "index.html"; // Adjust this path to your login page
    });
});
// JavaScript for handling navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('data-target'); // Get the target section ID

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block'; // Show the clicked section

                // Scroll to the target section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Logout button functionality
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Clear session storage or perform logout actions
        sessionStorage.clear(); // Clear user session data if needed

        // Redirect to the login page
        window.location.href = "index.html"; // Adjust this path to your login page
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('data-target'); // Get the target section ID

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block'; // Show the clicked section

                // Scroll to the target section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Logout button functionality
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Clear session storage or perform logout actions
        sessionStorage.clear(); // Clear user session data if needed

        // Redirect to the login page
        window.location.href = "index.html"; // Adjust this path to your login page
    });
});


