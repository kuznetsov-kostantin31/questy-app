import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Answer {
	questionId: number
	selectedOptionIndex: number
}

export const useQuizStore = defineStore('quiz', () => {
	const currentQuestionIndex = ref(0)
	const answers = ref<Answer[]>([])
	const questions = ref<any[]>([])

	function setQuestions(data: any[]) {
		questions.value = data
	}

	function nextQuestion() {
		currentQuestionIndex.value++
	}

	function addAnswer(answer: Answer) {
		answers.value.push(answer)
	}

	function reset() {
		currentQuestionIndex.value = 0
		answers.value = []
	}

	return {
		currentQuestionIndex,
		answers,
		questions,
		setQuestions,
		nextQuestion,
		addAnswer,
		reset
	}
})
