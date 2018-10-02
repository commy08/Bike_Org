<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import userStores from '@/stores/userStores'

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      users: [],
      active: [],

    }
  },
  methods:{
    loadUserActive: async function () {
      await userStores.dispatch('loaduserActive')
      this.users = userStores.state.userOrgAT.users;
      this.active = userStores.state.userOrgAT.title;
    }
  },
  async mounted() {
    await this.loadUserActive()
  },
}
</script>
