<template>
  <div id="app">
    <h1>Welcome to LazyLady</h1>
    <TodoList />
    <GroceryList />
    <CurrencyRates />
    <WeatherForecast />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import GroceryList from './components/GroceryList.vue';
import CurrencyRates from './components/CurrencyRates.vue';
import WeatherForecast from './components/WeatherForecast.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    GroceryList,
    CurrencyRates,
    WeatherForecast,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>