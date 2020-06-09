import Vue from "vue";
import App from "./App.vue";
import Photoswipe, { PswpItem } from "vue-pswipe";
import VueCookiePlugin from "vue-cookie-plugin";
import { Greeter } from "array-ts-test";

Vue.use(Photoswipe);
Vue.use(VueCookiePlugin);
// const mergeItem:PswpItem = {
//   // try to type $hash here
// }

console.log(666);
Greeter("hahha");
[].toObservable();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
