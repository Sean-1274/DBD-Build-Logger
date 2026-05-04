// Register form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", registerUser);
}

async function registerUser(event) {
    event.preventDefault();

    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value
    };

    try {
        const response = await fetch("http://localhost:3500/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        localStorage.setItem("userId", data.user_id);
        localStorage.setItem("username", data.username);

        window.location.href = "dashboard.html";

    } catch (err) {
        console.error("Register error:", err);
    }
}

// Login form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
}

async function loginUser(event) {
    event.preventDefault();

    const loginData = {
        userOrEmail: document.getElementById("userOrEmail").value,
        password: document.getElementById("password").value
    };

    try {
        const response = await fetch("http://localhost:3500/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        localStorage.setItem("userId", data.user_id);
        localStorage.setItem("username", data.username);

        window.location.href = "dashboard.html";

    } catch (err) {
        console.error("Login error:", err);
    }
}