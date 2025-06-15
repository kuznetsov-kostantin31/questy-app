import { Router } from 'express'
import { TestController } from '../controllers/test.controller'

const testRouter = Router()
const testController = new TestController()

testRouter.post('/create', testController.createTest)

export { testRouter }
