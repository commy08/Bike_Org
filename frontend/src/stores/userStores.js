import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';

Vue.use(Vuex)

const server_ip = 'http://192.168.1.108:8080/';

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
        rs_getBank: [],
        rs_getDatauser: [],
        viewevent: [],
        register_event: [],
        rs_eventbike: [],
    },
    mutations: {
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
        getAddress(state, data) {
            state.rs_getAddress = data
        },
        postAddevent(state, data) {
            state.rs_addEvent = data
        },
        getSearch(state, data) {
            state.searchs = data
        },
        getBank(state, data) {
            state.rs_getBank = data
        },
        getDatauser(state, data) {
            state.rs_getDatauser = data
        },
        getEvent(state, data) {
            state.viewevent = data
        },
        getRegisterevent(state, data) {
            state.register_event = data
        },
        getEventbike(state, data) {
            state.rs_eventbike = data
        },
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
        async postAddevent(context, options) {
            let data = await axios.post(server_ip + "api/event", options, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("postAddevent", data)
        },
        async getSearch(context, options) {
            let data = await axios.get(server_ip + "api/select?province=" + options.provinces, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getSearch", data)
        },
        async getBank(context) {
            let data = await axios.get(server_ip + "api/bank", {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getBank", data)
        },
        async getDatauser(context, options) {
            let data = await axios.get(server_ip + "api/user?token=" + options.access_token, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getDatauser", data)
        },
        async getEvent(context, options) {
            let data = await axios.get(server_ip + "api/event/" + options.id, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getEvent", data)
        },
        async getRegisterevent(context, options) {
            let data = await axios.get(server_ip + "getdivision/?token="+options.access_token,+" "+"&id="+options.id, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getRegisterevent", data)
        },
        async getEventbike(context, options) {
            let data = await axios.get(server_ip + "eventtype?type="+options.type, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((r) => {
                return r.data
            })
            context.commit("getEventbike", data)
        },
    }
})

export default userStores;