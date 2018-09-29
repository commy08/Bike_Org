import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios';

Vue.use(Vuex)

const userStores = new Vuex.Store({
    state: {
     userOrgAT: [],
     active: [],

    },
    mutations: {
      getUserAT(state,userOrgAT) {
       state.userOrgAT = userOrgAT;
      },
    },
    actions: {
      async loaduserActive(context){
        let data = await axios.get('http://localhost/vueapi/useravtivity.php').then((r) => {
          return r.data
        })
        context.commit("getUserAT",data);
      }
    },
  })

  


  export default userStores;