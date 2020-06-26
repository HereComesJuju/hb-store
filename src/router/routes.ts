import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Catalog",
    component: () =>
      import(/* webpackChunkName: "doc" */ "../views/Catalog.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "doc" */ "../views/NotFound.vue")
  }
];

export default routes;
