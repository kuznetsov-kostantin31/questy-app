import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { TestEntity } from './test.entity'

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	name!: string

	@OneToMany(() => TestEntity, test => test.user)
	@JoinColumn()
	tests!: TestEntity[]
}
