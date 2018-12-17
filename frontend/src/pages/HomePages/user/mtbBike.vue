<template>
  <v-app>
    <v-container>
      <v-layout align-start justify-center row fill-height ma->
        <v-flex v-for="(event,index) in events" :key="index" xs3 ma-2>
          <v-card class="circle0">
            <v-layout row wrap pa-3 align-center justify-center>
              <img :src="event.PicData" height="208" align-center>
            </v-layout>
            <v-card-title primary-title>
              <v-flex>
                <v-flex class="headline">ชื่อกิจกรรม : {{ event.EventName }}</v-flex>
                <span class="grey--text">เวลาปิดรับสมัคร :{{ event.dateClose }}</span>
              </v-flex>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="viewevent(event.id);">ดูรายละเอียด</v-btn>
              <v-btn flat color="purple">สมัครแข่งขัน</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  data: () => ({
    events: [],
    event_id: []
  }),
  methods: {
    loadEvent: async function() {
      let optionts = {
        type: "จักรยานภูเขา"
      };
      await userStores.dispatch("getEventbike", optionts);
      userStores.state.searchs;
    },
    getEventbike: async function() {
      if (!localStorage.moutain) router.push("/");
      let optionts = {
        moutain: localStorage.moutain
      };
      await userStores.dispatch("getEventbike", optionts);
      this.user = userStores.state.rs_eventmoutain;
    },
    viewevent: async function(event_id) {
      window.location = "/event/" + event_id;
    }
  },
  async mounted() {
    await this.loadEvent();
    await this.getEventmoutain();
  }
};
</script>