<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SAVE_RESULT } from '../constants/api.constants'
import { useQuizStore } from '../stores/useQuizStore'

const store = useQuizStore()
const router = useRouter()

const correctCount = ref(0)
const score = ref(0)

correctCount.value = store.answers.reduce((count, ans) => {
	const question = store.questions.find(q => q.id === ans.questionId)
	if (question?.options[ans.selectedOptionIndex]?.isCorrect) count++
	return count
}, 0)

score.value = Math.round((correctCount.value / store.questions.length) * 100)

async function sendResults() {
	const userId = localStorage.getItem('userId')

	await axios.post(SAVE_RESULT, {
		userId,
		answers: store.answers.map(ans => ({
			...ans,
			correct: store.questions.find(q => q.id === ans.questionId)
				?.options[ans.selectedOptionIndex]?.isCorrect
		})),
		score: score.value
	})

	router.push('/profile')
}
</script>

<template>
	<div style="padding: 20px">
		<h2>Результаты</h2>
		<p>
			Правильных ответов: {{ correctCount }} из
			{{ store.questions.length }}
		</p>
		<p>Процент правильных: {{ score }}%</p>
		<button @click="sendResults">Сохранить результат</button>
		<br />
		<a href="/profile">Перейти в профиль</a>
	</div>
</template>
