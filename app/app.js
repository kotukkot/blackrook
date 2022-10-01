import Vue from 'nativescript-vue';

// https://github.774.gs/nativescript-vue/nativescript-vue-navigator
import Navigator from 'nativescript-vue-navigator';
import {routes} from './routes';
Vue.use(Navigator, { routes });


import axios from 'axios/dist/axios';
Vue.prototype.$axios = axios;

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/css/font-awesome.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

import WebViewPlugin from '@nativescript-community/ui-webview/vue';
Vue.use(WebViewPlugin);


import moment from 'moment';
Vue.prototype.$moment = moment;

// https://github.com/nativescript-community/ui-material-components/tree/master/packages/bottom-navigation
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';
Vue.use(BottomNavigation);


import App from './components/App';

new Vue({
  // render: (h) => h('frame', [h(App)]),
  render: h => h(App)
}).$start()
