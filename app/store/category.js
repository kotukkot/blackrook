import Vue from 'nativescript-vue';
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      category: []
    },
    mutations: {
        updateCategoryList(state, data) {
            state.category = data;
        },
    }
})


export default store;