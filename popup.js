console.log("popup.js loaded");

$login = document.getElementById("login");
$username = document.getElementsByName("identificador")[0];
$password = document.getElementsByName("senha")[0];

$login.addEventListener("submit", e => {
    e.preventDefault();

    chrome.storage.local.set({ username: $username.value, password: $password.value});
});
