import firebase from "firebase/app";
import 'firebase/firestore'
// import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDj1E7_k3sll0DZodwp_V_tXz7WdpTFo1s",
    authDomain: "material-ui-b2c3a.firebaseapp.com",
    projectId: "material-ui-b2c3a",
    storageBucket: "material-ui-b2c3a.appspot.com",
    messagingSenderId: "679865295144",
    appId: "1:679865295144:web:ef7ad16b4185df9222f01d",
    measurementId: "G-CPWX8G6WLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestapsInSnapshots: true});

  export default firebase;