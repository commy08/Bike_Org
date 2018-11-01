<template>
    <v-app>
        <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          เพิ่มสร้างกิจกรรม
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field
                  placeholder="ชื่อกิจกรรม"
                  :rules="NameRules"
                  v-model="rulesName"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field
                  placeholder="รายละเอียด"
                  :rules="detailRules"
                  v-model="ruleseDtail"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="สถานที่ : "
                v-model="ruleslocation"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="เวลาสิ้นสุดสมัคร"
                v-model="rulesdateClose"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="เวลาสิ้นสุดการจ่ายเงิน"
                v-model="rulesedataDeadline"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="เวลาแข่งขัน"
                v-model="rulesedataRace"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="จ่ายเงิน"
                v-model="rulesePayment"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                placeholder="กฏการแข่งขัน"
                v-model="ruleseRule"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-app>
    
</template>
