<template>
  <div class="weather-forecast">
    <h2>Weather Forecast</h2>
    <select v-model="selectedRegion" @change="fetchWeather">
      <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
    </select>
    <div v-if="weatherData">
      <h3>Forecast for {{ selectedRegion }}</h3>
      <p>Temperature: {{ weatherData.temperature }} °C</p>
      <p>Condition: {{ weatherData.condition }}</p>
      <p>Humidity: {{ weatherData.humidity }}%</p>
    </div>
    <button @click="fetchWeather">Get Weather</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRegion: '',
      regions: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
      weatherData: null,
    };
  },
  methods: {
    fetchWeather() {
      // Replace with your weather API endpoint
      const apiKey = 'YOUR_API_KEY';
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.selectedRegion}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.weatherData = {
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            humidity: data.current.humidity,
          };
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    },
  },
};
</script>

<style scoped>
.weather-forecast {
  margin: 20px;
}
</style>