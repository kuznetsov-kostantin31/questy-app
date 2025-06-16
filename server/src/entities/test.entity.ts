import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'tests' })
export class TestEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	userId!: string

	@Column('simple-json')
	answers!: {
		questionId: number
		selectedOptionIndex: number
		correct: boolean
	}[]

	@Column()
	score!: number

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	createdAt!: Date
}
