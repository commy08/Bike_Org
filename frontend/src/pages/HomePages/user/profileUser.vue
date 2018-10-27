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
                        <div class="headline">John<span>Carter</span></div>
                        <br>
                    </div>
                </v-flex>
            </v-layout>
            <v-card light>
                    <v-layout justify-space-around>
                        <router-link to="/checkuser">สมัครสมาชิกทั่วไป</router-link>
                        <router-link to="/checkuser/regiProfileOrg">สมัครสมาชิกผู้จัดกิจกรรม</router-link>
                    </v-layout>
                <router-view></router-view>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
    export default {
  name: 'checkuser',
  components: {
  },
  data(){
      return {
        name: null,
        picture: null,
      }
  },
}
</script>
