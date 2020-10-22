import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


//***********Components*************** */
import HomePage from '@/pages/HomePage'
import RegistrationPage from '@/pages/RegistrationPage'
import LoginPage from '@/pages/LoginPage'
import AddArticle from '@/pages/AddArticle'
import ArticlePage from '@/pages/ArticlePage'
import ErrorPage from '@/pages/ErrorPage'


//**********Routes***************/
const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/register", name: "register", component: RegistrationPage },
  { path: "/addarticle", name: "addarticle", component: AddArticle},
  { path: "/article/:id", name: "articlepage", component: ArticlePage},
  { path: "*", name: "error", component: ErrorPage },
]

const router = new VueRouter({ routes, mode: "history" })





axios.defaults.baseURL = "http://localhost:3000/"

Vue.use(VueRouter)

Vue.use(VueAxios, axios)

Vue.use(Vuex)

Vue.config.productionTip = false



const store = new Vuex.Store({
  state: {
    isAuth: false
  },

  mutations: {
    login(state){
      state.isAuth = true
    },
    logout(state){
      state.isAuth = false
    }
  }
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
