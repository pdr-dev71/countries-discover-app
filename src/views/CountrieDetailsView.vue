<script setup>
import { ref, onMounted } from 'vue'
import CountrieService from '@/services/CountrieService'
import { useRouter } from 'vue-router';

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

const props = defineProps({
  name: {
    required: true,
  },
})

const countrie = ref(null)

onMounted(async () => {
  try {
    const response = await CountrieService.getCountrieByName(props.name);
    countrie.value = response.data.data
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
  <div class="countrie-details-layout">
    <div v-if="countrie" class="card-wrapper">
      <img :src="countrie.href.flag" class="card-image">
      <div class="content-wrapper">
        <div class="card-content">
          <h2>{{ countrie.name }}</h2>
          <ul>
            <li><b>População:</b> {{ countrie.population }}</li>
            <li><b>Região:</b> {{ countrie.continent }}</li>
            <li><b>Capital:</b> {{ countrie.capital }}</li>
            <li><b>Nome completo:</b> {{ countrie.full_name }}</li>
            <li><b>ISO2:</b> {{ countrie.iso2 }}</li>
            <li><b>ISO3:</b> {{ countrie.iso3 }}</li>
          </ul>
        </div>
        <div class="vertical-divider"></div>
        <div class="card-content">
          <ul>
            <li><b>Casos de covid:</b> {{ countrie.covid19.total_case }}</li>
            <li><b>Mortes de covid:</b> {{ countrie.covid19.total_deaths }}</li>
            <li><b>Sigla moeda:</b> {{ countrie.currency }}</li>
            <li><b>Tamanho:</b> {{ countrie.size }}</li>
            <li><b>Codigo telefone:</b> {{ countrie.phone_code }}</li>
          </ul>
        </div>

      </div>
    </div>
    <div v-else>
      <h3>Carregando</h3>
    </div>

  </div>
  <button @click="goToHome" class="go-to-home-button">Voltar</button>
</template>

<style scoped>
.countrie-details-layout {
  text-align: left;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 800px;
  height: 270px;
  cursor: pointer;
  border: 1px solid white;
  margin-bottom: 18px;
  color: black;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

.card-wrapper {
  display: flex;
}

.card-image {
  border-radius: 5px;
  margin-top: 5px;
  width: 300px;
  height: 260px;
  margin-top: 5px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
}

.card-content {
  align-self: flex-start;
  flex: 1;
  padding-top: 10px;
}

.card-content h2 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.card-content ul {
  padding: 0;
  margin: 0;
}

.card-content li {
  list-style-type: none;
  margin-top: 2px;
  margin-bottom: 2px;
}

.vertical-divider {
  border-left: 2px solid green;
  height: 100%;
  margin-right: 80px;
  margin-left: 50px;
}

.go-to-home-button {
  color: white;
  background-color: rgb(38, 58, 175);
  width: 200px;
  height: 30px;
  border-radius: 20px;
  margin-top: 20px;
  font-weight: bold;
}
</style>
