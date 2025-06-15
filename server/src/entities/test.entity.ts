import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { QuestEntity } from './quest.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'test' })
export class TestEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	title!: string

	@JoinColumn()
	@OneToMany(() => QuestEntity, quest => quest.test)
	quests!: QuestEntity[]

	@Column({ name: 'user_id' })
	userId!: number

	@ManyToOne(() => UserEntity)
	@JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
	user!: UserEntity
}
