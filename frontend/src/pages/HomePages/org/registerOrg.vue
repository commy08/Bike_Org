<template>
  <v-app dark>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex xs8>
          <v-card>
            <v-card-title class="title blue-grey lighten-1">กรุณากรอกข้อมูลส่วนตัว</v-card-title>
            <v-card-text>
              <!-- <v-form ref="form"  v-model="org" lazy-validation> -->
              <v-flex>
                <v-text-field
                  v-model="form.OrgName"
                  :rulse="rulse.name"
                  label="ชื่อร้านผู้ประกอบการ"
                  required
                  outline
                ></v-text-field>

                <v-text-field
                  v-model="form.firstname"
                  :rulse="rulse.name"
                  label="ชื่อ"
                  outline
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.lastname"
                  :rulse="rulse.name"
                  label="นามสกุล"
                  outline
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.tel"
                  :rulse="rulse.rulseTel"
                  :counter="10"
                  :maxlength="10"
                  label="เบอร์มือถือ"
                  mask="phone"
                  required
                  outline
                ></v-text-field>

                <v-textarea
                  v-model="form.location"
                  :rulse="rulse.name"
                  label="ที่อยู่"
                  outline
                  required
                ></v-textarea>

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
              </v-flex>
              
              <v-layout row wrap>
                <v-flex xs8 sm8 v-for="n in range_bank" :key="n">
                  <v-select
                    :items="bank.bank_name"
                    v-model="form.banks.bankName[n-1]"
                    label="เลือกธนาคารการจ่ายเงิน"
                    outline
                  ></v-select>
                  <v-text-field v-model="form.banks.accountName[n-1]" label="ชื่อบัญชี" outline></v-text-field>
                  <v-text-field v-model="form.banks.accountNum[n-1]" label="เลขบัญชี" outline></v-text-field>
                </v-flex>
                <v-flex xs2 sm2>
                  <v-btn fab dark color="amber" @click="range_bank++">
                    <v-icon dark>add</v-icon>
                  </v-btn>
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
                      label="วันก่อตั้งร้าน"
                      prepend-icon="event"
                      readonly
                      outline
                    ></v-text-field>
                    <v-date-picker
                      ref="picker"
                      v-model="form.date"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    v-model="form.tradeNum"
                    :rulse="rulse.name"
                    :counter="13"
                    :maxlength="13"
                    label="เลขใบทะเบียนพาณิชย์"
                    required
                    outline
                  ></v-text-field>
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
                :rulse="[v => !!v || 'You must agree to continue!']"
                label="ยืนยันการสมัครสมาชิก"
                required
              ></v-checkbox>

              <v-btn
                color="blue darken-3"
                @click="addOrg();"
                :disabled="!formIsValid"
                type="submit"
              >ยืนยันการสมัคร</v-btn>
              <v-btn @click="clearForm()">ยกเลิก</v-btn>
              <!-- </v-form> -->
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
    range_bank: 1,
    address: {
      amphurs: [],
      provinces: [],
      all: []
    },
    bank: {
      bank_name: [],
      bank_id: [],
      all: []
    },
    form: {
      OrgName: null,
      firstname: null,
      lastname: null,
      tel: null,
      location: null,
      tradeNum: null,
      address: {
        amphurs: null,
        provinces: null
      },
      banks: {
        bankName: [],
        accountName: [],
        accountNum: []
      },
      picID: "",
      picORG: "",
      date: ""
    },
    Submit: false,
    menu: false,
    checkbox: false,

    titlePicOrg: "Image Upload",
    imageNameOrg: "",
    imageUrlOrg: "",
    imageFileOrg: "",

    titlePicID: "Image Upload",
    imageName: "",
    imageUrl: "",
    imageFile: "",

    rulse: {
      name: [v => !!v || "กรุณากรอกข้อมูล"],
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
    addOrg: async function() {
      // console.log("imageFile", this.imageFile);
      // this.form.date = this.date;
      // console.log(this.form);
      // console.log(this.picID)
      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token,
        form: this.form
      };
      // console.log(optionts)
      await userStores.dispatch("registerOrg", optionts);
      if (userStores.state.registerOrg.status) {
        alert("สมัครสมาชิกเสร็จสิ้น");
        router.push("/");
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
    getBank: async function() {
      if (!localStorage.access_token) router.push("/");
      // console.log("access_token")
      await userStores.dispatch("getBank");
      userStores.state.rs_getBank.forEach(element => {
        this.bank.bank_name.push(element.BankName);
      });
      this.bank.all = userStores.state.rs_getBank;
    },
    clearForm() {
      this.form = {
        OrgName: null,
        firstname: null,
        lastname: null,
        tel: null,
        location: null,
        address: {
          amphurs: null,
          provinces: null
        },
        sex: null,
        tradeNum: null,
        banks: {
          bankName: [],
          accountName: [],
          accountNum: []
        },
        picID: "",
        picORG: "",
        date: ""
      };
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
    pickFileOrg() {
      this.$refs.imageOrg.click();
    },
    onFilePickedOrg(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageNameOrg = files[0].name;
        if (this.imageNameOrg.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.onload = e => {
          this.form.picORG = e.target.result;
        };
        fr.addEventListener("load", () => {
          this.imageUrlOrg = fr.result;
          this.imageFileOrg = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageNameOrg = "";
        this.imageFileOrg = "";
        this.imageUrlOrg = "";
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
    await this.getBank();
  }
};
</script>