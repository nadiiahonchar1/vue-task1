const App = {
  //Дані що передаються в HTML
  data() {
    return {
      counter: 0,
      title: "Count:",
    };
  },
};

const app = Vue.createApp(App);
app.mount("#app");
