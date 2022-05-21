const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      visibleList: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.visibleList ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggle() {
      this.visibleList = !this.visibleList;
    },
  },
});

app.mount("#assignment");
