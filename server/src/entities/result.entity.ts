import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm'
import { TestEntity } from './test.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'result' })
export class ResultEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ name: 'test_id' })
	testId!: number

	@ManyToOne(() => TestEntity)
	@JoinColumn({ name: 'test_id', referencedColumnName: 'id' })
	test!: TestEntity

	@Column({ name: 'user_id' })
	userId!: number

	@ManyToOne(() => UserEntity)
	@JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
	user!: UserEntity

	@Column()
	result?: number
}
