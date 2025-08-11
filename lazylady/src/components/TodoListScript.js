function formatDate(date) {
  return date.toISOString().split('T')[0];
}
export default {
  data() {
    return {
      todos: [],
      newTitle: '',
      newContent: '',
      newDueDate: '',
      showModal: false,
      selectedTodo: null,
    };
  },
  methods: {
    addTodo() {
      if (!this.newTitle.trim()) return;
      const now = new Date();
      this.todos.push({
        id: Date.now(),
        title: this.newTitle,
        content: this.newContent,
        dueDate: this.newDueDate,
        createdAt: formatDate(now),
      });
      this.newTitle = '';
      this.newContent = '';
      this.newDueDate = '';
    },
    openModal(todo) {
      // 深拷貝避免直接編輯
      this.selectedTodo = JSON.parse(JSON.stringify(todo));
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedTodo = null;
    },
    updateTodo() {
      const idx = this.todos.findIndex(t => t.id === this.selectedTodo.id);
      if (idx !== -1) {
        this.todos[idx] = { ...this.selectedTodo };
        this.closeModal();
      }
    },
    confirmDelete() {
      if (confirm('確定要刪除這個項目嗎？')) {
        this.deleteTodo();
      }
    },
    deleteTodo() {
      this.todos = this.todos.filter(t => t.id !== this.selectedTodo.id);
      this.closeModal();
    },
  },
};