import { createRouter, createWebHistory } from 'vue-router'
import ListAllCountries from '../views/ListAllCountries.vue'
import CountrieDetailsView from '@/views/CountrieDetailsView.vue'
import ListCountriesByRegionView from '@/views/ListCountriesByRegionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListAllCountries
    },
    {
      path: '/region',
      name: 'regioes',
      component: ListCountriesByRegionView
    },
    {
      path: '/country/:name',
      name: 'countrie-details',
      props: true,
      component: CountrieDetailsView
    },
  ]
})

export default router
