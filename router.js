import Express from "express"

import { 
  showWoman,
  showWomen, 
  createWoman, 
  editWoman, 
  deleteWoman, 
} from "./women.js"

const router = Express.Router()

router.get('/women/:id', showWoman)
router.get('/women', showWomen)
router.post('/women', createWoman)
router.patch('/women/:id', editWoman)
router.delete('/women/:id', deleteWoman)

export default router