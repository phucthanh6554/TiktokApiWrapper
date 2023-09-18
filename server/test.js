const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./firebase-service-account.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const docRef = db.collection('lead').doc('alovelace');
docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  }).then(() => console.log('set'))