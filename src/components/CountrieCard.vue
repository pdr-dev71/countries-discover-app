<script setup>
defineProps({
  country: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <RouterLink :to="{ name: 'countrie-details', params: { name: country.name } }" class="custom-router-link">
  <div class="card">
      <img :src="country.href.flag" class="card-image">
      <div class="card-content">
        <h2> {{ country.name }}</h2>
        <span><b>População:</b> {{ country.population }}</span>
        <span><b>Região:</b> {{ country.continent }}</span>
        <span><b>Capital:</b> {{ country.capital }}</span>
      </div>
    </div>
  </RouterLink>

</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 500px;
  height: 300px;
  cursor: pointer;
  border-radius: 10px;
  color: black;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;

}

.card-image {
  width: 100%;
  height: 55%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}

.card:hover {
  transform: scale(1.05);
}

.card-content {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
}

.card-content h2 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.card-content span {
  column-span: all;
  margin-top: 2px;
  margin-bottom: 2px;
}

.custom-router-link {
  text-decoration: none;
  color: inherit;
 
}

</style>
