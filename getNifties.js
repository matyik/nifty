import fs from 'fs'
import axios from 'axios'
import 'colors'

const conf = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))

conf.users.forEach(async (user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  const req = await axios.get(
    `https://api.niftygateway.com//user/profile-and-offchain-nifties-by-url/?profile_url=${user.profileUrl}`,
    config
  )
  console.log(
    `${user.profileUrl}: ${
      `${req.data.userProfileAndNifties.nifties}`.bgGreen.black
    }`
  )
})
