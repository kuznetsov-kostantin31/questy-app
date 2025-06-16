import { createRouter, createWebHistory } from 'vue-router'
import CreateQuestPage from '../pages/CreateQuestPage.vue'
import CreateUserPage from '../pages/CreateUserPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import QuizPage from '../pages/QuizPage.vue'
import ResultPage from '../pages/ResultPage.vue'

const routes = [
	{
		path: '/',
		redirect: '/create-user'
	},
	{
		path: '/create-user',
		component: CreateUserPage
	},
	{
		path: '/quiz',
		component: QuizPage
	},
	{
		path: '/result',
		component: ResultPage
	},
	{
		path: '/profile',
		component: ProfilePage
	},
	{
		path: '/test',
		component: CreateQuestPage
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
