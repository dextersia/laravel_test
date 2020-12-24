// You still need to register Vuetify itself
// src/plugins/vuetify.js
//import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
//import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'


Vue.use(Vuetify)

const opts = {};

/*export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
})*/

export default new Vuetify(opts)