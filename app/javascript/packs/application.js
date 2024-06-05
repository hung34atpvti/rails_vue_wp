import Vue from "vue";
import Hello from "../components/Hello.vue";

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    render: (h) => h(Hello),
  }).$mount("#app");
  document.body.appendChild(app.$el);
});
