<template>
    <v-content fill-height justify-center>      
        <v-card>    
            <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
            
            <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            >
            <template slot="items" slot-scope="props">
                <td >{{ props.item.id }}</td>
                <td >{{ props.item.IDPic }}</td>
                <td >{{ props.item.create_datetime }}</td>
                <td >{{ props.item.end_datetime }}</td>
                <td >
                  &nbsp;
                  <v-flex>
                    <v-switch
                      color="success"
                    ></v-switch>
                </v-flex>
                </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
            </v-data-table>
        </v-card>
    </v-content>
</template>

<script>
export default {
  data: () => ({
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
    ],
  }),
};
</script>