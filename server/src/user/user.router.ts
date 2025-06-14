import { Router } from 'express'
import { UserController } from './user.controller'

const userRouter = Router()
const userController = new UserController()

userRouter.get('/by-id/:id', userController.getUserById)

export { userRouter }
