import { createApp } from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify'; // Vuetifyをインポート
import { createPinia } from 'pinia';
import router from './router';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/tailwind.css'; // Tailwind CSSをインポート

import axios from './plugins/axios'; // axios.js をインポート
axios.defaults.withCredentials = true;

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App);
// axios を他のコンポーネントで使用するためにグローバルプロパティとして登録
app.config.globalProperties.$axios = axios;

const pinia = createPinia();

app.use(vuetify); // Vuetifyをアプリに登録
app.use(pinia);
app.use(router);
app.mount('#app');

//createApp(App).mount('#app')
