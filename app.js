const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      visibleList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggle() {
     this.visibleList = !this.visibleList
    },
  },
});

app.mount("#assignment");
