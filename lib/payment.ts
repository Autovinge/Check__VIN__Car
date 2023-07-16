const options = {
  method: 'POST',
  headers: { accept: 'application/json', 'content-type': 'application/json' },
  body: JSON.stringify({
    method: 'justPay',
    apiKey: process.env.PAYZE_KEY,
    apiSecret: process.env.PAYZE_SECRET,
    data: {
      amount: 1,
      currency: 'USD',
      callback: 'https://corp.com/success_callback',
      callbackError: 'https://corp.com/fail_url',
      preauthorize: false,
      lang: 'EN',
      hookUrl: 'https://corp.com/payze_hook?authorization_token=token',
      hookUrlV2: 'https://corp.com/payze_hook?authorization_token=token',
      info: {
        description: 'A lightsaber is a fictional energy sword.',
        image: 'https://payze.io/assets/images/logo_v2.svg',
        name: 'Lightsaber'
      },
      hookRefund: false
    }
  })
};

const response = { "id": 35543087, "status": "Active", "action": "justPay", "createdDate": "2023-07-16 14:20:08", "response": { "transactionUrl": "https://payze.io/pay/2CE400A84D644186B31D3EDEC47209A8/transaction", "transactionId": "2CE400A84D644186B31D3EDEC47209A8" }, "request": { "amount": 1, "hookUrlV2": "https://corp.com/payze_hook?authorization_token=token", "hookRefund": false, "callback": "https://corp.com/success_callback", "currency": "USD", "callbackError": "https://corp.com/fail_url", "preauthorize": false, "lang": "EN", "hookUrl": "https://corp.com/payze_hook?authorization_token=token", "info": { "description": "A lightsaber is a fictional energy sword.", "image": "https://payze.io/assets/images/logo_v2.svg", "name": "Lightsaber" } }, "headers": { "sec-fetch-mode": "cors", "content-length": "565", "cdn-loop": "cloudflare", "cf-ipcountry": "GE", "cf-ray": "7e7ae25acfa29dbc-LLK", "x-forwarded-proto": "http", "accept-language": "*", "x-forwarded-port": "80", "x-forwarded-for": "31.192.15.188, 172.71.12.154", "accept": "application/json", "x-real-ip": "172.71.12.154", "x-forwarded-host": "payze.io", "cf-visitor": "{\"scheme\":\"https\"}", "host": "payze.io", "connection": "close", "content-type": "application/json", "cf-connecting-ip": "31.192.15.188", "accept-encoding": "gzip", "user-agent": "undici" } }

const payment = async () => {
  const res = await fetch("https://payze.io/api/v1", options)
  const response = res.json()
  return response

}

export default payment
