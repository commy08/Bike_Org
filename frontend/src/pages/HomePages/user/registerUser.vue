<template>
  <v-app dark>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap justify-center>
        <!-- <v-flex xs8>
          <v-card>
            <v-card-title class="title blue-grey lighten-1">กรุณากรอกข้อมูลส่วนตัว</v-card-title>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field v-model="form.firstname" :rules="rules.name" label="ชื่อ" required></v-text-field>
                <v-text-field v-model="form.lastname" :rules="rules.name" label="นามสกุล" required></v-text-field>
                <v-flex xs6>
                  <v-text-field
                    v-model="form.tel"
                    :rules="rules.rulesTel"
                    :counter="10"
                    label="เบอร์มือถือ"
                    mask="phone"
                    :maxlength="10"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field v-model="form.address" :rules="rules.name" label="ที่อยู่" required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-select :items="address.provinces" label="จังหวัด" outline></v-select>
                  <v-select :items="address.amphurs" label="อำเภอ" outline></v-select>
                </v-flex>

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
                      v-model="date"
                      label="วันเกิด"
                      :rules="rules.name"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>

                    <v-date-picker
                      ref="picker"
                      v-model="date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs3>
                        <v-select
                        v-model="form.sex"
                        :items="items"
                        :rules="[v => !!v || 'กรุณาเลือกเพศ']"
                        label="เพศ"
                        required
                        ></v-select>
                </v-flex>
                <v-flex
                  xs7
                  class="text-xs-center text-sm-center text-md-center text-lg-center"
                  v-model="picID"
                >
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
                  :rules="[v => !!v || 'กรุณาคลิกยินยอมการสมัครสมาชิก']"
                  label="ยืนยันการสมัครสมาชิก"
                  required
                ></v-checkbox>

                <v-btn color="blue darken-3" @click="Submit();">ยืนยันการสมัคร</v-btn>
                <v-btn @click="clear">ยกเลิก</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex> -->


        <v-flex xs8>
          <v-card>
            <v-card-title class="title blue-grey lighten-1">กรุณากรอกข้อมูล</v-card-title>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field v-model="form.firstname" :rules="rules.name" label="ชื่อ" required></v-text-field>
                <v-text-field v-model="form.lastname" :rules="rules.name" label="นามสกุล" required></v-text-field>
                <v-flex xs6>
                  <v-text-field
                    v-model="form.tel"
                    :rules="rules.rulesTel"
                    :counter="10"
                    label="เบอร์มือถือ"
                    mask="phone"
                    :maxlength="10"
                    required
                  ></v-text-field>
                </v-flex>
                <v-text-field v-model="form.address" :rules="rulse.name" label="ที่อยู่" required></v-text-field>
                <v-flex>
                  <v-select :items="address.provinces" label="จังหวัด" outline></v-select>
                  <v-select :items="address.amphurs" label="อำเภอ" outline></v-select>
                </v-flex>

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
                      v-model="date"
                      label="วันเกิด"
                      :rules="rules.name"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker
                      ref="picker"
                      v-model="date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    v-model="form.tradeNum"
                    :rules="rulse.name"
                    :counter="13"
                    :maxlength="13"
                    label="เลขใบทะเบียนพาณิชย์"
                    required
                  ></v-text-field>
                </v-flex>

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
                <v-flex xs9 class="text-xs-center text-sm-center text-md-center text-lg-center">
                  <img :src="imageUrlOrg" height="150" v-if="imageUrlOrg">
                  <v-text-field
                    label="อัพโหลด : รูปใบทะเบียนพาณิชย์"
                    @click="pickFileOrg"
                    v-model="imageNameOrg"
                    prepend-icon="attach_file"
                  ></v-text-field>
                  <input
                    type="file"
                    style="display: none"
                    ref="imageOrg"
                    accept="imageOrg/*"
                    @change="onFilePickedOrg"
                  >
                </v-flex>

                <v-checkbox
                  v-model="form.checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="ยืนยันการสมัครสมาชิก"
                  required
                ></v-checkbox>

                <v-btn
                  color="blue darken-3"
                  @click="addUser();"
                  :disabled="!formIsValid"
                  type="submit"
                >ยืนยันการสมัคร</v-btn>
                <v-btn @click="clear">ยกเลิก</v-btn>
              </v-form>
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
  components: {},
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
      address: null,
      amphur_id: null,
      province_id: null,
      sex: null,
      picID: "",
      date: null
    },
    submit: false,
    menu: false,
    checkbox: false,

    titlePicID: "Image Upload",
    imageName: "",
    imageUrl: "",
    imageFile: "",

    items: ["male", "female"],

    rulse: {
      name: [v => !!v || "กรุณากรอกชื่อ"],
      rulesTel: [
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
    addUser: async function() {
      this.form.date = this.date;
      // console.log(this.form)
      // console.log(this.user)
      // console.log(this.picID)
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
    clear() {
      this.$refs.form.reset();
    },
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
          fr.onload = e => {
            this.form.picID = e.target.result;
            // console.log(this.form.picID);
          };
          this.imageData = e.target.result;
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