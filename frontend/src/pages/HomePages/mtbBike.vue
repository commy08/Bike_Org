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
    </v-app>
</template>

<script>
  export default {
    data: () => ({
        show: false,
    }),
  };
</script>