import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Unicon from "vue-unicons";
import { uniBars, uniMultiply, uniShoppingCart } from "vue-unicons/src/icons";

Unicon.add([uniBars, uniMultiply, uniShoppingCart]);
Vue.use(Unicon);

import "./assets/styles/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
