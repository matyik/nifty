import axios from 'axios'
import fs from 'fs'

const conf = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
conf.users.forEach(async (user) => {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  if (process.argv[2] === 'get') {
    const req = await axios.get(process.argv[3], config)
    console.log(req.data)
  } else if (process.argv[2] === 'post') {
    const req = await axios.post(process.argv[3], config)
    console.log(req.data)
  } else if (process.argv[2] === 'put') {
    const req = await axios.put(process.argv[3], config)
    console.log(req.data)
  } else if (process.argv[2] === 'delete') {
    const req = await axios.delete(process.argv[3], config)
    console.log(req.data)
  }
})
