const router = require('express').Router()
const axios = require('axios')

// Create subscription
router.post('/create', async (req, res) => {
    let body = {
        app_id: process.env.APP_ID,
        secret: process.env.SECRET,
        subscribe_entity: 'LEAD',
        callback_url: process.env.SUBSCRIPTION_CALLBACK_URL,
        subscription_detail: {
            access_token: req.body.access_token,
            advertiser_id: req.body.advertiser_id
        }
    }

    let url = 'https://business-api.tiktok.com/open_api/v1.3/subscription/subscribe'

    let response = await axios.post(url, body)

    if (response.data.code != 0) {
        res.status(400).send({ message: response.data.message })
        return
    }

    res.send({ message: 'Ok' })
})

module.exports = router