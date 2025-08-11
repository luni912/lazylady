<template>
  <div class="date-picker">
    <label for="date">Select a date:</label>
    <input type="date" v-model="selectedDate" @change="handleDateChange" />
    <p v-if="isValidDate">Selected Date: {{ selectedDate }}</p>
    <p v-else class="error">Please select a valid date.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '',
    };
  },
  computed: {
    isValidDate() {
      return this.selectedDate !== '';
    },
  },
  methods: {
    handleDateChange() {
      // Handle date selection logic here
      console.log('Date selected:', this.selectedDate);
    },
  },
};
</script>

<style scoped>
.date-picker {
  margin: 20px;
}

.error {
  color: red;
}
</style>