<template>
    <v-app dark>
        <v-container>
            <v-layout align-center>
                <v-flex xs12>
                    <div class="text-xs-center">
                        <v-avatar size="175px">
                            <img
                            class="img-circle elevation-7 mb-1"
                            src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg"
                            >
                        </v-avatar>
                        <div class="headline">John&nbsp;<span>Carter</span></div>
                        <br>
                    </div>
                </v-flex>
            </v-layout>
            
            <v-card light>
                    <v-layout justify-space-around>
                        <router-link to="/checkuser">ข้อมูลส่วนตัว</router-link>
                        <router-link to="/checkuser">สมัครสมาชิกทั่วไป</router-link>
                        <router-link to="/checkuser">สมัครสมาชิกผู้จัดกิจกรรม</router-link>
                    </v-layout>
                <router-view></router-view>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
const server_ip = 'http://10.94.180.139:8080/';
import form from "./registerOrg";
import router from "@/router";

export default {
  name: "checkuser",
  data() {
    return {
      name: null,
      picture: null
    };
  },
  methods: {
    postregiUser() {
      this.$http.get(server_ip + "registerUser").then(function(response) {
          this.customers = response.body;
        });
    }
  },
  created: function() {
    if (this.$router.params.alert) {
      this.alert = $router.params.alert;
    }
    this.postregiUser();
  },
  updated: function() {
    this.postregiUser();
  },
  components: {
    "v-form": form
  }
};
</script>
