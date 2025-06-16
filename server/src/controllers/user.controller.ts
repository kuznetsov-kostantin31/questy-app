import { Request, Response } from 'express'
import { AppDataSource } from '../config/database'
import { UserEntity } from '../entities/user.entity'

export class UserController {
	async createUser(req: Request, res: Response): Promise<any> {
		const { name } = req.body

		if (!name || typeof name !== 'string') {
			return res.status(400).json({ error: 'Name is required' })
		}

		const userRepo = AppDataSource.getRepository(UserEntity)

		try {
			const newUser = userRepo.create({ name })
			const savedUser = await userRepo.save(newUser)
			return res.status(201).json(savedUser)
		} catch (err) {
			return res.status(500).json({ error: 'Failed to create user' })
		}
	}
}
