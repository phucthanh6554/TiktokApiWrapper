const router = require('express').Router()
const axios = require('axios')

router.post('/access_token', async (req, res) => {
    let auth_code = req.body.auth_code

    if (auth_code == null || auth_code == '') {
        res.status(400).send('auth_code is required')
        return;
    }

    let requestBody = {
        auth_code: auth_code,
        app_id : process.env.APP_ID,
        secret : process.env.SECRET
    }

    let url = 'https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token'

    let response = await axios.post(url, requestBody)

    if(response.data.code != 0) {
        res.status(400).send({message : response.data.message})
        return;
    }

    res.send({
        access_token: response.data.data.access_token,
        advertiser_ids: response.data.data.advertiser_ids,
    })
})

module.exports = router