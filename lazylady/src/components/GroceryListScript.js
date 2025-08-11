function formatDate(date) {
  return date.toISOString().split('T')[0];
}
export default {
  data() {
    return {
      groceries: [],
      newTitle: '',
      newDueDate: '',
      newItems: [{ name: '', qty: 1 }],
      showAddModal: false,
      showModal: false,
      selectedGrocery: null,
    };
  },
  methods: {
    openAddModal() {
      this.showAddModal = true;
      this.newTitle = '';
      this.newDueDate = '';
      this.newItems = [{ name: '', qty: 1 }];
    },
    closeAddModal() {
      this.showAddModal = false;
    },
    addNewItem() {
      this.newItems.push({ name: '', qty: 1 });
    },
    removeNewItem(idx) {
      this.newItems.splice(idx, 1);
    },
    addGrocery() {
      // 檢查所有品項名稱
      if (!this.newTitle.trim()) {
        alert('請輸入標題');
        return;
      }
      if (this.newItems.length === 0) {
        alert('請至少新增一個品項');
        return;
      }
      if (this.newItems.some(i => !i.name.trim())) {
        alert('請填寫所有品項名稱');
        return;
      }
      const now = new Date();
      this.groceries.push({
        id: Date.now(),
        title: this.newTitle,
        dueDate: this.newDueDate,
        createdAt: formatDate(now),
        items: this.newItems.map(item => ({ ...item })),
      });
      this.closeAddModal();
    },
    openModal(grocery) {
      this.selectedGrocery = JSON.parse(JSON.stringify(grocery));
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedGrocery = null;
    },
    updateGrocery() {
      const idx = this.groceries.findIndex(g => g.id === this.selectedGrocery.id);
      if (idx !== -1) {
        this.groceries[idx] = { ...this.selectedGrocery };
        this.closeModal();
      }
    },
    confirmDelete() {
      if (confirm('確定要刪除這個項目嗎？')) {
        this.deleteGrocery();
      }
    },
    deleteGrocery() {
      this.groceries = this.groceries.filter(g => g.id !== this.selectedGrocery.id);
      this.closeModal();
    },
    addItemToSelectedGrocery() {
      if (this.selectedGrocery && this.selectedGrocery.items) {
        this.selectedGrocery.items.push({ name: '', qty: 1 });
      }
    },
  },
};