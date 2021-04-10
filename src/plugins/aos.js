import Vue from 'vue';
import AOS from "aos";
import "@/../node_modules/aos/dist/aos.css";

Vue.use(AOS);

AOS.init({
  once: false,
  mirror: false,
});
AOS.refresh();
