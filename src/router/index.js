import { createRouter, createWebHistory } from 'vue-router'
import HomeView        from '../views/HomeView.vue'
import CharacterList   from '../views/CharacterList.vue'
import CharacterDetail from '../views/CharacterDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharacterList
    },
    {
      path: '/characters/:charId',
      name: 'chara-details',
      component: CharacterDetail
    }
  ]
})

export default router