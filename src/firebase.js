// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMNxuTd3r3IyRyL3UZfn1ISS0tKeWs7kc",
  authDomain: "grouper-a7d6d.firebaseapp.com",
  projectId: "grouper-a7d6d",
  storageBucket: "grouper-a7d6d.appspot.com",
  messagingSenderId: "916416097895",
  appId: "1:916416097895:web:5838bbc3ba57851f62aec2"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore()
export const colRef = collection(db, 'events');
getDocs(colRef)
  .then((snapshot) =>{
    let events = []
    snapshot.docs.forEach((doc) => {
      events.push({...doc.data(), id: doc.id})
    })
    return events
  })

