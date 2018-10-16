<template>
    <v-app>
        <section>
            <v-container  fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flax xs12 sm6 offset-lg1>
                        <v-card class="elevation-1">
                            <v-card-title class="headline light-green">
                                <div>
                                    <div class="headline">University of Phayao Game</div>
                                    <span class="black--text">16/02/61</span>
                                </div>
                            </v-card-title>
                            <img src="@/assets/img/1460953620_20077.jpg" alt="Vuetify.js" height="150">
                            <v-card-actions>
                                <v-btn flat>ดูรายละเอียด</v-btn>
                                <v-btn flat color="purple" @click="dialog = !dialog">สมัครเข้าร่วมรายการ</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="show = !show">
                                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-slide-y-transition>
                                <v-card-text v-show="show">
                                    เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                                    และจากจักรยานเสือหมอบ 2 เหรียญ
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flax>
                    
                    <v-flax xs12 sm6 offset-sm3>
                        <v-card class="elevation-1">
                            <v-card-title class="headline light-green">
                                <div>
                                    <div class="headline">University of Phayao Game</div>
                                    <span class="black--text">16/02/61</span>
                                </div>
                            </v-card-title>
                            <img src="@/assets/img/1460953620_20077.jpg" alt="Vuetify.js" height="150">
                            <v-card-actions>
                                <v-btn flat>ดูรายละเอียด</v-btn>
                                <v-btn flat color="purple" @click="dialog = !dialog">สมัครเข้าร่วมรายการ</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="show = !show">
                                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-slide-y-transition>
                                <v-card-text v-show="show">
                                    เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                                    และจากจักรยานเสือหมอบ 2 เหรียญ
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flax>
                    
                    <v-flax xs12 sm6 offset-sm3>
                        <v-card class="elevation-1">
                            <v-card-title class="headline light-green">
                                <div>
                                    <div class="headline">University of Phayao Game</div>
                                    <span class="black--text">16/02/61</span>
                                </div>
                            </v-card-title>
                            <img src="@/assets/img/1460953620_20077.jpg" alt="Vuetify.js" height="150">
                            <v-card-actions>
                                <v-btn flat>ดูรายละเอียด</v-btn>
                                <v-btn flat color="purple" @click="dialog = !dialog">สมัครเข้าร่วมรายการ</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="show = !show">
                                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-slide-y-transition>
                                <v-card-text v-show="show">
                                    เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
                                    และจากจักรยานเสือหมอบ 2 เหรียญ
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flax>
                </v-layout>
            </v-container>
                     <!-- Modal -->
                        <v-dialog v-model="dialog" width="1000px">
                            <v-card>
                                <v-card-title
                                class="dark lighten-4 py-4 title"
                                >
                                Create contact
                                </v-card-title>
                                <v-container grid-list-sm class="pa-4">
                                <v-layout row wrap>
                                    <v-flex xs12 align-center justify-space-between>
                                    <v-layout align-center>
                                        <v-avatar size="40px" class="mr-3">
                                        <img
                                            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                            alt=""
                                        >
                                        </v-avatar>
                                        <v-text-field
                                        placeholder="Name"
                                        ></v-text-field>
                                    </v-layout>
                                    </v-flex>
                                    <v-flex xs6>
                                    <v-text-field
                                        prepend-icon="business"
                                        placeholder="Company"
                                    ></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                    <v-text-field
                                        placeholder="Job title"
                                    ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                    <v-text-field
                                        prepend-icon="mail"
                                        placeholder="Email"
                                    ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                    <v-text-field
                                        type="tel"
                                        prepend-icon="phone"
                                        placeholder="(000) 000 - 0000"
                                        mask="phone"
                                    ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                    <v-text-field
                                        prepend-icon="notes"
                                        placeholder="Notes"
                                    ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                </v-container>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
                                <v-btn flat @click="dialog = false">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    <!-- End Modal -->
        </section>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
        dialog: false,
        show: false,
    }),
  };
</script>