import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBM9u7U0WwiGoP5rVYVqoYecHsXkxTEcHo",
  authDomain: "wily-app-30398.firebaseapp.com",
  projectId: "wily-app-30398",
  storageBucket: "wily-app-30398.appspot.com",
  messagingSenderId: "472960630906",
  appId: "1:472960630906:web:7f0bd5fe0058c49d5a7bc3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

//wily app dataabase
