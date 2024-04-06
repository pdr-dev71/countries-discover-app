<script setup>
import CountrieCard from '@/components/CountrieCard.vue'
import { ref, onMounted } from 'vue'
import CountrieService from '@/services/CountrieService';
const countries = ref(null)

const selectedRegion = ref('europe')

const getCountriesByRegions = async (continent) => {

  try {
    const response = await CountrieService.getAllCountriesByContinent(continent)
		console.log(response.data)
    countries.value = response.data.data
		selectedRegion.value = continent
  } catch (error) {
    console.log(error)
  }
	
};

onMounted(() => {
  getCountriesByRegions(selectedRegion.value);
});

</script>

<template>
  <div>
    <div class="select-container">
      <label for="region">Selecione por região:</label>
      <select id="region" v-model="selectedRegion" @change="getCountriesByRegions(selectedRegion)">
        <option value="europe">Países da Europa</option>
        <option value="asia">Países da Ásia</option>
        <option value="africa">Países da África</option>
        <option value="south-america">Países da América do Sul</option>
        <option value="north-america">Países da América do Norte</option>
        <option value="central-america">Países da América Central</option>
        <option value="oceana">Países da Oceania</option>
        <option value="the-caribbean">Países do Caribe</option>
      </select>
    </div>
    
    <div class="region-layout">
      <CountrieCard v-for="(country, index) in countries" :key="index" :country="country"/>
    </div>
  </div>
</template>

<style scoped>
.select-container {
  margin-bottom: 16px;
  font-family: Arial, sans-serif;
}

.select-container label {
  margin-right: 8px;
  font-weight: bold;
}

.region-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 0 30px;
}

select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
  cursor: pointer;
  transition: border-color 0.3s;
}

select:focus {
  outline: none;
  border-color: #00ff00; 
}

option {
  background-color: #fff;
  color: #333;
}
</style>
