import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Market from "./views/market.vue";
import Aboutus from "./views/aboutus.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/market",
      name: "Market",
      component: Market
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: Aboutus
    }
  ]
});
