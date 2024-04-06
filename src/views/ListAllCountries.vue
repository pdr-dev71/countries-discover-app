<script setup>
import { ref, onMounted } from 'vue'
import CountrieService from '@/services/CountrieService';
import CountrieCard from '@/components/CountrieCard.vue';

const countries = ref([])

const currentPage = ref(1)

const perPage = ref(30)


const getAllCountries = async () => {

  try {
    const response = await CountrieService.getAllCountries(perPage.value);
    console.log(response.data);
    countries.value = response.data.data;
    currentPage.value = response.data.meta.current_page
    console.log(`Essa é a pagina atual: ${currentPage.value}`)
  } catch (error) {
    console.log(error);
  }

};




onMounted(getAllCountries);
</script>

<template>
  <div class="container">
    <div class="home-layout">
      <CountrieCard v-for="(country, index) in countries" :key="index" :country="country"/>
    </div>
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container {
  margin-left: 30px;
  margin-right: 30px;
}

</style>
