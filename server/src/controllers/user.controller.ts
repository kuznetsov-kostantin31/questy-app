import { Request, Response } from 'express'
import { AppDataSource } from '../config/database'
import { UserEntity } from '../entities/user.entity'

export class UserController {
	async createUser(req: Request, res: Response): Promise<any> {
		try {
			const userRepository = AppDataSource.getRepository(UserEntity)
			const user = userRepository.create(req.body)
			const results = await userRepository.save(user)
			res.status(201).json(results)
		} catch (e: any) {
			res.status(500).json({ message: e.message })
		}
	}

	async getUserById(req: Request, res: Response): Promise<any> {
		try {
			const userRepository = AppDataSource.getRepository(UserEntity)
			const user = await userRepository.findOneBy({
				id: parseInt(req.params.id)
			})

			if (!user) {
				return res.status(404).json({ message: 'User not found' })
			}

			res.json(user)
		} catch (e: any) {
			res.status(500).json({ message: e.message })
		}
	}
}
