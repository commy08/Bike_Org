<template>
  <v-app dark>
    <v-container>
      <v-layout align-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <v-avatar size="175px">
              <img
                class="img-circle elevation-7 mb-1"
                :src="user.line_pic"
              >
            </v-avatar>
              <h1 class="blue--text text--lighten-1">{{ user.firstname }}</h1>
            <br>
          </div>
        </v-flex>
      </v-layout>
      <v-card light>
        <v-card-actions>
          <v-layout justify-space-around>
            <router-link to="/profileuser">ข้อมูลส่วนตัว</router-link>
            <router-link to="/profileuser/historys">ประวัติการสมัคร</router-link>
          </v-layout>
        </v-card-actions>
        <hr>
        <router-view></router-view>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  data: () => ({
    user: {}
  }),
  methods: {
    getDatauser: async function() {
      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token
      };
      await userStores.dispatch("getDatauser", optionts);
      this.user = userStores.state.rs_getDatauser;
      // this.showAddress =
      //   this.user.address + " " + this.user.provinces + " " + this.user.amphurs;
      // console.log(this.user);
    }
  },
  async mounted() {
    await this.getDatauser();
  }
};
</script>
