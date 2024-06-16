import express from 'express'
import cors from 'cors'

import ssr from './ssr'

const app = express()
const port = 8070

app.use(cors())
app.use(express.static('public'))

ssr({ app })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
