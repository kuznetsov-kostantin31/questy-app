import { Router } from 'express'
import { questRouter } from './quest.router'
import { testRouter } from './test.router'
import { userRouter } from './user.router'

const router = Router()

router.use('/user', userRouter)
router.use('/quest', questRouter)
router.use('/test', testRouter)

export { router }
