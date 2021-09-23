require('./resources/js/bootstrap');

window.Vue = require('vue');

// Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Welcome from './Brochure/Welcome.vue';
const routes = [{ path: '/', component: Welcome }];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
}).$mount('#app');
