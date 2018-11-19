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
            
            <!-- <v-card light>
                    <v-layout justify-space-around>
                        <router-link to="#">สมัครสมาชิกทั่วไป</router-link>
                        <router-link to="/#">สมัครสมาชิกผู้จัดกิจกรรม</router-link>
                        <router-link to="/#">สมัครสมาชิกผู้จัดกิจกรรม</router-link>
                    </v-layout>
                <router-view></router-view>
            </v-card> -->
          
          <v-card light>
            <v-layout row wrap>
              <v-navigation-drawer permanent>
              <v-toolbar flat>
                <v-list>
                  <v-list-tile >
                    <v-list-tile-title class="title text-sm-center">
                      เมนูการจัดการ
                    </v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-toolbar>

              <v-divider></v-divider>

              <v-list class="pt-0">
                <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
                  <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
            </v-layout>
          </v-card>
            
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: "checkuser",
  components: {},
  data() {
    return {
      items: [
        {
          path: "/profileOrg/addevent",
          title: "เพิ่มกิจกรรม",
          icon: "dashboard"
        },
        {
          path: "/",
          title: "กิจกรรม",
          icon: "question_answer"
        },
        {
          path: "/profileOrg/amound",
          title: "จำนวนผู้สมัคร",
          icon: "question_answer"
        }
      ],
      name: null,
      picture: null,
      right: null
    };
  }
};
</script>
