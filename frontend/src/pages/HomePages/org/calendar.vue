<template>
  <v-layout row wrap>
    <v-flex xs11 sm5>
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker in menu"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" type="month" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false
    };
  }
};
</script>