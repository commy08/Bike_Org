<template>
  <v-content fill-height justify-center fluid grid-list-xl>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">เพิ่มสร้างกิจกรรม</v-card-title>
      <v-card-text class="light">
        <v-flex>
          <v-text-field
            v-model="form.EventName"
            :rules="rules.name"
            label="ชื่อกิจกรรม*"
            color="purple darken-2"
            required
            outline
          ></v-text-field>
          <v-textarea v-model="form.detail" :rules="rules.detail" color="teal" required outline>
            <v-flex slot="label">
              รายละเอียด*
              <small>(รายละเอียดข้างต้น)</small>
            </v-flex>
          </v-textarea>
          <v-text-field name="youtube" v-model="form.youtube" outline>
            <v-flex slot="label">
              ลิงค์วิดีโอ
              <small>(วีดีโอแนะนำกิจกรรม)</small>
            </v-flex>
          </v-text-field>
          <v-textarea v-model="form.location" :rules="rules.location" required outline>
            <v-flex slot="label">ที่อยู่การแข่งขัน</v-flex>
          </v-textarea>
        </v-flex>

        <v-layout align-center justify-center wrap>
          <v-flex xs6 sm6>
            <v-select
              :items="address.provinces"
              v-model="form.address.provinces"
              label="จังหวัด"
              outline
            ></v-select>
          </v-flex>

          <v-flex xs6 sm6>
            <v-select :items="address.amphurs" v-model="form.address.amphurs" label="อำเภอ" outline></v-select>
          </v-flex>
        </v-layout>

        <v-layout column wrap>
          <!-- start dateClose -->
          <v-flex>
            <v-text-field
              v-model="form.dateClose"
              :rules="rules.name"
              color="teal"
              required
              outline
              type="date"
            >
              <v-flex slot="label">dateCloses</v-flex>
            </v-text-field>
          </v-flex>
          <!-- end dateDeadline -->
          <!-- start dateDeadline -->
          <v-flex>
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
          <v-flex>
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
          </v-flex>
          <!-- end dateRace -->
        </v-layout>
        <v-flex xs12>
          <v-textarea v-model="form.rule" :rules="rules.name" color="teal" required outline>
            <v-flex slot="label">
              กฎกติกาการการแข่งกัน*
              <small>(รายละเอียดข้างต้น)</small>
            </v-flex>
          </v-textarea>
        </v-flex>

        <v-flex xs12>
          <v-textarea v-model="form.reward" :rules="rules.name" color="teal" required outline>
            <v-flex slot="label">รางวัลการแข่งขัน*</v-flex>
          </v-textarea>
        </v-flex>

        <div v-for="n in addField" :key="n">
          <v-layout align-center>
            <v-flex lg6>
              <v-text-field v-model="division.DivisionName[n-1]" color="teal" required outline>
                <v-flex slot="label">ประเภทและรุ่นการแข่งขัน*</v-flex>
              </v-text-field>
            </v-flex>&nbsp;
            <v-flex lg6>
              <v-select :items="items" v-model="division.sex[n-1]" label="เพศ*" outline></v-select>
            </v-flex>
          </v-layout>

          <v-layout justify-space-between>
            <v-flex xs3>
              <v-text-field v-model="division.ageMin[n-1]" label="ช่วงอายุ" outline></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-text-field v-model="division.ageMax[n-1]" label="ช่วงอายุ" outline></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-text-field v-model="division.cost[n-1]" label="ค่าสมัคร" outline></v-text-field>
            </v-flex>
          </v-layout>
          <hr>
        </div>

        <v-layout justify-end>
          <v-btn lg12 fab dark color="amber" @click="addField++">
            <v-icon dark>add</v-icon>
          </v-btn>
        </v-layout>

        <v-flex xs5>
          <v-select v-model="form.type" :items="type" label="ประเภท*" outline></v-select>
        </v-flex>

        <v-flex>
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
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";
import Root from "@/pages/Root";
import city from "@/pages/city";

export default {
  components: {
    Root,
    city
  },

  data: () => ({
    addField: 1,
    address: {
      amphurs: [],
      provinces: [],
      all: []
    },
    items: ["เพศชาย", "เพศหญิง"],
    division: {
      DivisionName: [],
      ageMax: [],
      ageMin: [],
      sex: [],
      cost: []
    },
    form: {
      EventName: null,
      detail: null,
      youtube: null,
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
      reward: null,
      divisions: [],
      user_id: null,
      status: null,
      imgs: []
    },

    type: ["จักรยานภูเขา", "จักรยานทางเรียบ"],
    rules: {
      name: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"],
      detail: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"],
      location: [val => (val || "").length > 0 || "กรุกรอกข้อมูล"]
    }
  }),
  methods: {
    getFiles(files) {
      this.form.imgs = files;
      // console.log(files);
    },
    addEvent: async function() {
      for (let index = 0; index < this.division.DivisionName.length; index++) {
        let tmp = {
          DivisionName: this.division.DivisionName[index],
          ageMax: this.division.ageMax[index],
          ageMin: this.division.ageMin[index],
          sex: this.division.sex[index],
          cost: this.division.cost[index]
        };
        this.form.divisions.push(tmp);
      }
      if (
        this.form.EventName == null ||
        this.form.detail == null ||
        this.form.youtube == null ||
        this.form.location == null ||
        this.form.address.amphurs == null ||
        this.form.address.provinces == null ||
        this.form.dateClose == null ||
        this.form.dateDeadline == null ||
        this.form.dateRace == null ||
        this.form.type == null ||
        this.form.rule == null ||
        this.form.reward == null ||
        this.form.divisions == null ||
        this.form.imgs == null
      ) {
        return alert("โปรดกรอกข้อมูลที่อยู่เว็บไซต์ให้ถูกต้อง");
      }

      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token,
        form: this.form
      };
      // console.log(optionts)
      await userStores.dispatch("postAddevent", optionts);
      alert(userStores.state.rs_addEvent.msg);
      router.push("/");
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
      this.form = {
        EventName: null,
        detail: null,
        youtube: null,
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
        reward: null,
        divisions: [],
        user_id: null,
        status: null,
        imgs: []
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