<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs4>
        <v-subheader>ชื่อ - นามสกุล</v-subheader>
      </v-flex>
      <v-flex xs6 sm6>
        <v-text-field
          outline
          v-model="showFullname"
        ></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn color="success">แก้ไข</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>เบอร์โทรศัพท์</v-subheader>
      </v-flex>
      <v-flex xs6 sm6>
        <v-text-field
          v-model="user.tel"
          outline
        ></v-text-field>
      </v-flex>
       <v-flex xs2>
        <v-btn color="success">แก้ไข</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>ที่อยู่</v-subheader>
      </v-flex>
      <v-flex xs6 sm6>
        <v-text-field
          v-model="showAddress"
          outline
        ></v-text-field>
      </v-flex>
       <v-flex xs2>
        <v-btn color="success">แก้ไข</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>วันเกิด</v-subheader>
      </v-flex>
      <v-flex xs6 sm6>
        <v-text-field
          v-model="user.birthday"
          type="date"
          outline
        ></v-text-field>
      </v-flex>
       <v-flex xs2>
        <v-btn color="success">แก้ไข</v-btn>
      </v-flex>
    </v-layout>
    

  </v-container>
</template>

<script>
import userStores from "@/stores/userStores";
import router from "@/router";

export default {
  components: {},
  data: () => ({
    user: [],
    showAddress: "",
    showFullname: "",
  }),
  methods:{
    getDatauser: async function() {
      if (!localStorage.access_token) router.push("/");
      let optionts = {
        access_token: localStorage.access_token
      };
      await userStores.dispatch("getDatauser", optionts);
        this.user = userStores.state.rs_getDatauser;
        this.showAddress = this.user.address +" "+ this.user.provinces +" "+ this.user.amphurs;
        this.showFullname = this.user.firstname +" "+ this.user.lastname
        // console.log(this.user)
    },
  },
  async mounted() {
    await this.getDatauser();
  }
};
</script>