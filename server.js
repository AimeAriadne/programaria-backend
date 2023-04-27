import Express from 'express'
import router from './router.js'
import cors from 'cors'
import connectDataBase from './db.js'

const app = Express()
const port = 3333

function showPort() {
  console.log('Server created and listening at port', port)
}

app.use(Express.json())
app.use(cors())
app.use(router)

app.listen(port, showPort)

connectDataBase()
