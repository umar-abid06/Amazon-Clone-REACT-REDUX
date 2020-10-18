import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAn5wiI5K-1IJSfvyCLzjQEXyjaky8z2G8",
    authDomain: "my-app-103ed.firebaseapp.com",
    databaseURL: "https://my-app-103ed.firebaseio.com",
    projectId: "my-app-103ed",
    storageBucket: "my-app-103ed.appspot.com",
    messagingSenderId: "986225069671",
    appId: "1:986225069671:web:4671441c77ed3e5f5ccec2",
    measurementId: "G-0LRS79D81J"
  
});


const auth = firebase.auth();
 
export { auth };