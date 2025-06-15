import { Router } from 'express'
import { QuestController } from '../controllers/quest.controller'

const questRouter = Router()
const questController = new QuestController()

questRouter.post('/create', questController.createQuest)

export { questRouter }
