<template>
        <section>
            <v-toolbar class="amber" >
                
                <v-layout xs9 align-end>
                <router-link to="/" tag="button">
                    <v-btn flat>BIKE - ORGENIZE</v-btn>
                </router-link>
                </v-layout>
                
                <div class="v-input v-text-field v-text-field--single-line v-input--hide-details theme--light">
                    <div class="v-input__control">
                        <div class="v-input__slot">
                            <div class="v-text-field__slot">
                                <label aria-hidden="true" class="v-label theme--light" style="right: auto; position: absolute;">Search...</label>
                                <input aria-label="Search..." type="text">
                            </div>
                            <div class="v-input__append-inner">
                                <div class="v-input__icon v-input__icon--append">
                                    <i aria-hidden="true" class="v-icon material-icons theme--light">search</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <router-link to="/event">
                    <v-btn class="blue lighten-1">รายการแข่งขัน</v-btn>
                </router-link>
                <router-link to="/login">
                    <v-btn dark color="light-green accent-4">เข้าสู่ระบบผ่าน Line</v-btn>
                </router-link>
            </v-toolbar>
        </section>
</template>
