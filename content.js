console.log("clip-login: content.js loaded");

$username = document.getElementsByName("identificador")[0];
$password = document.getElementsByName("senha")[0];
$submit = document.getElementsByClassName("button")[0];

function hasLogin() {
    return $username != undefined; 
}

function login() {
    console.log("clip-login: logging in");

    chrome.storage.local.get(["username", "password"]).then((result) => {
        $username.value = result.username;
        $password.value = result.password; 
        $submit.click();
    });
}

if (hasLogin()) login();