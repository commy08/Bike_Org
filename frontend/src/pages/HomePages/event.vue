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
    data: () => ({
        items: [
          {
            src: 'https://tiewtiddin.com/wp-content/uploads/2018/05/%E0%B8%A1%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%81%E0%B8%A5-2561-1-627x355.jpg'
          },
          {
            src: 'https://i.ytimg.com/vi/biFAqxjFxgg/maxresdefault.jpg'
          },
          {
            src: 'http://thaibike.org/wp-content/uploads/2016/11/y2z848.jpg'
          }
        ]
    }),
  };
</script>