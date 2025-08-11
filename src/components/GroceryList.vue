<template>
  <div>
    <h1>Grocery List</h1>
    <input v-model="newItem" @keyup.enter="addItem" placeholder="Add a new item" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span :class="{ purchased: item.purchased }">{{ item.name }}</span>
        <button @click="togglePurchased(index)">
          {{ item.purchased ? 'Unmark' : 'Mark as Purchased' }}
        </button>
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      items: []
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push({ name: this.newItem, purchased: false });
        this.newItem = '';
      }
    },
    togglePurchased(index) {
      this.items[index].purchased = !this.items[index].purchased;
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.purchased {
  text-decoration: line-through;
}
</style>