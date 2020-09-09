require('./bootstrap');

window.Vue = require('vue');

window.moment = require('moment');


import routes from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

import Vuex from 'vuex';
Vue.use(Vuex);

import Store from './store';
const store = new Vuex.Store({
    state: {
        loading: true,
    },

    mutations: {
        setLoading(state, value) {
            state.loading = value;
        }
    },
});




import 'nprogress/nprogress.css';



Vue.component('spinner', require('vue-simple-spinner'));



import App from './app.vue';

new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app');
