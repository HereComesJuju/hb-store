import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import cart from "./modules/cart";
import nav from "./modules/nav";
import notification from "./modules/notification";
import product from "./modules/product";

Vue.use(Vuex);

const persistedState = createPersistedState({
  paths: ["cart.cart.items"],
  key: "cart"
});

export default new Vuex.Store({
  modules: {
    cart,
    nav,
    notification,
    product
  },
  plugins: [persistedState]
});
