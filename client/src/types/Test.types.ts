export interface ITest {
	id: number
	userId: string
	answers: Array<{
		questionId: number
		selectedOptionIndex: number
		correct: boolean
	}>
	score: number
	createdAt: string // ISO date string
}
