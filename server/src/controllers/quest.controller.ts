import { Request, Response } from 'express'
import { AppDataSource } from '../config/database'
import { QuestEntity } from '../entities/quest.entity'

export class QuestController {
	async getQuestions(req: Request, res: Response): Promise<any> {
		const questions = await AppDataSource.getRepository(QuestEntity).find()
		res.json(questions)
	}

	async createQuestion(req: Request, res: Response): Promise<any> {
		const repo = AppDataSource.getRepository(QuestEntity)
		const question = repo.create(req.body)
		const result = await repo.save(question)
		res.status(201).json(result)
	}
}
