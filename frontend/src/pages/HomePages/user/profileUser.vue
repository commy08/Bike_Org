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
                <v-card-actions>
                    <v-layout justify-space-around>
                        <router-link to="/_formprofile">ข้อมูลส่วนตัว</router-link>
                        <router-link to="/historys">ประวัติการสมัคร</router-link>
                    </v-layout>
                </v-card-actions>
                <router-view></router-view>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>

export default {
  data() {
    return {
      name: null,
      picture: null
    };
  }
};
</script>
