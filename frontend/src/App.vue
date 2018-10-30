<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
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
