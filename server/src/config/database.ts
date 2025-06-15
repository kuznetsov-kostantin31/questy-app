import dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || '2000'),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: true,
	logging: false,
	entities: ['src/entities/**/*.ts'],
	migrations: ['src/migration/**/*.ts'],
	subscribers: []
})

if (require.main === module) {
	AppDataSource.initialize()
		.then(() => console.log('Datasourse init'))
		.catch(e => console.error('Init error', e))
}
