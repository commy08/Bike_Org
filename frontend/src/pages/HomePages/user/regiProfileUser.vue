<template>
    <v-app>
        <v-card dark class="elevation-1">
            <v-flax xs4>
                <h2>University of Phayao Game</h2>
                <img src="http://www.up.ac.th/FileUpload/0fupcjxb.jpg" alt="Vuetify.js" height="150">
            </v-flax>
            <v-card-text>
            เป็นปีแรกที่ มหาวิทยาลัยพะเยาเข้าแข่งขันกีฬาจักรยาน โดยเป็นไปตามคาดได้รับเหรียญทองจากจักรยานเสือภูเขา 1 เหรียญ 
            และจากจักรยานเสือหมอบ 2 เหรียญ
            </v-card-text>
            <v-btn left bottom color="blue" @click="dialog = !dialog">สมัครเข้าร่วมรายการ</v-btn>
        </v-card>
    </v-app>
</template>
