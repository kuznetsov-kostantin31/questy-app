import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import { AppDataSource } from './config/database'
import { router } from './routers'

class App {
	public app: Application

	constructor() {
		this.app = express()
		this.config()
		this.router()
		this.initializeDatabase()
	}

	private config(): void {
		this.app.use(bodyParser.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(cors())
	}

	private router(): void {
		this.app.use('/api', router)
	}

	private async initializeDatabase(): Promise<void> {
		try {
			await AppDataSource.initialize()
			console.log('Database connected')

			await AppDataSource.runMigrations()
			console.log('Migrations applied')
		} catch (error) {
			console.error('Database connection error', error)
		}
	}
}

export default new App().app
