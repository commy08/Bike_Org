<template>
  <v-app dark>
    <section>
      <v-toolbar class="amber title">
        <v-layout light class="justify-space-around">
          <router-link to="/allevent" tag="div" @click="getEventmoutain()">จักรยานเสือภูเขา</router-link>
          <router-link to="/allevent/road_bike" tag="div">จักรยานทางเรียบ</router-link>
        </v-layout>
      </v-toolbar>
      <router-view></router-view>
    </section>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    events: [],
    
  }),
  methods: {
    getSearch: async function() {
      if (!this.$route.query.event) router.push("/");
      let optionts = {
        event: this.$route.query.events
      };
      await userStores.dispatch("getEventmoutain", optionts);
      this.events = await userStores.state.searchs;
    },
    viewevent: async function(event_id) {
      window.location = "/event/" + event_id;
    },
    register_event: async function() {
      if (!localStorage.access_token.id) router.push("/");
      let optionts = {
        access_token: localStorage.access_token,
        id: localStorage.id
      };
      await userStores.dispatch("register_event", optionts);
      this.user = userStores.state.rs_getDatauser;
    }
  },
  async mounted() {
    await this.getSearch();
  }
};
</script>