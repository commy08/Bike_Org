<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
          </v-layout>
          <v-list-tile v-else :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      fixed
    > 
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title  class="font-weight-black font-italic headline" style="width:250px">
        <router-link to="/" tag="div">BIKE - ORGANIZE</router-link>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn  class="light-green accent-4">เข้าสู่ระบบผ่าน Line</v-btn>
    </v-toolbar>
    <v-btn
      fab
      bottom
      right
      color="blue"
      dark
      fixed
      @click="onModal()"
    >
      <v-icon>add</v-icon>
    </v-btn><br><br><br>

<v-container>
 <v-layout column wrap>
   <v-flex xs6>
 <v-card class="shadow pd-20" v-for="data in dataX" >
   <h2>  {{ data.rulesName }} </h2><hr>
   <h2>{{ data.imageUrl }}</h2>
   <h3>{{  data.ruleseDtail }}</h3> 
    <h3>{{  data.ruleslocation }}</h3> 
   <h3> {{  data.rulesdateClose }}</h3> 
    <h3>{{  data.rulesedataDeadline  }}</h3> 
    <h3>{{  data.rulesedataRace  }}</h3> 
    <h3>{{  data.rulesePayment  }}</h3> 
   <h3> {{  data.ruleseRule  }}</h3> 

   <v-btn @click="onUpdateModal(data)">Update</v-btn>
     <v-btn @click="destroyData(data)">Delete</v-btn>
 </v-card>
  </v-flex>
 </v-layout>

 
 <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          เพิ่มสร้างกิจกรรม
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12>
              <v-form ref="form" v-model="user" lazy-validation >
                      <v-text-field
                      v-model="form.rulesName"
                      placeholder="ชื่อกิจกรรม"
                      required
                      ></v-text-field>
                      <v-text-field
                      placeholder="รายละเอียด"
                      v-model="form.ruleseDtail"
                      required
                      ></v-text-field>
                      <v-text-field
                      placeholder="สถานที่ : "
                      v-model="form.ruleslocation"
                      required
                      ></v-text-field>
                      <v-flex xs12>
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
                            label="เวลาสิ้นสุดสมัคร"
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
                        <h3>To</h3>
                        <v-menu
                          ref="menu"
                          :close-on-content-click="false"
                          v-model="menu"
                          label="เวลาสิ้นสุดสมัคร"
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
                        label="เลือกรุ่นการแข่งขัน"
                        required
                        ></v-select>
                      </v-flex>
            
              <v-flex xs7 class="text-xs-center text-sm-center text-md-center text-lg-center" v-model="picID">
                <img :src="imageUrl" height="150" v-if="imageUrl"/>
                <v-text-field label="อัพโหลด : รูปกิจกรรม" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked"
                >
              </v-flex>
            </v-form>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="offModal()">Cancel</v-btn>
          <v-btn flat @click="storeData()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      
</v-container>
      
  </v-app>
</template>

 
 <!----------Make By YourName---------------->
 
 
   <script>
export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {},
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {
      dataX: [],
      items: [
        { icon: "contacts", text: "Contacts" },
        { icon: "history", text: "Frequently contacted" },
        { icon: "content_copy", text: "Duplicates" }
      ],
      drawer: false,
      dialog: false,
      form: {},
      titlePicID: "Image Upload",
      imageName: "",
      imageUrl: "",
      imageFile: ""
    };
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    //Open Modal method for set data when update
    onUpdateModal(params) {
      this.dialog = true;
      this.form = params;
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
    //Open Modal method for add data
    onModal() {
      this.dialog = true;
    },
    //Close Modal and reload data
    offModal() {
      this.dialog = false;
      this.defaultForm();
    },
    //getdefault form
    defaultForm() {
      this.form = {};
    },
    //Store data to vuex --post
    storeData: async function() {
      let sizeVal = this.dataX.length;
      if (sizeVal > 0) {
        this.dataX[sizeVal++] = this.form;
      } else {
        this.dataX[0] = this.form;
      }
      this.offModal();
    },
    //Update data to vuex --put
    updateData: async function() {},
    //Delete data to vuex --delete
    destroyData: async function(params) {},

    /******* Methods default run ******/
    load: async function() {}
  }
};
</script>
 