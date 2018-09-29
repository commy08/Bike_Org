<template>
    <section>
        <v-parallax src="https://images.unsplash.com/photo-1507250177462-a39de76ad68f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6f4619c9a2bd64d167c7d392c5f52ab&auto=format&fit=crop&w=752&q=80" height="600">
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    
                    <v-card class="elevation-12">
                    <v-toolbar color="amber lighten-2">
                        <v-toolbar-title>เข้าสู่ระบบด้วย</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <div class="btn-wrapper text-center">
                    <a :href="linklinelogin" class="btn btn-neutral btn-icon">
                        <v-spacer class="btn-inner--icon">
                            <img src="https://www.donelike.com/images/lineicon.png" height="150">
                        </v-spacer>
                    </a>
                    </div>
                    <v-spacer>หรือเข้าสู่ระบบด้วยอีเมล</v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <hr>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-layout>
                            <router-link to="#" tag="button">
                                <v-spacer>ลืมรหัสผ่าน</v-spacer>
                            </router-link>
                        </v-layout>
                        <router-link to="/#" tag="button">
                            <v-btn dark color="light-green accent-4">Login</v-btn>
                        </router-link>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
    </section>
</template>
