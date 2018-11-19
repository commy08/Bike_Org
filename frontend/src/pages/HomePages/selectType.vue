<template>
    <v-app>
        <v-container grid-list-md text-xs-center>
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs6 >
                    <v-card dark> 
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs4 >
                                   <img class="circle" src="https://www.posttoday.com/media/content/2018/03/06/C67409B1BBAB4FB8ABF64781C3D4007C.jpg" alt="">
                            </v-flex>
                            <v-flex xs8>
                                <h2 text-md-center>นักปั่น</h2>
                                <hr> 
                                <v-btn @click="$router.push('/registeruser')"  color="success">Go</v-btn>
                            </v-flex>
                            </v-layout> 
                        </v-container>
                     </v-card>
                 </v-flex>
                 <v-flex xs6> 
                      <v-card dark> 
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs4 >
                                   <img class="circle" src="https://www.posttoday.com/media/content/2018/03/06/C67409B1BBAB4FB8ABF64781C3D4007C.jpg" alt="">
                            </v-flex>
                            <v-flex xs8>
                                <h2 text-md-center>ผู้จัดกิจกรรม</h2>
                                <hr> 
                                <v-btn @click="$router.push('/registerorg')"  color="success">Go</v-btn>
                            </v-flex>
                            </v-layout> 
                        </v-container>
                     </v-card>
                 </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<style>
.circle{
    
    width:150px;
    height:150px;
}
</style>
