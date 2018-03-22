import Vue from 'vue'
import App from './App.vue'
import VueRichMediaEditor from './editor/vue-rich-media-editor'

Vue.use(VueRichMediaEditor)

new Vue({
  el: '#app',
  render: h => h(App)
})
