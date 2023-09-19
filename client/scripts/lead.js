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

const leadList = document.getElementById('lead-list')

onSnapshot(collection(db, 'lead'), newSnapshot => {

    newSnapshot.docChanges().forEach(change => {
        if(change.type == 'added') {
            addRow(change.doc.id, change.doc.data())
        }
    })
})


function addRow(id, data) {
    let tr = document.createElement('tr');

    let html = `<td>${id}</td>
    <td>${data.page_id}</td>
    <td>${data.page_name}</td>
    <td>${data.campaign_id}</td>
    <td>${data.campaign_name}</td>
    <td>${JSON.stringify(data.changes)}</td>`

    tr.innerHTML = html

    leadList.appendChild(tr)
}