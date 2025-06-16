import { Request, Response } from 'express'
import { AppDataSource } from '../config/database'
import { TestEntity } from '../entities/test.entity'

export class TestController {
	async saveTestResult(req: Request, res: Response): Promise<any> {
		const repo = AppDataSource.getRepository(TestEntity)
		const result = repo.create(req.body)
		await repo.save(result)
		res.status(201).json(result)
	}

	async getUserResults(req: Request, res: Response): Promise<any> {
		const { userId } = req.params
		const results = await AppDataSource.getRepository(TestEntity).find({
			where: { userId }
		})
		res.json(results)
	}
}
