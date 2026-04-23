// Register form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", registerUser);
}

function registerUser(event) {
    event.preventDefault();

    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value
    };

    console.log("Registered User Object:", user);
}

// Login form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
}

function loginUser(event) {
    event.preventDefault();

    const loginData = {
        userOrEmail: document.getElementById("userOrEmail").value,
        password: document.getElementById("password").value
    };

    console.log("Login Object:", loginData);
}