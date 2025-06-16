import { Router } from 'express'
import { questRouter } from './quest.router'
import { testRouter } from './test.router'
import { userRouter } from './user.router'

const router = Router()

router.use('/users', userRouter)
router.use('/quests', questRouter)
router.use('/tests', testRouter)

export { router }
