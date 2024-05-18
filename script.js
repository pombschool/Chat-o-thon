function adduser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location = "home.html";
}

function showSignUp() {
    document.getElementById("signUp").style.display = "inline";
    document.getElementById("login").style.display = "none";
}

function showLogin() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "inline";
}