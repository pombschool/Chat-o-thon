// function adduser() {
//     username = document.getElementById("user_name").value;
//     localStorage.setItem("username", username);
//     window.location = "home.html";
// }

function showSignUp() {
    document.getElementById("signUp").style.display = "inline";
    document.getElementById("login").style.display = "none";
}

function showLogin() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "inline";
}

/* Code for Database */

var firebaseConfig = {
    apiKey: "AIzaSyA9xHYtp3MwroaPVX-S6Ucod98yGbT4HVE",
    authDomain: "chat-o-thon-usernames.firebaseapp.com",
    databaseURL: "https://chat-o-thon-usernames-default-rtdb.firebaseio.com",
    projectId: "chat-o-thon-usernames",
    storageBucket: "chat-o-thon-usernames.appspot.com",
    messagingSenderId: "255925212097",
    appId: "1:255925212097:web:dcc1eaa753fdb789149540",
    measurementId: "G-RRGY377YLV"
};

firebase.initializeApp(firebaseConfig);

function adduser() {
    var email = document.getElementById("userEmailSignUp").value;
    var username = document.getElementById("userNameSignUp").value;
    var password = document.getElementById("passwordSignUp").value;

    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    // Replace periods with commas to avoid issues with Firebase keys
    var emailKey = email.replace(/\./g, ',');

    console.log("Email Key:", emailKey);

    // Create a user object to store in the database
    var userData = {
        username: username,
        password: password
    };

    console.log("User Data:", userData);

    // Store user data in the database under "users/{emailKey}"
    firebase.database().ref("users/" + emailKey).set(userData, function(error) {
        if (error) {
            console.error("Error storing user data:", error);
            alert("Failed to store user data: " + error.message);
        } else {
            console.log("User data stored successfully.");
            localStorage.setItem("username", username);
            window.location = "home.html";
        }
    });
}

function logIn() {
    var email = document.getElementById("userEmailLogin").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("passwordSignUp").value;

    if (email && username && password) {
        firebase.database().ref("users/" + email.replace(".", ",")).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                var userData = snapshot.val();
                if (userData.username === username && userData.password === password) {
                    localStorage.setItem("username", username);
                    window.location = "home.html";
                } else {
                    alert("Your username/password is incorrect.");
                }
            } else {
                alert("You are not a registered user.");
            }
        }).catch((error) => {
            console.error(error);
            alert("An error occurred while logging in.");
        });
    } else {
        alert("Please fill out all fields.");
    }
}