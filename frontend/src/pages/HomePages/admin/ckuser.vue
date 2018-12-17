<template>
  <v-content fill-height justify-center>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>

      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.IDPic }}</td>
          <td>{{ props.item.create_datetime }}</td>
          <td>{{ props.item.end_datetime }}</td>
          <td>&nbsp;
            <v-flex>
              <v-btn
                color="info"
                slot="activator"
                v-model="dialog"
                @click="dialog = !dialog"
              >อัพเดทสถานะ</v-btn>
            </v-flex>&nbsp;
          </td>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>&nbsp;&nbsp;
    </v-card>

    <!-- dialog -->
    <v-layout row justify-center>
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">ยืนยันการสมัคร</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="ชื่อ - นามสกุล" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- dialog -->
  </v-content>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    status: false,
    headers: [
      {
        text: "#",
        align: "left",
        value: "id",
        sortable: true
      },
      {
        text: "รูปกิจกรรม",
        value: "picture"
      },
      {
        text: "วันที่ : จัดกิจกรรม",
        value: "วันจัดกิจกรรม"
      },
      {
        text: "วันสุดท้ายการสมัคร",
        value: "วันสุดท้ายการสมัคร"
      },
      {
        text: "สถานะ",
        value: "สถานะ"
      }
    ],
    desserts: [
      {
        value: false,
        id: "1",
        IDPic: "ID Pic",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "2",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "3",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "4",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "5",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "6",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "8",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      },
      {
        value: false,
        id: "7",
        IDPic: "ID Pic",
        fullname: "Teerapat",
        create_datetime: "2018-01-13",
        end_datetime: "2018-01-13 12:11:00"
      }
    ]
  })
};
</script>