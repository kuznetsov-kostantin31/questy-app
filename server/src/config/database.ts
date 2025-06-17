import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { QuestEntity } from '../entities/quest.entity'
import { TestEntity } from '../entities/test.entity'
import { UserEntity } from '../entities/user.entity'

dotenv.config()

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || '5432'),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: true,
	logging: false,
	entities: [UserEntity, QuestEntity, TestEntity],
	migrations: [__dirname + '/migrations/**/*{.ts,.js}']
})

if (require.main === module) {
	AppDataSource.initialize()
		.then(() => console.log('Datasourse init'))
		.catch(e => console.error('Init error', e))
}
