const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const identityRoute = require('./routes/identity')
const subscriptionRoute = require('./routes/subscription')
const leadRoute = require('./routes/lead_callback')

require('dotenv').config()

const PORT = process.env.PORT ?? 4000

const app = express();

app.use(cors())

app.use('/lead', leadRoute)

app.use(bodyParser.json())

app.use('/identities', identityRoute)
app.use('/subscriptions', subscriptionRoute)

app.listen(PORT, () => console.log('Server is litening on port ' + PORT))