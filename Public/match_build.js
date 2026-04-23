// Build form
const buildForm = document.getElementById("buildForm");

if (buildForm) {
    buildForm.addEventListener("submit", saveBuild);
}

function saveBuild(event) {
    event.preventDefault();

    const build = {
        buildName: document.getElementById("buildName").value,
        buildDetails: document.getElementById("buildDetails").value
    };

    console.log("Build Object:", build);
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