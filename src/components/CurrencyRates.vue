<template>
  <div>
    <h1>Currency Exchange Rates</h1>
    <select v-model="selectedCurrency" @change="fetchRates">
      <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
    </select>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="(rate, currency) in rates" :key="currency">
          {{ currency }}: {{ rate }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD'],
      selectedCurrency: 'USD',
      rates: {},
      loading: false,
    };
  },
  methods: {
    fetchRates() {
      this.loading = true;
      fetch(`https://api.exchangerate-api.com/v4/latest/${this.selectedCurrency}`)
        .then(response => response.json())
        .then(data => {
          this.rates = data.rates;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching currency rates:', error);
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchRates();
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
select {
  margin-bottom: 20px;
}
</style>