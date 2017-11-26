import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

// creates our store. Store is a method in which we pass an object where we configure that store
export const store = new Vuex.Store({
	state: {
    activeTab: 'home',
    selectedTab: 'home',
		// closeOpenedImage: false,
  },
  getters: {

  },
  mutations: {

  },
});
