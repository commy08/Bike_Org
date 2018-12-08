<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>ชื่อ - นามสกุล</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="ชื่อ - นามสกุล"
          value="fristname lastname"
          outline
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>เบอร์โทรศัพท์</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="phone"
          value="0864415389"
          outline
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>ที่อยู่</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="Address"
          value="example"
          outline
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-subheader>วันเกิด</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          label="date"
          value="2539 - 03 -19"
          type="date"
          outline
        ></v-text-field>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: null,
      picture: null
    };
  }
};
</script>