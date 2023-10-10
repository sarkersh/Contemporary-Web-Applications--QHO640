// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


//Social Authentication
//===================================================
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHeb-tJW8O6Gn4mySW4jXrY60b_h4JUO8",
    authDomain: "solentstudentdeals-bab4d.firebaseapp.com",
    projectId: "solentstudentdeals-bab4d",
    storageBucket: "solentstudentdeals-bab4d.appspot.com",
    messagingSenderId: "578087162259",
    appId: "1:578087162259:web:d7079de0b8563cdaca1866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



//Auth related
//===============================================
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//database
//===============================================
//export const db = getFirestore(app)
const db = getFirestore(app)


//export modules
//===============================================
export {auth,provider, db}


