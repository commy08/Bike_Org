<template>
  <v-app>
    <v-content>
      <v-card light>
        <v-layout wrap>
          <v-navigation-drawer permanent>
            <v-toolbar flat>
              <v-list-tile-title class="title text-sm-center">เมนูการจัดการ</v-list-tile-title>
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
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        path: "/admin/ckuser",
        title: "กิจกรรม",
        icon: "question_answer"
      }
    ]
  }),
  methods: {}
};
</script>