require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue';
import App from './vue/app';
import VueRouter from 'vue-router';
import routes from './router';
import Vuetify from '../plugins/vuetify'

Vue.use(VueRouter)

console.log("HAHA");

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

library.add(faPlusSquare, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('qrcode-stream', QrcodeStream)
Vue.component('qrcode-drop-zone', QrcodeDropZone)
Vue.component('qrcode-capture', QrcodeCapture)

const app = new Vue({
    el: '#app',
    components: { App },
    router: new VueRouter(routes),
    vuetify: Vuetify
})

/*const app = new Vue({
    router,
    components: { App }
}).$mount("#app")*/
