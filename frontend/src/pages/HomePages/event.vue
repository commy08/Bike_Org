<template>
  <v-content>
    <v-flex v-for="(event,index) in events" :key="index">
      <div>
        <flip-countdown deadline="2018-12-19 00:00:00"></flip-countdown>
      </div>
      <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div>
            <div class="display-1">{{ event.EventName }}</div>
            <span>ที่ไหนก็ได้, ประเทศไทย 04 กันยายน 2561 10:00 น.</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat dark class="display-2" @click="register_event()">สมัครแข่งขัน</v-btn>
        </v-card-actions>
      </v-card>&nbsp;
      <v-layout row wrap justify-space-around>
        <v-flex xs1>
          <v-subheader outline>เปิดรับสมัคร</v-subheader>
        </v-flex>
        <v-flex xs10>
          <v-text-field solo flat value="2019/12/1"></v-text-field>
        </v-flex>
      </v-layout>
      <v-flex>
        <v-card>
          <v-responsive :aspect-ratio="16/8">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-layout row wrap align-center justify-center>
                <v-card-title primary-title>
                  <div class="display-1">รูป</div>
                </v-card-title>
              </v-layout>
            </v-card>
            <v-card-media
              contain
              height="auto"
              src="https://actvariety.files.wordpress.com/2014/10/new-key1.jpg"
            ></v-card-media>&nbsp;
            <v-card color="#00AA8F" class="white--text">
              <v-layout row wrap align-center justify-center>
                <v-card-title primary-title>
                  <div class="display-1">รายละเอียด</div>
                </v-card-title>
              </v-layout>
            </v-card>
            <v-card-text>แข่งขันวันอาทิตย์ที่ 9 ธันวาคม 2561 บริเวณพื้นที่่สิงห์ปาร์ค เชียงราย</v-card-text>
            <v-card-text>
              การแข่งขันจักรยานเสือภูเขารายการเก่าแก่และใหญ่ที่สุดประจำปี ที่จัดขึ้นมาต่อเนื่องกว่า 17 ปี
              แข่งขันวันอาทิตย์ที่ 9 ธันวาคม 2561 ณ สิงห์ปาร์ค เชียงราย
            </v-card-text>
            <v-card-text>
              ในปีนี้เส้นทางแข่งขันจะพาทุกคนย้อนกลับไปเจอความธรรมชาติ และเส้นทางแข่งขันที่ใช้คำว่า "ครอสคันทรี่" ได้อย่างเต็มปากเต็มคำ
              Facebook Fanpage : Singha MTB Singha Park Chiangrai
            </v-card-text>
            <v-card-title>รายละเอียดค่าสมัครเข้าร่วมกิจกรรม</v-card-title>
            <v-card-text>
              สมัครร่วมกิจกรรม วันนี้ถึง 31 สิงหาคม 2561 ราคาพิเศษเพียง 900 บาท จากราคาปกติ 1,250 บาท รับเสื้อ Mountain Bike มูลค่า 800 บาท ความคุ้มครองประกันอุบัติเหตุ, อาหารกลางวันและเครื่องดื่ม พร้อมลุ้นเป็นผู้โชคดีรับของรางวัลจากผู้ให้การสนับสนุนต่างๆ อีกมากมาย
              สมัครร่วมกิจกรรมแบบ VIP วันนี้ถึง 31 ตุลาคม 2561 ราคา 1,500 บาท รับเสื้อ Mountain Bike มูลค่า 800 บาท ความคุ้มครองประกันอุบัติเหตุ, อาหารกลางวัน, เครื่องดื่ม และถ้วยรางวัลประจำสนามเฉพาะคนที่สมัคร VIP เท่านั้น พร้อมลุ้นเป็นผู้โชคดีรับของรางวัลจากผู้ให้การสนับสนุนต่างๆ อีกมากมาย
              และพิเศษ!!! สมัครร่วมกิจกรรมในราคา 1,850 บาท จากราคาปกติ 2,000 บาท รับเสื้อรุ่น Mountain Bike Pro ราคา 2,850 ฟรีทันที ความคุ้มครองประกันอุบัติเหตุ,อาหารกลางวันและเครื่องดื่ม พร้อมลุ้นเป็นผู้โชคดีรับของรางวัลจากผู้ให้การสนับสนุนต่างๆอีกมากมาย ภายในวันที่ 31 สิงหาคม นี้เท่านั้น
              สมัครร่วมกิจกรรมโดยไม่รับเสื้อ ราคา 500 บาท รับความคุ้มครองประกันอุบัติเหตุ, อาหารกลางวันและเครื่องดื่ม และลุ้นเป็นผู้โชคดีรับของรางวัลจากผู้ให้การสนับสนุนต่างๆ เช่นกัน
            </v-card-text>&nbsp;
            <v-card color="blue-grey darken-2" class="white--text">
              <v-layout row wrap align-center justify-center>
                <v-card-title primary-title>
                  <div class="display-1">วีดีโอ</div>
                </v-card-title>
              </v-layout>
            </v-card>
            <v-card>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/watch?v=Oo66dmPVEoo"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </v-card>&nbsp;
            <v-card color="#00AA8F" class="white--text">
              <v-layout row wrap align-center justify-center>
                <v-card-title primary-title>
                  <div class="display-1">รุ่นการแข่งขัน</div>
                </v-card-title>
              </v-layout>
            </v-card>
            <v-card-title>ประเภทการแข่งขัน แบ่งออกเป็น 3 Class ได้แก่</v-card-title>
            <v-card-text>- Class A : ประเภทแข่งขัน มืออาชีพ</v-card-text>
            <v-card-text>- Class B : ประเภทท่องเที่ยว มือสมัครเล่น</v-card-text>
            <v-card-text>- Class C : ประเภทเยาวชน ยุวชน</v-card-text>
            <v-card-text>
              และยังคงมีประเภทสำหรับนักกีฬาที่อยากสัมผัสบรรยากาศเส้นทางระยะสั้น ๆ ได้แก่
              - Class VIP (นักกีฬาที่ลงแข่งขันรุ่น VIP จะได้รับถ้วยเกียรติยศทุกคน)
            </v-card-text>&nbsp;
            <v-card color="blue-grey darken-2" class="white--text">
              <v-layout row wrap align-center justify-center>
                <v-card-title primary-title>
                  <div class="display-1">รางวัล</div>
                </v-card-title>
              </v-layout>
            </v-card>
            <v-card-title>เงินรางวัลประจำการแข่งขัน</v-card-title>
            <v-card-text>รางวัลชนะเลิศ ได้รับถ้วยเกียรติยศประจำการแข่งขัน เงินสด 5,000บาท</v-card-text>
            <v-card-text>รางวัลรองชนะเลิศอันดับที่ 1 ได้รับถ้วยเกียรติยศประจำการแข่งขัน เงินสด 4,000บาท</v-card-text>
            <v-card-text>รางวัลรองชนะเลิศอันดับที่ 2 ได้รับถ้วยเกียรติยศประจำการแข่งขัน เงินสด 3,000บาท</v-card-text>
            <v-card-text>รางวัลรองชนะเลิศอันดับที่ 3ได้รับถ้วยเกียรติยศประจำการแข่งขัน เงินสด 2,000บาท</v-card-text>
            <v-card-text>รางวัลรองชนะเลิศอันดับที่ 4ได้รับถ้วยเกียรติยศประจำการแข่งขัน เงินสด 1,000บาท</v-card-text>&nbsp;
          </v-responsive>
        </v-card>
      </v-flex>
    </v-flex>
  </v-content>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";
import FlipCountdown from "vue2-flip-countdown";

export default {
  components: { FlipCountdown },
  data: () => ({
    events: [],
    event_id: []
  }),
  methods: {
    getEvent: async function() {
      if (!this.$route.params.id) router.push("/");
      let options = {
        id: this.$route.params.id
      };
      await userStores.dispatch("getEvent", options);
      this.events = await userStores.state.event;
    },
    viewevent: async function(event) {
      window.location = "/event/" + event;
    },
    register_event: async function() {
      if (!localStorage.access_token.event) router.push("/");
      let options = {
        access_token: localStorage.access_token,
        event: localStorage.event
      };
      await userStores.dispatch("register_event", options);
      this.user = userStores.state.register_event;
    }
  },
  async mounted() {
    await this.getEvent();
  }
};
</script>