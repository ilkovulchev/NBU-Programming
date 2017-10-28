//This is the polyfill package that takes care of the IE issues.
//Update your node_modules if you have not to get the package and just uncomment it bellow to use it.

import "babel-polyfill";

import Site from './Site.vue';
import Vue from 'vue';
import { store } from './../store/store.js';

new Vue({
  el: '#load_site',
  store,
  render: h => h(Site)
})
