// Build form
const buildForm = document.getElementById("buildForm");

if (buildForm) {
    buildForm.addEventListener("submit", createBuild);
}

async function createBuild(event) {
    event.preventDefault();

    const userId = localStorage.getItem("userId");

    if (!userId) {
        alert("You must be logged in to create a build.");
        window.location.href = "login.html";
        return;
    }

    const build = {
        userId: userId,
        buildName: document.getElementById("buildName").value,
        buildDetails: document.getElementById("buildDetails").value
    };

    try {
        const response = await fetch("http://localhost:3500/builds/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(build)
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        console.log("Build created:", data);
        location.reload();

    } catch (err) {
        console.error("Create build error:", err);
    }
}

// Load builds when dashboard page opens
document.addEventListener("DOMContentLoaded", loadBuilds);

async function loadBuilds() {
    const buildList = document.getElementById("buildList");

    if (!buildList) {
        return;
    }

    const userId = localStorage.getItem("userId");

    if (!userId) {
        buildList.innerHTML = "<p>Please log in to view your builds.</p>";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3500/builds/getByUser/${userId}`);
        const builds = await response.json();

        if (!response.ok) {
            buildList.innerHTML = `<p>${builds.message}</p>`;
            return;
        }

        buildList.innerHTML = "";

        if (builds.length === 0) {
            buildList.innerHTML = "<p>No builds created yet.</p>";
            return;
        }

        builds.forEach(build => {
            const buildCard = document.createElement("div");
            buildCard.classList.add("build-card", "card");

            buildCard.innerHTML = `
                <h4>${build.build_name}</h4>
                <p>${build.build_details || "No details added."}</p>

                <div class="perk-row">
                    <span>[Perk Icon]</span>
                    <span>[Perk Icon]</span>
                    <span>[Perk Icon]</span>
                    <span>[Perk Icon]</span>
                </div>

                <br>

                <button>Edit</button>
                <button>Delete</button>
            `;

            buildList.appendChild(buildCard);
        });

    } catch (err) {
        console.error("Load builds error:", err);
        buildList.innerHTML = "<p>Could not load builds.</p>";
    }
}

// Match form
const matchForm = document.getElementById("matchForm");

if (matchForm) {
    matchForm.addEventListener("submit", saveMatchLog);
}

function saveMatchLog(event) {
    event.preventDefault();

    const matchLog = {
        role: document.getElementById("role").value,
        buildUsed: document.getElementById("buildUsed").value,
        killerName: document.getElementById("killerName").value,
        matchResult: document.getElementById("matchResult").value,
        matchNotes: document.getElementById("matchNotes").value
    };

    console.log("Match Log Object:", matchLog);
}