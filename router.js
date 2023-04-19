import Express from "express"

import showMessage from "./message.js"
import showWoman  from "./woman.js"
import { showWomen, createWoman } from "./women.js"
import showCurrentTime from "./currentTime.js"

const router = Express.Router()

router.get('/message', showMessage)
router.get('/woman', showWoman)
router.get('/women', showWomen)
router.get('/time', showCurrentTime)

router.post('/women', createWoman)

export default router