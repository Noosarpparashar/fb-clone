// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAny8eNtvAbXYgFDu_b1Oluq-55w26-WNo",
  authDomain: "facebook-clone-a2483.firebaseapp.com",
  databaseURL: "https://facebook-clone-a2483.firebaseio.com",
  projectId: "facebook-clone-a2483",
  storageBucket: "facebook-clone-a2483.appspot.com",
  messagingSenderId: "732404057163",
  appId: "1:732404057163:web:f64ac0a42d5e11c659b9ce",
  measurementId: "G-KL45MKCFFE"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;