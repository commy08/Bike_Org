import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';

Vue.use(Vuex)

const server_ip = 'http://192.168.1.104:8080/';

const userStores = new Vuex.Store({
    state: {
        user: [],
        registerOrg: [],
        registerUser: [],
        porfileOrg: [],
        access_token: [],
        lineloginline: null,
        rs_getAddress: [],
        rs_addEvent: [],
        searchs: [],
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
        registerOrg(state, data) {
            state.registerOrg = data
        },
        registerUser(state, data) {
            state.registerUser = data
        },
        profileOrg(state, data) {
            state.profileOrg = data
        },
        getAddress(state, data) {
            state.rs_getAddress = data
        },
        postAddevent(state, data) {
            state.rs_addEvent = data
        },
        getSearch(state, data) {
            state.searchs = data
        }
    },
    actions: {
        async getLoginLine(context) {
            let lineloginline = await axios.get(server_ip + "api/login").then((r) => {
                return r.data
            })
            context.commit("getLoginLine", lineloginline)
        },
        async getTokenLine(context, options) {
            let data = await axios.get(server_ip + "api/callback?code=" + options.code + "&state=" + options.state).then((r) => {
                return r.data
            })
            context.commit("getTokenLine", data)
        },
        async getUser(context, options) {
            let data = await axios.post(server_ip + "api/getUser", options, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getUser", data)
        },
        async registerOrg(context, options) {
            let data = await axios.post(server_ip + "api/registerOrg", options, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("registerOrg", data)
        },
        async registerUser(context, options) {
            let data = await axios.post(server_ip + "api/registerUser", options, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("registerUser", data)
        },
        async profileOrg(context, options) {
            let data = await axios.get(server_ip + "api/event", options, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("profileOrg", data)
        },
        async getAddress(context) {
            let data = await axios.get(server_ip + "api/address", {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getAddress", data)
        },
        async postAddevent(context,options) {
            let data = await axios.post(server_ip + "api/event",options, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("postAddevent", data)
        },
        async getSearch(context, options) {
            let data = await axios.get(server_ip + "api/select?province=" + options.form.model, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getSearch", data)
        },
    }
})

export default userStores;