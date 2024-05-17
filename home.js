var firebaseConfig = {
    apiKey: "AIzaSyD0YJpZ0U8vp1NPxvMooSr-9petcI_5K58",
    authDomain: "kwitter-99abb.firebaseapp.com",
    databaseURL: "https://kwitter-99abb-default-rtdb.firebaseio.com",
    projectId: "kwitter-99abb",
    storageBucket: "kwitter-99abb.appspot.com",
    messagingSenderId: "215779754402",
    appId: "1:215779754402:web:0528cd69f4cffba50372fb",
    measurementId: "G-XMQ44QBR64"
  };
  
  firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom() {
    roomname = document.getElementById("room_name").value;

    firebase.database().ref("/").child(roomname).update({
          purpose: "adding room"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Roomname - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    roomname = name;
    localStorage.setItem("roomname", roomname);
    window.location = "room.html";
} 

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}