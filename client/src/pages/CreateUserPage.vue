<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CREATE_USER } from '../constants/api.constants'

const router = useRouter()
const name = ref('')
const error = ref('')

async function submit() {
	if (!name.value.trim()) {
		error.value = 'Имя не может быть пустым'
		return
	}

	try {
		const res = await axios.post(CREATE_USER, {
			name: name.value
		})
		localStorage.setItem('userId', res.data.id)
		localStorage.setItem('userName', res.data.name)
		router.push('/quiz')
	} catch (e) {
		error.value = 'Ошибка при создании пользователя'
	}
}
</script>

<template>
	<div style="padding: 20px">
		<h2>Введите ваше имя</h2>
		<input v-model="name" placeholder="Ваше имя" />
		<button @click="submit">Начать тест</button>
		<p v-if="error" style="color: red">{{ error }}</p>
	</div>
</template>
