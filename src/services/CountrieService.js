import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://restfulcountries.com/api/v1',
	headers: {
		'Authorization': 'Bearer 552|U4oLHdXZ1Kf5vbgEVT0bGzRJejrlgsjmKgF1g94X',
	}
})

export default {
	getAllCountries(per_page) {
		return apiClient.get(`/countries?per_page=${per_page}`)
	},
	getAllCountriesByContinent(continent) {
		return apiClient.get(`/countries?continent=${continent}`)
	},
	getCountrieByName(name) {
		return apiClient.get(`/countries/${name}`)
	}
}

