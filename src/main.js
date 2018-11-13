// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import firebase from 'firebase'

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyBQpo1qvWix6Z7VqcLwo4EboBFVm9vHEF0",
  authDomain: "dynamic-4dc67.firebaseapp.com",
  databaseURL: "https://dynamic-4dc67.firebaseio.com",
  projectId: "dynamic-4dc67",
  storageBucket: "",
  messagingSenderId: "715780695907"
};
firebase.initializeApp(config);
// Vue.prototype.$eventHub = new Vue();
export const bus = new Vue();
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
