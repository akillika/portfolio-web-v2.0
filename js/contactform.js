
var firebaseConfig = {
    apiKey: "AIzaSyAWRtUnG37iFYXSj6FYale5TV2S6YldtsI",
    authDomain: "contact-525dc.firebaseapp.com",
    databaseURL: "https://contact-525dc.firebaseio.com",
    projectId: "contact-525dc",
    storageBucket: "contact-525dc.appspot.com",
    messagingSenderId: "844332696757",
    appId: "1:844332696757:web:5ec988766d44bfc3516afc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
   

//reference message collections

var messageRef = firebase.database().ref("message");

//Listen for form submit
document.getElementById('contactform');
document.addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var comments = getInputVal('message');
    var sub = getInputVal('subject');
    saveMessage(name, email, comments, sub);

}



function getInputVal(id) {
    return document.getElementById(id).value;
}

//saving

function saveMessage(name, email, comments , sub){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: sub,
        Message : comments
    });
}