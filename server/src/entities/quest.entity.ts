import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'quests' })
export class QuestEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	text!: string

	@Column('simple-json')
	options!: { text: string; isCorrect: boolean }[]

	@Column({ default: 15 })
	timeLimit!: number
}
