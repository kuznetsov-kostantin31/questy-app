<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { CREATE_QUEST, GET_QUEST } from '../constants/api.constants'

interface AnswerOption {
	text: string
	isCorrect: boolean
}

interface Question {
	id?: number
	text: string
	options: AnswerOption[]
	timeLimit: number
}

const questions = ref<Question[]>([])
const newQuestion = ref<Question>({
	text: '',
	options: [{ text: '', isCorrect: false }],
	timeLimit: 15
})

onMounted(async () => {
	const res = await axios.get(GET_QUEST)
	questions.value = res.data
})

function addOption() {
	newQuestion.value.options.push({ text: '', isCorrect: false })
}

async function saveQuestion() {
	await axios.post(CREATE_QUEST, newQuestion.value)
	const res = await axios.get(GET_QUEST)
	questions.value = res.data
	resetForm()
}

function resetForm() {
	newQuestion.value = {
		text: '',
		options: [{ text: '', isCorrect: false }],
		timeLimit: 15
	}
}
</script>

<template>
	<div style="padding: 20px">
		<h2>Создание вопроса</h2>
		<input v-model="newQuestion.text" placeholder="Текст вопроса" />
		<div v-for="(option, index) in newQuestion.options" :key="index">
			<input v-model="option.text" placeholder="Вариант ответа" />
			<label>
				<input type="checkbox" v-model="option.isCorrect" />
				Правильный
			</label>
		</div>
		<button @click="addOption">Добавить вариант</button>
		<button @click="saveQuestion">Сохранить вопрос</button>

		<hr />

		<h3>Список вопросов</h3>
		<ul>
			<li v-for="q in questions" :key="q.id">
				{{ q.text }}
			</li>
		</ul>
	</div>
</template>
