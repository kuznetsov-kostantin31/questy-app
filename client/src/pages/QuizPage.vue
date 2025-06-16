<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { GET_QUEST } from '../constants/api.constants'
import { useQuizStore } from '../stores/useQuizStore'

const store = useQuizStore()
const router = useRouter()

const currentAnswer = ref<number | null>(null)
const timer = ref(15)
let interval: number | null = null

onMounted(async () => {
	const res = await axios.get(GET_QUEST)
	store.setQuestions(res.data)
	startTimer()
})

function startTimer() {
	if (interval !== null) clearInterval(interval)
	timer.value = 15
	interval = setInterval(() => {
		timer.value--
		if (timer.value <= 0) submitAnswer()
	}, 1000)
}

function submitAnswer() {
	if (currentAnswer.value === null) return

	store.addAnswer({
		questionId: store.questions[store.currentQuestionIndex].id,
		selectedOptionIndex: currentAnswer.value
	})

	if (store.currentQuestionIndex < store.questions.length - 1) {
		store.nextQuestion()
		currentAnswer.value = null
		startTimer()
	} else {
		router.push('/result')
	}
}
</script>

<template>
	<div v-if="store.questions.length > 0" style="padding: 20px">
		<h2>{{ store.questions[store.currentQuestionIndex].text }}</h2>
		<p>Осталось: {{ timer }} сек.</p>
		<div
			v-for="(option, index) in store.questions[
				store.currentQuestionIndex
			].options"
			:key="index"
		>
			<button @click="currentAnswer = index">{{ option.text }}</button>
		</div>
		<button @click="submitAnswer">Ответить</button>
	</div>
</template>
