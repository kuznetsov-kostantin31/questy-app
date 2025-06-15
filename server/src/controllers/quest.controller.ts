import { Request, Response } from 'express'
import { AppDataSource } from '../config/database'
import { QuestEntity } from '../entities/quest.entity'

export class QuestController {
	async createQuest(req: Request, res: Response): Promise<any> {
		try {
			const questRepository = AppDataSource.getRepository(QuestEntity)
			const quest = questRepository.create(req.body)
			const results = await questRepository.save(quest)
			res.status(201).json(results)
		} catch (e: any) {
			res.status(500).json({ message: e.message })
		}
	}
}
