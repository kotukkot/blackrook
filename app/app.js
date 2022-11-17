import Vue from 'nativescript-vue';

Vue.config.silent = true;

import '@nativescript/theme/css/core.css';
import '@nativescript/theme/css/default.css';
import Theme from "@nativescript/theme";

  Theme.setMode(Theme.Light);

import { isAndroid, isIOS } from '@nativescript/core';
Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;


import './globalFunctions';

// https://github.774.gs/nativescript-vue/nativescript-vue-navigator
import Navigator from 'nativescript-vue-navigator';
import {routes} from './routes';
Vue.use(Navigator, { routes });


import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
Vue.use(RadSideDrawer);

import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);

import CollectionView from '@nativescript-community/ui-collectionview/vue';
Vue.use(CollectionView);

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


import App from './components/App';

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`[VUE WARN]: ${msg} ${trace}`)
}

import storeCategory from './store/category';

import htmlViewD from './directives/htmlViewD';
Vue.directive('fixHtml', htmlViewD)

Vue.registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);

new Vue({
  // render: (h) => h('frame', [h(App)]),
  
  render: h => h(App),
  store:storeCategory
}).$start()
