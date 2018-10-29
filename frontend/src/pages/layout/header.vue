<template>
        <section>
            <v-toolbar>
                <v-toolbar-title  class="font-weight-black font-italic headline" style="width:250px">
                     <router-link to="/" type="icon">BIKE - ORGENIZE</router-link>
                </v-toolbar-title>
                    <v-text-field 
                        flat 
                        solo-inverted 
                        hide-details 
                        prepend-inner-icon="search" 
                        label="Search"
                        class="hidden-sm-and-down">
                    </v-text-field>
                <router-link to="/event" tag="รายการแข่งขัน">
                    <v-btn class="blue lighten-1">รายการแข่งขัน</v-btn>
                </router-link>
                <a :href="loginline">
                    <v-btn  class="light-green accent-4">เข้าสู่ระบบผ่าน Line</v-btn>                   
                </a>

                <!-- <v-menu offset-y>
                    <v-btn dark color="light-green accent-4" slot="activator">Welcome</v-btn>
                    <v-list>
                        <v-list-tile
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-tile-title ><a class="btn" color="light-green accent-4" :href="item.link">{{ item.title }}</a></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu> -->

            </v-toolbar>
        </section>
        
</template>



<script>

import userStores from '@/stores/userStores'
import router from "@/router";

export default {
  data: () => ({
    isLogin: true,
    loginline: null,
    
    items: [
      { title: 'ข้อมูลส่วนตัว',link: '/profile' },
      { title: 'แก้ไขข้อมูล',link: '/edit' },
      { title: 'ออกจากระบบ',link: '/logout' }
    ],
  }),
   methods: {
    LoadLinklinelogin: async function() {
      await userStores.dispatch('getLoginLine')
        this.loginline = userStores.state.lineloginline.url;
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
        this.user = userStores.state.user.user;
      } else if (userStores.state.user.status == 400) {
        router.push("/logout");
      }
    },
  },
  async mounted () {
    await this.LoadLinklinelogin()
    // console.log(this.loginline);
  },
};
</script>