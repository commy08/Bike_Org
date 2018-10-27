<template>
    <v-app>
      <div align="center" class="mt-5">
            <i class="fa fa-refresh fa-spin" style="font-size:50px;"></i>
            <br>
            <br>
            Please Wait...
        </div>
    </v-app>
</template>


<script>

import userStores from '@/stores/userStores'
import router from '@/router'

export default {
  name: 'callback',
  components: {
  },
  data(){
      return {
        name: null,
        picture: null,
      }
  },
  methods: {
    getTokenLine: async function() {
      if(
        (this.$route.query.code == undefined || this.$route.query.code == "")
        &&
        (this.$route.query.state == undefined || this.$route.query.state == "")
      ){
        return false;
      }
      let optionts = {
        code : this.$route.query.code,
        state : this.$route.query.state
      }
      
      await userStores.dispatch('getTokenLine',optionts)
      // console.log(userStores.state.access_token);
      if(userStores.state.access_token.status == 200){
          localStorage.access_token = userStores.state.access_token.access_token;
          router.push('/SelectType')
      }else{
        router.push('/') 
      }
    },
    
  },
  async mounted () {
    await this.getTokenLine()
    if(localStorage.access_token) router.push('/SelectType')
    else router.push('/')
    // await this.getUser()
  },
}
</script>