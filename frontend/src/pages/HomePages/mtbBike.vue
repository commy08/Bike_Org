<template>
    <v-app>
        <v-container>
            <v-layout align-start justify-space-around row fill-height>
                <v-flex v-for="i in 3" :key="`4${i}`" xs3>
                    <v-card>
                        <img src="@/assets/img/1460953620_20077.jpg" contain height="194.7">
                        <!-- <v-img
                        src="@/assets/img/1460953620_20077.jpg"
                        height="200px"
                        aspect-ratio="2"
                        >
                        </v-img> -->

                        <v-card-title primary-title>
                        <div>
                            <div class="headline">Top western road trips</div>
                            <span class="grey--text">1,000 miles of wonder</span>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                        <v-btn flat>Share</v-btn>
                        <v-btn flat color="purple">Explore</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-slide-y-transition>
                        <v-card-text v-show="show">
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                        </v-slide-y-transition>

                    </v-card>
                </v-flex>
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
    </v-app>
</template>

<script>
  export default {
    data: () => ({
        dialog: false,
        show: [],
    }),
  };
</script>