const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const identityRoute = require('./routes/identity')
const subscriptionRoute = require('./routes/subscription')

require('dotenv').config()

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/identities', identityRoute)
app.use('/subscriptions', subscriptionRoute)

app.listen(4000, () => console.log('Server is litening on port 4000'))