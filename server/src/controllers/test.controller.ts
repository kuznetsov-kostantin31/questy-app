import { Request, Response } from 'express'
import { AppDataSource } from '../config/database'
import { TestEntity } from '../entities/test.entity'

export class TestController {
	async createTest(req: Request, res: Response): Promise<any> {
		try {
			const testRepository = AppDataSource.getRepository(TestEntity)
			const test = testRepository.create(req.body)
			const results = await testRepository.save(test)
			res.status(201).json(results)
		} catch (e: any) {
			res.status(500).json({ message: e.message })
		}
	}
}
