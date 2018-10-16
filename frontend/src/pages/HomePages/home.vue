<template>
  <v-app dark>
    <section>
      <v-parallax :src="require('@/assets/img/background.jpg')" alt="background.jpg" height="600">
          <!-- <v-layout column align-center justify-center class="black-text">
              <img src="@/assets/logo.png" alt="logo" height="200">
          </v-layout> -->
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap align-center>
        <v-flax xs12 class="my-5">
          <div class="text-xs-center">
            <h2 class="headline">รายการแแนะนำ</h2>
          </div>
        </v-flax>
        <v-flax xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img src="http://www.up.ac.th/FileUpload/0fupcjxb.jpg" alt="Vuetify.js" height="150">
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">University of Phayao Game</div>
                </v-card-title>
                <v-card-text>
                  เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                  และจากจักรยานเสือหมอบ 2 เหรียญ
                </v-card-text>
              </v-card>
              </v-flex>

              <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img src="http://www.up.ac.th/FileUpload/19092991_1439724842740262_869443587918005891_o.jpg" alt="Vuetify.js" height="150">
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">University of Phayao Game</div>
                </v-card-title>
                <v-card-text>
                  ปิดฉากอย่างเป็นทางการแล้วสำหรับ กีฬาจักรยาน มหาวิทยาลัยพะเยาได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ และจากจักรยานเสือหมอบ 2 เหรียญ
                </v-card-text>
              </v-card>
              </v-flex>

              <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img src="https://siamrath.co.th/files/styles/750/public/img/20170604/1c90293523840096fcb46ebb93da98ddddd1cc96dd531d5174f151a7819f9c54.JPG?itok=YaeBX6GC" alt="Vuetify.js" height="150">
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Sport Tourism Bike 4 All</div>
                </v-card-title>
                <v-card-text>
                  ตามที่สมาคมกีฬาจักรยานแห่งประเทศไทย ในพระบรมราชูปถัมภ์ ร่วมกับ จังหวัดนครนายก 
                  จัดการแข่งขันจักรยานปั่นเพื่อชีวิต “Sport Tourism Bike 4 All”
                </v-card-text>
              </v-card>
              </v-flex>

            </v-layout>
          </v-container>
        </v-flax>
      </v-layout>
    </section>

    <section>
      <v-parallax src="https://www.filmhousecinema.com/sites/filmhousecinema.com/files/shows/2017/Mountain-3.jpg" alt="background">
          <v-layout column wrap align-center >
            <v-flax xs12 class="my-5">
              <div class="text-xs-center">
                <h2 class="headline">เกี่ยวกับ BIKE - ORGANIZER</h2>
              </div>
            </v-flax>
          </v-layout>
            <v-flax xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center md6>
                  <v-flex xs12 md6>
                    <div class="text-xs-center elevation-0 transparent" >
                      <v-avatar size="125px">
                        <img class="img-circle elevation-24 mb-5" src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg">
                      </v-avatar>
                      <div class="headline">John <span style="font-weight:bold">Doe</span></div>
                        <div class="subheading text-xs-center pt-2 pb-5">Lorem ipsum dolor sit amet</div>
                        <!-- <v-layout justify-space-between>
                          <a href="javascript:;" class="body-2">Home</a>
                          <a href="javascript:;" class="body-2">About</a>
                          <a href="javascript:;" class="body-2">Github</a>
                          <a href="javascript:;" class="body-2">Other</a>
                        </v-layout> -->
                    </div>
                  </v-flex>

                  <v-flex xs12 md6>
                    <div class="text-xs-center elevation-0 transparent" >
                      <v-avatar size="125px">
                        <img class="img-circle elevation-24 mb-5" src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg">
                      </v-avatar>
                      <div class="headline">John <span style="font-weight:bold">Doe</span></div>
                        <div class="subheading text-xs-center pt-2 pb-5">Lorem ipsum dolor sit amet</div>
                        <!-- <v-layout justify-space-between>
                          <a href="javascript:;" class="body-2">Home</a>
                          <a href="javascript:;" class="body-2">About</a>
                          <a href="javascript:;" class="body-2">Github</a>
                          <a href="javascript:;" class="body-2">Other</a>
                        </v-layout> -->
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flax>
      </v-parallax>
    </section>

  </v-app>
</template>
