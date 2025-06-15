import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

const userRouter = Router()
const userController = new UserController()

userRouter.get('/profile/:id', userController.getUserById)
userRouter.post('/create', userController.createUser)

export { userRouter }
