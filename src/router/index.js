import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesList from '../views/MovieList.vue'
import MovieDetails from '../views/MovieDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cards',
      name: 'cardsList',
      component: MoviesList
    },
    {
      path: '/cards/:id',
      name: 'cardsDetails',
      component: MovieDetails
    } 
  ]
})

export default router