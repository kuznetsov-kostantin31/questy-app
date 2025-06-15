import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm'
import { TestEntity } from './test.entity'

@Entity({ name: 'quests' })
export class QuestEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	question!: string

	@Column({ length: 4 })
	variants!: string[]

	@Column({ name: 'true_answer' })
	trueAnswer!: number

	@Column({ name: 'test_id' })
	testId!: number

	@ManyToOne(() => TestEntity)
	@JoinColumn({ name: 'test_id', referencedColumnName: 'id' })
	test!: TestEntity
}
