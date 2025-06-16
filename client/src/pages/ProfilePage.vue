<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { GET_RESULT } from '../constants/api.constants'
import type { ITest } from '../types/Test.types'

const results = ref<ITest[]>([])
const userId = ref(localStorage.getItem('userId') || '')

onMounted(async () => {
	if (!userId.value) return
	const res = await axios.get(`${GET_RESULT}/${userId.value}`)
	results.value = res.data
})
</script>

<template>
	<div style="padding: 20px">
		<h2>Мой профиль</h2>
		<div v-if="results.length === 0">
			<p>Вы ещё не проходили тест.</p>
		</div>
		<div v-else>
			<h3>История прохождений:</h3>
			<div v-for="(result, index) in results" :key="index">
				<p>Дата: {{ new Date(result.createdAt).toLocaleString() }}</p>
				<p>Результат: {{ result.score }}%</p>
				<hr />
			</div>
		</div>
	</div>
</template>
