<template>
  <v-app dark>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex xs8>
          <v-card>
            <v-card-title class="title blue-grey lighten-1">กรุณากรอกข้อมูลส่วนตัว</v-card-title>
            <v-card-text>
              <v-flex>
                <v-text-field
                  v-model="form.firstname"
                  :rulse="rulse.name"
                  label="ชื่อ"
                  required
                  outline
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.lastname"
                  :rulse="rulse.name"
                  label="นามสกุล"
                  required
                  outline
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.tel"
                  :rulse="rulse.rulseTel"
                  :counter="10"
                  label="เบอร์มือถือ"
                  mask="phone"
                  :maxlength="10"
                  required
                  outline
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-textarea
                  v-model="form.location"
                  :rulse="rulse.name"
                  label="ที่อยู่"
                  required
                  outline
                ></v-textarea>
              </v-flex>
              <v-layout row wrap>
                <v-flex xs6 sm6>
                  <v-select
                    :items="address.provinces"
                    v-model="form.address.provinces"
                    label="จังหวัด"
                    outline
                  ></v-select>
                </v-flex>
                <v-flex xs6 sm6>
                  <v-select
                    :items="address.amphurs"
                    v-model="form.address.amphurs"
                    label="อำเภอ"
                    outline
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 lg6>
                  <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    v-model="menu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="form.date"
                      label="วันเกิด"
                      :rulse="rulse.name"
                      readonly
                      outline
                    ></v-text-field>

                    <v-date-picker
                      ref="picker"
                      v-model="form.date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      locale="en-us"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs3>
                  <v-select
                    v-model="form.sex"
                    :items="items"
                    :rulse="[v => !! v || 'กรุณาเลือกเพศ']"
                    label="เพศ"
                    required
                    outline
                  ></v-select>
                </v-flex>
              </v-layout>

              <v-flex xs9 class="text-xs-center text-sm-center text-md-center text-lg-center">
                <img :src="imageUrl" height="150" v-if="imageUrl">
                <v-text-field
                  label="อัพโหลด : รูปบัตรประชาชน"
                  @click="pickFile"
                  v-model="imageName"
                  prepend-icon="attach_file"
                ></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked"
                >
              </v-flex>
              <v-checkbox
                v-model="form.checkbox"
                :rulse="[v => !!v || 'You must agree to continue!']"
                label="ยืนยันการสมัครสมาชิก"
                required
              ></v-checkbox>

              <v-btn
                color="blue darken-3"
                @click="addUser();"
                :disabled="!formIsValid"
                type="submit"
              >ยืนยันการสมัคร</v-btn>
              <v-btn @click="clearForm">ยกเลิก</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  data: () => ({
    address: {
      amphurs: [],
      provinces: [],
      all: []
    },
    form: {
      firstname: null,
      lastname: null,
      tel: null,
      location: null,
      address: {
        amphurs: null,
        provinces: null
      },
      sex: null,
      picID: "",
      date: ""
    },
    menu: false,
    checkbox: false,

    titlePicID: "Image Upload",
    imageName: "",
    imageUrl: "",
    imageFile: "",

    items: ["เพศชาย ", "เพศหญิง"],

    rulse: {
      name: [v => !!v || "กรุณากรอกชื่อ"],
      rulseTel: [
        v => !!v || "กรุณากรอกเบอร์โทรศัพท์",
        v => (v && v.length <= 10) || "กรุณาตรวจกรอกข้อมูลให้ถูกต้อง"
      ]
    }
  }),
  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.onload = e => {
          this.form.picID = e.target.result;
        };
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    getFiles(files) {
      this.form.imgs = files;
      // console.log(files);
    },
    addUser: async function() {
      // console.log(this.form)
      // console.log(this.user)
      // console.log(this.date)
      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token,
        form: this.form
      };
      // console.log(optionts)
      await userStores.dispatch("registerUser", optionts);
      // console.log(userStores.state.registerUser)
      if (userStores.state.registerUser.status) {
        alert("สมัครสมาชิกเสร็จสิ้น");
        router.go("/");
      } else if (userStores.state.registerUser.status == 400) {
        router.push("/logout");
      }
    },
    getAddress: async function() {
      // console.log(this.form)
      // console.log(this.user)
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

      // console.log(this.address.all)
    },
    clearForm() {
      this.form = {
        firstname: null,
        lastname: null,
        tel: null,
        location: null,
        address: {
          amphurs: null,
          provinces: null
        },
        sex: null,
        picID: "",
        date: ""
      };
    },
    save(date) {
      this.$refs.menu.save(date);
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