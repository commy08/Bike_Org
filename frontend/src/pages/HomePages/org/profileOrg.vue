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
                        <div class="headline">John<span>&nbsp;Carter</span></div>
                        <br>
                    </div>
                </v-flex>
            </v-layout>
          
          <v-card light>
            <v-layout wrap>
              <v-navigation-drawer permanent>
              <v-toolbar flat>
                <v-list-tile-title class="title text-sm-center">
                  เมนูการจัดการ
                </v-list-tile-title>
              </v-toolbar>

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

            <router-view></router-view>
            <router-view name="start"></router-view>
            

            
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
      form:{
        name: null,
        picture: null,
        right: null,
      },
      items: [
        {
          path: "/profileorg/active",
          title: "กิจกรรม",
          icon: "question_answer"
        },
        {
          path: "/profileorg/addevent",
          title: "เพิ่มกิจกรรม",
          icon: "dashboard"
        },
        {
          path: "/profileorg/amound",
          title: "จำนวนผู้สมัคร",
          icon: "question_answer"
        }
      ]
    };
  }
};
</script>
