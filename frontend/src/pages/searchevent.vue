<template>
  <v-app dark>
    <v-content>
      <v-flex pa-4>&nbsp;
        <h2>ผลลัพธ์การค้นหา : {{ this.$route.query.search }}</h2>
      </v-flex>
      <v-layout align-start justify-center row fill-height ma->
        <v-flex v-for="(event,index) in events" :key="index" xs3 ma-2>
          <v-card class="circle0">
            <v-layout row wrap pa-3 align-center justify-center>
              <img :src="event.PicData" height="250px" width="100%" align-center>
            </v-layout>
            <v-card-title primary-title>
              <v-flex>
                <v-flex class="headline">ชื่อกิจกรรม : {{ event.EventName }}</v-flex>
                <span class="grey--text">เวลาปิดรับสมัคร :{{ event.dateClose }}</span><br>
                <span class="grey--text">สถานที่ : {{ event.provinces }},{{ event.amphurs }}</span>
              </v-flex>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="viewevent(event.id);">ดูรายละเอียด</v-btn>
              <v-btn flat color="purple" @click="register_event()">สมัครแข่งขัน</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>


<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  components: {},
  data: () => ({
    events: [],
    event_id: []
  }),
  methods: {
    getSearch: async function() {
      if (!this.$route.query.search) router.push("/");
      let optionts = {
        provinces: this.$route.query.search
      };
      await userStores.dispatch("getSearch", optionts);
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