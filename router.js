import Express from "express"

import showMessage from "./message.js"
import showWoman  from "./woman.js"
import { showWomen, createWoman, editWoman, deleteWoman } from "./women.js"
import showCurrentTime from "./currentTime.js"

const router = Express.Router()

router.get('/message', showMessage)
router.get('/woman', showWoman)
router.get('/women', showWomen)
router.get('/time', showCurrentTime)

router.post('/women', createWoman)

router.patch('/women/:id', editWoman)

router.delete('/women/:id', deleteWoman)

export default router