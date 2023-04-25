import Express from 'express'
import router from './router.js'

export const express = Express

const app = express()
const port = 3333

function showPort() {
  console.log('Server created and listening at port', port)
}

app.use(express.json())
app.use(router)

app.listen(port, showPort)