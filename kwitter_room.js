const firebaseConfig = {
  apiKey: "AIzaSyDISXZY79x1i_VBKxb53ZFdfcN9Vv6rm1I",
  authDomain: "kwitter-46b62.firebaseapp.com",
  databaseURL: "https://kwitter-46b62-default-rtdb.firebaseio.com",
  projectId: "kwitter-46b62",
  storageBucket: "kwitter-46b62.appspot.com",
  messagingSenderId: "144868133077",
  appId: "1:144868133077:web:f2a56aea39d113ba29fa5c",
  measurementId: "G-Y5BZXR60V7"
};

firebase.initializeApp(firebaseConfig);

  function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Add Room"
    });
  }