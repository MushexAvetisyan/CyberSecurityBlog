import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHVIq5kb-2dfXX_vimofRw92G_Uc0pNfY",
  authDomain: "cybersecurityblog-37b8c.firebaseapp.com",
  projectId: "cybersecurityblog-37b8c",
  storageBucket: "cybersecurityblog-37b8c.appspot.com",
  messagingSenderId: "102406489506",
  appId: "1:102406489506:web:b34464bd149cfabe659efb",
  measurementId: "G-4SPKD1G5GH"
};

export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
let timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { timestamp };
export default firebaseApp.firestore();

