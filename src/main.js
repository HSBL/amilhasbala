import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import axios from 'axios';

Vue.prototype.$http = axios

import jQuery from "jquery";

window.$ = window.jQuery = jQuery;


import "bootstrap";
import "./assets/app.scss"

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
