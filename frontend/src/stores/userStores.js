import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';

Vue.use(Vuex)

const userStores = new Vuex.Store({
  state: {
      user : [],
      access_token : [],
      lineloginline: null
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
  },
  actions: {
      async getLoginLine(context) {
          let lineloginline = await axios.get("http://192.168.13.100:8080/login").then((r) => {
              return r.data
          })
          context.commit("getLoginLine", lineloginline)
      },
      async getTokenLine(context, options) {
          let data = await axios.get("http://192.168.13.100:8080/callback?code=" + options.code + "&state=" + options.state).then((r) => {
              return r.data
          })
          context.commit("getTokenLine", data)
      },
      async getUser(context, options) {
          let data = await axios.post("http://localhost/PayReminder/api/v2/line/getUser",options,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then((r) => {
              return r.data
          })
          context.commit("getUser", data)
      },
  }
})
    export default userStores;