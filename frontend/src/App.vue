<template>
  <v-app>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {

    }
  },
  methods:{
    
  },
  async mounted() {

  },
}
</script>
