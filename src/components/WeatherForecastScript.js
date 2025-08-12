export default {
  data() {
    return {
      cities: [
        { name: '台北', query: 'Taipei', temp: null, weather: null },
        { name: '卡加立', query: 'Calgary', temp: null, weather: null },
        { name: '多倫多', query: 'Toronto', temp: null, weather: null },
        { name: '紐約', query: 'New York', temp: null, weather: null }
      ],
      fixedCities: ['台北', '卡加立', '多倫多', '紐約'],
      allCityOptions: [
        { name: '東京', query: 'Tokyo' },
        { name: '首爾', query: 'Seoul' },
        { name: '倫敦', query: 'London' },
        { name: '巴黎', query: 'Paris' },
        { name: '雪梨', query: 'Sydney' }
      ],
      showAddModal: false,
      selectedCityQuery: '',
      apiKey: 'c92f81d770a6491cab023534251208',
    };
  },
  methods: {
    openAddModal() {
      this.showAddModal = true;
      this.selectedCityQuery = '';
    },
    closeAddModal() {
      this.showAddModal = false;
    },
    addCity() {
      if (!this.selectedCityQuery) {
        alert('請選擇一個城市');
        return;
      }
      const selectedOption = this.allCityOptions.find(opt => opt.query === this.selectedCityQuery);
      if (!selectedOption) return;

      if (this.cities.some(c => c.query === selectedOption.query)) {
        alert('此城市已存在');
        return;
      }

      this.cities.push({
        name: selectedOption.name,
        query: selectedOption.query,
        temp: null,
        weather: null
      });

      this.closeAddModal();
      this.fetchWeather();
    },
    removeCity(cityName) {
      if (this.fixedCities.includes(cityName)) return;
      this.cities = this.cities.filter(c => c.name !== cityName);
    },
    async fetchWeather() {
      try {
        for (let city of this.cities) {
          const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${encodeURIComponent(city.query)}&lang=zh`;
          const res = await fetch(url);
          const data = await res.json();
          if (data && data.current) {
            city.temp = data.current.temp_c.toFixed(1);
            city.weather = data.current.condition.text;
          } else {
            city.temp = null;
            city.weather = '取得失敗';
          }
        }
      } catch (e) {
        console.error(e);
        alert('天氣API錯誤');
      }
    }
  },
  mounted() {
    this.fetchWeather();
  }
};
