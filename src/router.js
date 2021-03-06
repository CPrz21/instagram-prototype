import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard/:token",
      name: "dashboard",
      component: Dashboard,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/About.vue");
      }
    }
  ]
});
