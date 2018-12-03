<template>
  <v-content fill-height justify-center fluid grid-list-xl>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">เพิ่มสร้างกิจกรรม</v-card-title>
      <v-card-text class="light">
        <!-- <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Registration successful!</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar> -->
        <!-- <v-form ref="form" @submit.prevent="submit" lazy-validation> -->
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
              <v-flex slot="label">รายละเอียด
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
            <v-flex xs6>
              <v-select :items="address.provinces" label="จังหวัด" outline></v-select>
              <v-select :items="address.amphurs" label="อำเภอ" outline></v-select>
            </v-flex>
            <v-flex xs6>
            <v-select
              v-model="form.type"
              :items="type"
              label="ประเภท"
              outline
            ></v-select>
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
            <!-- <v-btn @click="clear">ยกเลิก</v-btn> -->
          </v-flex>
        <!-- </v-form> -->
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  data: () => ({
    address:{
      amphurs: [],
      provinces: [],
      all: []
    },
    form: {
      name: null,
      dateil: null,
      location: null,
      amphur_id: null,
      province_id: null,
      dateClose: null,
      dateDeadline: null,
      dateRace: null,
      type: null,
      rule: null,
      user_id: null,
      reward: null,
      payment: null,
      status: null
    },
    type: ["mountain", "roadbike"],
    rules: {
      name: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"],
      dateil: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"],
      location: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"]
    },
  }),
  methods: {
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
      console.log(optionts)
      await userStores.dispatch("postAddevent", optionts);
      alert(userStores.state.rs_addEvent.msg)
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
        this.address.amphurs.push(element.amphur_name)
      });
      userStores.state.rs_getAddress.provinces.forEach(element => {
        this.address.provinces.push(element.province_name)
      });
      this.address.all = userStores.state.rs_getAddress
    },
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    // submit() {
    //   this.snackbar = true;
    //   this.resetForm();
    // }
  },
  computed: {
    formIsValid() {
      return this.form.checkbox;
    }
  },
  async mounted() {
    await this.getAddress();
  },
};
</script>