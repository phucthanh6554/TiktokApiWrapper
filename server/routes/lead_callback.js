const router = require('express').Router()
const axios = require('axios')
const bodyParser = require('body-parser')
const jsonBigint = require('json-bigint')

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('../service-account.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

router.post('/create', bodyParser.text({type: '*/*'}), async (req, res) => {
    let json = jsonBigint.parse(req.body)

    const docRef = db.collection('lead').doc(json.entry[0].id.toString());

    await docRef.set({
        page_id: json.entry[0].page_id.toString(),
        page_name: json.entry[0].page_name.toString(),
        campaign_id: json.entry[0].campaign_id.toString(),
        campaign_name: json.entry[0].campaign_name.toString(),
        changes: json.entry[0].changes
    })

    res.send('Ok')
})

module.exports = router