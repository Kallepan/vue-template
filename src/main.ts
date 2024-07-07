import './assets/main.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimveVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import App from './App.vue';
import router from './router';

import i18n from './i18n';

const app = createApp(App);

app.use(createPinia());
app.use(PrimveVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);
app.use(i18n);

app.mount('#app');
