<template>
  <v-content>
    <v-toolbar>
      <v-toolbar-title class="font-weight-black font-italic headline">
        <router-link to="/" tag="div">
          <span class="title ml-3 mr-5">BIKE&nbsp;
            <span class="text">ORGANIZE</span>
          </span>
        </router-link>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-icon="search"
        label="ค้นหารายการแข่งขัน..."
        value="ค้นหา"
      ></v-text-field>
      <v-spacer></v-spacer>

      <a v-if="user.id == null" :href="loginline">
        <v-btn round class="light-green accent-4">เข้าสู่ระบบผ่าน Line</v-btn>
      </a>

      <v-menu v-else-if="user.type == 'user'" offset-y>
        <v-btn color="light-green accent-4" slot="activator">{{ user.firstname }}</v-btn>
        <v-list>
          <v-list-tile v-for="(item, index) in itemsUser" :key="index">
            <v-list-tile-title>
              <a class="btn" color="light-green accent-4" :href="item.link">{{ item.title }}</a>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu v-else-if="user.type == 'org'" offset-y>
        <v-btn dark color="light-green accent-4" slot="activator">{{ user.firstname }}</v-btn>
        <v-list>
          <v-list-tile v-for="(item, index) in itemsOrg" :key="index">
            <v-list-tile-title>
              <a class="btn" color="light-green accent-4" :href="item.link">{{ item.title }}</a>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu v-else offset-y>
        <v-btn dark color="light-green accent-4" slot="activator">{{ user.firstname }}</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <a class="btn" color="light-green accent-4" @click="logout()">ออกจากระบบ</a>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-content>
</template>



<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  data: () => ({
    isLogin: true,
    loginline: null,
    user: {},
    itemsUser: [
      { title: "ข้อมูลส่วนตัว", link: "/profileuser" },
      { title: "แก้ไขข้อมูล", link: "/edit" },
      { title: "ออกจากระบบ", link: "/logout" }
    ],
    itemsOrg: [
      { title: "ข้อมูลส่วนตัว", link: "/profileorg" },
      { title: "แก้ไขข้อมูล", link: "/edit" },
      { title: "ออกจากระบบ", link: "/logout" }
    ]
  }),
  methods: {
    LoadLinklinelogin: async function() {
      await userStores.dispatch("getLoginLine");
      this.loginline = userStores.state.lineloginline.url;
      // console.log(userStores.state.lineloginline.url);
    },
    getUser: async function() {
      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token
      };
      await userStores.dispatch("getUser", optionts);
      // console.log(userStores.state.user.user);
      // console.log(userStores.state.user.status);
      if (userStores.state.user.status == 200) {
        this.user = userStores.state.user;
      } else if (userStores.state.user.status == 400) {
        router.push("/logout");
      }
      this.user = userStores.state.user;
      if (this.user.type == "r") {
        this.$router.push("/");
      } else if (this.user.type == "o") {
        this.$router.push("/");
      }
    },
    logout() {
      this.$router.push("/logout");
      location.reload();
    }
  },
  async mounted() {
    await this.LoadLinklinelogin();
    await this.getUser();
    // console.log(this.loginline);
  }
};
</script>