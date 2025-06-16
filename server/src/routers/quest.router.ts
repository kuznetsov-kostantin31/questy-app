import { Router } from 'express'
import { QuestController } from '../controllers/quest.controller'

const questRouter = Router()
const questController = new QuestController()

questRouter.post('/', questController.createQuestion)
questRouter.get('/', questController.getQuestions)

export { questRouter }
