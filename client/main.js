import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe5jxskKxD_LDCsYcfRZdJleXWEYoP6dU",
  authDomain: "tiktok-lead-generation.firebaseapp.com",
  projectId: "tiktok-lead-generation",
  storageBucket: "tiktok-lead-generation.appspot.com",
  messagingSenderId: "78067975512",
  appId: "1:78067975512:web:13202750583f921cc6912d"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

let snapshot = await getDocs(collection(db, 'lead'))

snapshot.forEach(doc => console.log(JSON.stringify(doc.data())))

let subscribe = onSnapshot(collection(db, 'lead'), newSnapshot => {
  newSnapshot.docChanges().forEach(change => console.log(change.type, JSON.stringify(change.doc.data())))
})