<template>
    <v-app dark>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
        <v-flex xs6 sm6>
          <v-card>
            <v-card-title class="title blue-grey lighten-1">กรุณากรอกข้อมูล</v-card-title>
              <v-card-text>
                <v-form ref="form" v-model="org" lazy-validation >
                  <v-text-field
                    v-model="form.OrgName"
                    :rules="orgnameRules"
                    label="ชื่อร้านผู้จัดกิจกรรม"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="form.firstname"
                    :rules="firstnameRules"
                    label="ชื่อ"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="form.lastname"
                    :rules="lastnameRules"
                    label="นามสกุล"
                    required
                    ></v-text-field>
                    <v-flex xs6>
                      <v-text-field
                        v-model="form.tel"
                        :rules="rulesTel"
                        :counter="10"
                        :maxlength="10"
                        label="เบอร์มือถือ"
                        mask="phone"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-text-field
                    v-model="form.address"
                    :rules="rulesAddress"
                    label="ที่อยู่"
                    required
                    ></v-text-field>
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
                      :rules="[v => !!v || 'Item is required']"
                      label="เพศ"
                      required
                      ></v-select>
                    </v-flex>
                    <v-flex xs6>
                    <v-text-field
                    v-model="form.tradeNum"
                    :rules="terdeNumRules"
                    :counter="13"
                    :maxlength="13"
                    label="เลขใบทะเบียนพาณิชย์"
                    mask="phone"
                    required
                    ></v-text-field>
                    </v-flex>
          
                    <v-flex xs9 class="text-xs-center text-sm-center text-md-center text-lg-center">
                      <img :src="imageUrl" height="150" v-if="imageUrl"/>
                      <v-text-field label="อัพโหลด : รูปบัตรประชาชน" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                      <input
                        type="file"
                        style="display: none"
                        ref="image"
                        accept="image/*"
                        @change="onFilePicked"
                      >
                    </v-flex>
                    <v-flex xs9 class="text-xs-center text-sm-center text-md-center text-lg-center">
                      <img :src="imageUrlOrg" height="150" v-if="imageUrlOrg"/>
                      <v-text-field label="อัพโหลด : รูปใบทะเบียนพาณิชย์" @click='pickFileOrg' v-model='imageNameOrg' prepend-icon='attach_file'></v-text-field>
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

                <!-- dialog -->
                  <v-dialog v-model="dialog" persistent max-width="650">
                    <v-btn slot="activator" :disabled="!valid" dark>ตกลง</v-btn>
                    <v-card>
                        <v-card-title class="headline blue-grey lighten-1">ยืนยันการสมัครสมาชิก</v-card-title>
                        <v-card-text>{{ form.OrgName }}</v-card-text>
                        <v-card-text>{{ form.firstname }}</v-card-text>
                        <v-card-text>{{ form.lastname }}</v-card-text>
                        <v-card-text>{{ form.tel }}</v-card-text>
                        <v-card-text>{{ form.address }}</v-card-text>
                        <v-card-text>{{ date }}</v-card-text>
                        <v-card-text>{{ form.sex }}</v-card-text>
                        <v-card-text>{{ form.tradeNum }}</v-card-text>
                        <v-card-text>
                          <img :src="form.picID" height="150"/>
                        </v-card-text>
                        <v-card-text>
                          <img :src="form.picORG" height="150"/>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-3" @click="Submit();" @click.native="dialog = false">ยืนยันการสมัคร</v-btn>
                        </v-card-actions>
                      </v-card>
                  </v-dialog>
                <!-- end dialog -->
                
                <v-btn @click="clear">ยกเลิก</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm6 >
        <v-card>
          <v-card-title class="title blue-grey lighten-1">
            เงื่อนไขการสมัคร
          </v-card-title>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
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
    dialog: false,
    form: {
      OrgName: null,
      firstname: null,
      lastname: null,
      tel: null,
      address: null,
      sex: null,
      terdeNum: null,
      picID : '',
      picORG : '',
      checkbox: null,
      date: null
    },
    submit: false,

    titlePicOrg: "Image Upload",
    imageNameOrg: "",
    imageUrlOrg: "",
    imageFileOrg: "",

    titlePicID: "Image Upload",
    imageName: "",
    imageUrl: "",
    imageFile: "",

    valid: true,
    name: "",
    checkbox: false,
    birthday: null,
    menu: false,
    orgnameRules: [v => !!v || "ชื่อร้านผู้จัดกิจกรรม"],
    firstnameRules: [v => !!v || "กรุณากรอกชื่อ"],
    lastnameRules: [v => !!v || "กรุณากรอกนามสกุล"],
    sex: null,
    items: ["male", "female"],
    tel: "",
    address: "",
    rulesTel: [
      v => !!v || "กรุณากรอกเบอร์โทรศัพท์",
      v => (v && v.length <= 10) || "กรุณาตรวจกรอกข้อมูลให้ถูกต้อง"
    ]
  }),
  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    Submit: async function() {
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
      await userStores.dispatch("registerOrg", optionts);
      if (userStores.state.registerOrg.status == true) {
        router.push("/");
        // alert("success")
      } else if (userStores.state.registerOrg.status == false) {
        router.push("/logout");
      }
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
  }
};
</script>