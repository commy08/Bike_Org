<template>
  <v-content fill-height justify-center fluid grid-list-xl>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">เพิ่มสร้างกิจกรรม</v-card-title>
      <v-card-text class="light">
        <v-flex>
          <v-text-field
            v-model="form.name"
            :rules="rules.name"
            label="ชื่อกิจกรรม"
            color="purple darken-2"
            required
            outline
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-textarea v-model="form.dateil" :rules="rules.dateil" color="teal" required outline>
            <v-flex slot="label">
              รายละเอียด
              <small>(รายละเอียดข้างต้น)</small>
            </v-flex>
          </v-textarea>
        </v-flex>
        <v-flex>
          <v-text-field
            v-model="form.location"
            :rules="rules.location"
            label="ที่อยู่"
            required
            outline
          ></v-text-field>

          <!-- <v-flex row fill-height justify-center>
            &nbsp;&nbsp;&nbsp;
            <v-select
              :items="address.provinces"
              v-model="form.address.provinces"
              label="จังหวัด"
              outline
            ></v-select>
            &nbsp;
            <v-select  
              :items="address.amphurs" 
              v-model="form.address.amphurs" 
              label="อำเภอ" 
              outline></v-select>
          </v-flex> -->

          <!-- start dateClose -->
          <v-flex row fill-height justify-center>
            &nbsp;&nbsp;&nbsp;
            <v-text-field
              v-model="form.dateClose"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateClose
                <small>(เริ่มต้น)</small>
              </v-flex>
            </v-text-field>&nbsp;
            <span>ถึง</span>
            &nbsp;
            <v-text-field
              v-model="form.dateClose"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateClose
                <small>(สิ้นสุด)</small>
              </v-flex>
            </v-text-field>
          </v-flex>
          <!-- end dateDeadline -->

          <!-- start dateDeadline -->
          <v-flex row fill-height justify-center>
            &nbsp;&nbsp;&nbsp;
            <v-text-field
              v-model="form.dateDeadline"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateDeadline</v-flex>
            </v-text-field>&nbsp;
            <span>ถึง</span>
            &nbsp;
            <v-text-field
              v-model="form.dateDeadline"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateDeadline</v-flex>
            </v-text-field>
          </v-flex>
          <!-- end dateClose -->
          
          <!-- start dateRace -->
          <v-flex row fill-height justify-center>
            &nbsp;&nbsp;&nbsp;
            <v-text-field
              v-model="form.dateRace"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateRace</v-flex>
            </v-text-field>&nbsp;
            <span>ถึง</span>
            &nbsp;
            <v-text-field
              v-model="form.dateRace"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateRace</v-flex>
            </v-text-field>
          </v-flex>
          <!-- end dateRace -->

          <v-flex xs12>
            <v-textarea v-model="form.rule" :rules="rules.name" color="teal" required outline>
              <v-flex slot="label">
                กฎกติกาการแข่งกัน
                <small>(รายละเอียดข้างต้น)</small>
              </v-flex>
            </v-textarea>
          </v-flex>

          <v-flex xs12>
            <v-textarea v-model="form.reward" :rules="rules.name" color="teal" required outline>
              <v-flex slot="label">รางวัลการแข่งขัน</v-flex>
            </v-textarea>
          </v-flex>

          <v-form>
            <v-flex row fill-height align-center justify-center>&nbsp;&nbsp;&nbsp;
              <v-text-field
                :rules="rules.name"
                color="teal"
                required
                outline
                v-model="form.payment.namebank"
              >
                <v-flex slot="label">
                  การจ่ายเงิน
                  <small>(ชื่อธนาคาร)</small>
                </v-flex>
              </v-text-field>&nbsp;&nbsp;
              <v-text-field
                :rules="rules.name"
                color="teal"
                required
                outline
                v-model="form.payment.nameaccount"
              >
                <v-flex slot="label">ชื่อบัญชี</v-flex>
              </v-text-field>&nbsp;&nbsp;
              <v-text-field
                :rules="rules.name"
                color="teal"
                required
                outline
                v-model="form.payment.numbank"
              >
                <v-flex slot="label">เลขบัญชี</v-flex>
              </v-text-field>
            </v-flex>
          </v-form>

          <v-flex xs6>
            <v-select v-model="form.type" :items="type" label="ประเภท" outline></v-select>
          </v-flex>

          <v-flex xs6>
            <Root v-bind:done="getFiles"></Root>
          </v-flex>

          <v-checkbox
            v-model="form.checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="ยืนยันการสมัครสมาชิก"
            required
          ></v-checkbox>

          <v-btn
            color="blue darken-3"
            @click="addEvent();"
            :disabled="!formIsValid"
            type="submit"
          >ยืนยันการสมัคร</v-btn>
          <v-btn @click="clearForm()">ยกเลิก</v-btn>
        </v-flex>
        <!-- </v-form> -->
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";
// import calendar from "./calendar";
import Root from "@/pages/Root";
import city from "@/pages/city";

export default {
  components: {
    // calendar,
    Root,
    city
  },

  data: () => ({
    address: {
      amphurs: [],
      provinces: [],
      all: []
    },

    form: {
      name: null,
      dateil: null,
      location: null,
      address: {
        amphurs: null,
        provinces: null
      },
      dateClose: null,
      dateDeadline: null,
      dateRace: null,
      type: null,
      rule: null,
      user_id: null,
      reward: null,
      payment: {
        namebank: null,
        nameaccount: null,
        numbank: null
      },
      status: null,
      imgs: []
    },
    type: ["จักรยานภูเขา", "จักรยานทางเรียบ"],
    rules: {
      name: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"],
      dateil: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"],
      location: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"]
    }
  }),
  methods: {
    getFiles(files) {
      this.form.imgs = files;
      // console.log(files);
    },
    addEvent: async function() {
      // this.form.date = this.date;
      // console.log(this.form)
      // console.log(this.user)
      // console.log(this.picID)
      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token,
        form: this.form
      };
      // console.log(optionts)
      await userStores.dispatch("postAddevent", optionts);
      alert(userStores.state.rs_addEvent.msg);
    },
    getAddress: async function() {
      // console.log(this.form)
      // console.log(this.user)
      // console.log(this.picID)
      if (!localStorage.access_token) router.push("/");
      // console.log("access_token")
      // console.log(optionts)
      await userStores.dispatch("getAddress");
      // this.address.amphurs = userStores.state.rs_getAddress.amphurs
      // this.address.provinces = userStores.state.rs_getAddress.provinces
      userStores.state.rs_getAddress.amphurs.forEach(element => {
        this.address.amphurs.push(element.amphur_name);
      });
      userStores.state.rs_getAddress.provinces.forEach(element => {
        this.address.provinces.push(element.province_name);
      });
      this.address.all = userStores.state.rs_getAddress;
    },
    clearForm() {
      // this.form = Object.assign({}, this.defaultForm);
      this.form = {
        name: null,
        dateil: null,
        location: null,
        address: {
          amphurs: null,
          provinces: null,
          all: []
        },
        dateClose: null,
        dateDeadline: null,
        dateRace: null,
        type: null,
        rule: null,
        user_id: null,
        reward: null,
        payment: null,
        status: null,
        pic: null
      };
    }
  },
  computed: {
    formIsValid() {
      return this.form.checkbox;
    }
  },
  async mounted() {
    await this.getAddress();
  }
};
</script>