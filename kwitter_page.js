//TUS ANLACES DE FIREBASE

var firebaseConfig = {
    apiKey: "AIzaSyCdZHVRPaIYdTDRr8yLcGe-74vViv6CzIc",
    authDomain: "kwitter-c1259.firebaseapp.com",
    databaseURL: "https://kwitter-c1259-default-rtdb.firebaseio.com/",
    projectId: "kwitter-c1259",
    storageBucket: "kwitter-c1259.appspot.com",
    messagingSenderId: "974395169399",
    appId: "1:974395169399:web:e74135b11738368c528472",
    measurementId: "G-M7CVVCS252"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message: msg,
        like:0
    });
    document.getElementById("msg").value = "";
}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
 { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
 {
    firebase_message_id = childKey;
    message_data = childData;
//Inicia código
//Termina código
 } });  }); }
getData();




