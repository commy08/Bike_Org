<template>
    <v-app dark>
        <v-container grid-list-md text-xs-center>
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs6>
                    <v-card>
                        <router-link to="/RegisterUser" tag="นักปั่น">นักปั่น</router-link>
                    </v-card>
                 </v-flex>
                 <v-flex xs6>
                    <v-card>
                        <router-link to="/RegisterOrg" tag="ผู้จัดกิจกรรม">ผู้จัดกิจกรรม</router-link>
                    </v-card>
                 </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
