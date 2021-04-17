import fs from 'fs'
import axios from 'axios'

const conf = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))

conf.users.forEach(async (user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  const req = await axios.post(
    'https://api.niftygateway.com/drawing/enter/',
    {
      contractAddress: process.argv[2],
      niftyType: 2,
      paymentType: 'card',
      cc_token: process.env.CC_TOKEN,
      fingerprint: process.env.FINGERPRINT
    },
    config
  )
  console.log(req.data)
})
