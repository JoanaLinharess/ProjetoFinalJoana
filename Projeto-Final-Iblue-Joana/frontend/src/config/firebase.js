
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyAUVlwnnKHqYsREy9ptEof7eFwi6XSihIY",
    authDomain: "calculadora-b7997.firebaseapp.com",
    projectId: "calculadora-b7997",
    storageBucket: "calculadora-b7997.appspot.com",
    messagingSenderId: "123175552390",
    appId: "1:123175552390:web:62e3be5faa8450e7b19807",
    
  };
  
  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
 
  export default firebase.initializeApp(firebaseConfig);

 