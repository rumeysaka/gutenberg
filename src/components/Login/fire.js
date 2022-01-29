  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBTr145aLmNSIy2ug3BRY9pEnzQw903l_E",
    authDomain: "auhtorization-76305.firebaseapp.com",
    projectId: "auhtorization-76305",
    storageBucket: "auhtorization-76305.appspot.com",
    messagingSenderId: "87789274804",
    appId: "1:87789274804:web:5c68b11dc8c97e90b579e1",
    measurementId: "G-XKNW1Z8TVS"
  };
  
  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;