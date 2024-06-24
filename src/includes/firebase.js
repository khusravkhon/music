import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  authDomain: "music-2c620.firebaseapp.com",
  projectId: "music-2c620",
  storageBucket: "music-2c620.appspot.com",
  appId: "1:417073168746:web:83f308ffd24c33789a2513",
  apiKey: "AIzaSyB1TfeF68Fd_am8WuKSj5_Y0qeFwwRkKX0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage,
  commentsCollection,
};
