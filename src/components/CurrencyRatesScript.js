export default {
  data() {
    return {
      currencies: [
        { code: 'USD', name: '美金', buy: null, sell: null },
        { code: 'CAD', name: '加幣', buy: null, sell: null },
        { code: 'TWD', name: '台幣', buy: null, sell: null },
        { code: 'JPY', name: '日幣', buy: null, sell: null }
      ],
      fixedCurrencies: ['USD', 'CAD', 'TWD', 'JPY'],
      allCurrencyOptions: [
        { code: 'EUR', name: '歐元' },
        { code: 'GBP', name: '英鎊' },
        { code: 'AUD', name: '澳幣' },
        { code: 'CNY', name: '人民幣' },
        { code: 'KRW', name: '韓元' }
      ],
      showAddModal: false,
      selectedCurrencyCode: '',
      baseCurrency: 'USD',
      ratesData: {}
    };
  },
  methods: {
    openAddModal() {
      this.showAddModal = true;
      this.selectedCurrencyCode = '';
    },
    closeAddModal() {
      this.showAddModal = false;
    },
    addCurrency() {
      if (!this.selectedCurrencyCode) {
        alert('請選擇一個幣別');
        return;
      }
      const selectedOption = this.allCurrencyOptions.find(opt => opt.code === this.selectedCurrencyCode);
      if (!selectedOption) return;

      if (this.currencies.some(c => c.code === selectedOption.code)) {
        alert('此幣別已存在');
        return;
      }

      this.currencies.push({
        code: selectedOption.code,
        name: selectedOption.name,
        buy: null,
        sell: null
      });

      this.closeAddModal();
      this.fetchRates();
    },
    removeCurrency(code) {
      if (this.fixedCurrencies.includes(code)) return;
      this.currencies = this.currencies.filter(c => c.code !== code);
      this.fetchRates();
    },
    async fetchRates() {
  try {
    const url = `https://v6.exchangerate-api.com/v6/559daaf13850a2eda231641a/latest/${this.baseCurrency}`;
    console.log('Fetching:', url);
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.result === 'success') {
      this.ratesData = {};
      // data.conversion_rates 是匯率物件，key是幣別，value是匯率
      for (const [code, rate] of Object.entries(data.conversion_rates)) {
        this.ratesData[code] = { buy: rate, sell: rate };
      }
      this.updateRates();
    } else {
      alert('取得匯率失敗');
    }
  } catch (e) {
    console.error(e);
    alert('匯率API錯誤');
  }
},

    updateRates() {
      this.currencies.forEach(c => {
        const data = this.ratesData[c.code];
        if (data) {
          c.buy = data.buy.toFixed(4);
          c.sell = data.sell.toFixed(4);
        } else {
          c.buy = c.sell = null;
        }
      });
    },
    changeBaseCurrency() {
      this.fetchRates();
    }
  },
  mounted() {
    this.fetchRates();
  }
};
