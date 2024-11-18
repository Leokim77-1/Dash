  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBB8ty87sh84l1xDmeXGJOhKqEdxXRv4wU",
    authDomain: "codecamptst.firebaseapp.com",
    projectId: "codecamptst",
    storageBucket: "codecamptst.appspot.com",
    messagingSenderId: "952163116209",
    appId: "1:952163116209:web:a0eb695ba38b60477aae90"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);

  document.getElementById("create").addEventListener("click" , function(){ 
   var email = document.getElementById("username").value
   var password = document.getElementById("password").value
      createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
console.log("created")
console.log(user)
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorMessage)
});
var file = document.getElementById("image").files[0]


//i will add photo firebase when he creating account
//once logged in image will be displayed
uploadBytes(ref(storage, email), file).then((snapshot) => {
console.log('Uploaded a blob or file!');
});

  })

  document.getElementById("login").addEventListener("click" ,function(){
      var email = document.getElementById("username").value
   var password = document.getElementById("password").value
      signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
console.log(user)
console.log("loggedin")
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorMessage)
});
//

getDownloadURL(ref(storage, email))
.then((url) => {
const img = document.getElementById('myimg');
img.setAttribute('src', url);
})
.catch((error) => {
console.log(error)
});
  })