<template>
  <v-app dark>
    <section>
      <v-parallax :src="require('@/assets/img/background.jpg')" alt="background.jpg" height="630">
        <v-layout class="align-start justify-start row text-lg-right ma-3">
          <v-flex xs2>
            <v-card dark color="accent" class="circle50 pr-3 mx-2 elevation-20">
              <router-link to="/registerOrg" tag="div">
                <v-card-text>
                  <img :src="require('@/assets/img/businessman.png')" alt="businessman" height="35">
                  <span class="title ml-3">ลงทะเบียน</span>
                  <br>
                  <span class="text">ผู้จัดกิจกรรม</span>
                </v-card-text>
              </router-link>
            </v-card>
          </v-flex>
          &nbsp;
          <v-flex xs2>
            <v-card dark color="accent" class="circle50 pr-3 mx-2 elevation-20">
              <router-link to="/registerUser" tag="div">
                <v-card-text>
                  <img :src="require('@/assets/img/cycling.png')" alt="cycling" height="35">
                  <span class="title ml-4">ลงทะเบียน</span>
                  <br>
                  <span class="text">นักปั่น</span>
                </v-card-text>
              </router-link>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout class="align-end justify-start row text-lg-right pb-5 ma-4">
          <v-flex xs2>
            <v-card dark color="accent" class="circle50 elevation-20">
              <router-link to="/event" tag="div">
                <v-card-text>
                  <img :src="require('@/assets/img/mountain-bike.png')" alt="mountain-bike" height="35">
                  <span class="title ml-3">รายการแข่งขัน</span>
                </v-card-text>
              </router-link>
            </v-card>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      
    }),
    methods: {

    },
    props: {
      source: String
    }
  }
</script>

<style>
  .title{
  /* font-family: 'Niramit', serif !important; */
  font-family: 'Kanit', sans-serif !important;
}
</style>
