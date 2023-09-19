import axios from 'axios'

let searchParam = new URLSearchParams(window.location.search)
let authCode = searchParam.get('auth_code')

const baseUrl = 'https://tiktok-api-wrapper.onrender.com'

// get access token
let accessTokenResult = await axios.post(`${baseUrl}/identities/access_token`, {
    auth_code: authCode
})

if (accessTokenResult.status != 200) {
    alert('Khong lay dc access token kia ban tui oi')
} else {
    let accessToken = accessTokenResult.data.access_token
    let advertiser_id = accessTokenResult.data.advertiser_ids[0]

    // Register subscription
    let createSubscriptionResult = await axios.post(`${baseUrl}/subscriptions/create`, {
        access_token: accessToken,
        advertiser_id: advertiser_id
    })

    if (createSubscriptionResult.status != 200) {
        alert('Khong dang ky dc subscription kia')
    }

}


