import { Router } from 'express'
import { TestController } from '../controllers/test.controller'

const testRouter = Router()
const testController = new TestController()

testRouter.post('/result', testController.saveTestResult)
testRouter.get('/profile/:userId', testController.getUserResults)

export { testRouter }
