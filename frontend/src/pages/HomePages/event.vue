<template>
  <v-app dark>
    <section>
      <v-toolbar class="amber title">
        <v-layout light class="justify-space-around">
          <router-link to="/event" tag="div">จักรยานเสือภูเขา</router-link>
          <router-link to="/event/road_bike" tag="div">จักรยานทางเรียบ</router-link>
        </v-layout>
      </v-toolbar>
      <router-view></router-view>
    </section>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  
};
</script>