<template>
<v-app dark>
    <v-container >
        <section>
            <v-carousel>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src">
                </v-carousel-item>
            </v-carousel>
        <span></span>
        <span></span>
        <span></span>
        <v-layout wrap align-center>
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout align-space-around justify-center column reverse>
                        <v-card class="elevation-1">
                            <br>
                            <v-flax xs4>
                                <h2>University of Phayao Game</h2>
                                <img src="http://www.up.ac.th/FileUpload/0fupcjxb.jpg" alt="Vuetify.js" height="150">
                                
                            </v-flax>
                            <v-card-text>
                            เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                            และจากจักรยานเสือหมอบ 2 เหรียญ
                            </v-card-text>
                            <v-btn left>สมัครเข้าร่วมรายการ</v-btn>
                            <v-btn left>รายละเอียด</v-btn>
                        </v-card>
                        <br>
                        <v-card class="elevation-1">
                            <br>
                            <v-flax xs4>
                                <h2>University of Phayao Game</h2>
                                <img src="http://www.up.ac.th/FileUpload/0fupcjxb.jpg" alt="Vuetify.js" height="150">
                                
                            </v-flax>
                            <v-card-text>
                            เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                            และจากจักรยานเสือหมอบ 2 เหรียญ
                            </v-card-text>
                            <v-btn left>สมัครเข้าร่วมรายการ</v-btn>
                            <v-btn left>รายละเอียด</v-btn>
                        </v-card>
                        <br>
                        <v-card class="elevation-1">
                            <br>
                            <v-flax xs4>
                                <h2>University of Phayao Game</h2>
                                <img src="http://www.up.ac.th/FileUpload/0fupcjxb.jpg" alt="Vuetify.js" height="150">
                                
                            </v-flax>
                            <v-card-text>
                            เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                            และจากจักรยานเสือหมอบ 2 เหรียญ
                            </v-card-text>
                            <v-btn left>สมัครเข้าร่วมรายการ</v-btn>
                            <v-btn left>รายละเอียด</v-btn>
                        </v-card>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
        </section>
    </v-container>
</v-app>
</template>






<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://tiewtiddin.com/wp-content/uploads/2018/05/%E0%B8%A1%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%81%E0%B8%A5-2561-1-627x355.jpg'
          },
          {
            src: 'https://i.ytimg.com/vi/biFAqxjFxgg/maxresdefault.jpg'
          },
          {
            src: 'http://thaibike.org/wp-content/uploads/2016/11/y2z848.jpg'
          }
        ]
      }
    },
  }
</script>