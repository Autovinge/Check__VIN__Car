const fakeDB = {}

const getTransactionURL = async (vincode: string, mail: string) => {
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
        callback: 'http://localhost:3000',
        callbackError: 'https://corp.com/fail_url',
        preauthorize: false,
        lang: 'EN',
        hookUrl: 'https://corp.com/payze_hook?authorization_token=token',
        hookUrlV2: 'https://0329-31-192-15-188.ngrok.io/api/webhook',
        info: {
          description: `Resport for ${vincode}`,
          name: vincode
        },
        hookRefund: false
      }
    })
  }

  const res = await fetch('https://payze.io/api/v1', options)
  const response = await res.json()

  const { transactionId } = response.response
  fakeDB[transactionId] = {
    mail,
    vincode
  }

  return response
}

export { getTransactionURL }
