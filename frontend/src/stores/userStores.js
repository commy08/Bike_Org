import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';

Vue.use(Vuex)

const userStores = new Vuex.Store({
  state: {
      user : [],
      registerOrg : [],
      registerUser : [],
      porfileOrg : [],
      access_token : [],
      lineloginline : null,
  },
  mutations: {
      // setPosts(state,posts) {
      //     state.posts = posts
      // },
      getLoginLine(state, lineloginline) {
          state.lineloginline = lineloginline
      },
      getTokenLine(state, data) {
          state.access_token = data
      },
      getUser(state, data) {
          state.user = data
      },
      registerOrg(state, data){
        state.registerOrg = data
      },
      registerUser(state, data){
        state.registerUser = data
      },
      porfileOrg(state, data){
        state.porfileOrg = data
      }
  },
  actions: {
      async getLoginLine(context) {
          let lineloginline = await axios.get("http://10.94.180.139:8080/login").then((r) => {
              return r.data
          })
          context.commit("getLoginLine", lineloginline)
      },
      async getTokenLine(context, options) {
          let data = await axios.get("http://10.94.180.139:8080/callback?code=" + options.code + "&state=" + options.state).then((r) => {
              return r.data
          })
          context.commit("getTokenLine", data)
      },
      async getUser(context, options) {
          let data = await axios.post("http://10.94.180.139:8080/getUser",options,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then((r) => {
              return r.data
          })
          context.commit("getUser", data)
      },
      async registerOrg(context, options) {
        let data = await axios.post("http://10.94.180.139:8080/registerOrg",options,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then((r) => {
            return r.data
        })
        context.commit("registerOrg", data)
      },
      async registerUser(context, options) {
        let data = await axios.post("http://10.94.180.139:8080/registerUser ",options,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then((r) => {
            return r.data
        })
        context.commit("registerUser", data)
      },
      async porfileOrg(context, options) {
        let data = await axios.post("http://10.94.180.139:8080/api/event ",options,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then((r) => {
            return r.data
        })
        context.commit("porfileOrg", data)
      },
  }
})
    export default userStores;