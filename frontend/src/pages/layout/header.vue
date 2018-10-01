<template>
        <section>
            <v-toolbar class="amber" dark>
                <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                     <router-link to="/" type="icon">BIKE - ORGENIZE</router-link>
                </v-toolbar-title>
                    <v-text-field 
                        flat 
                        solo-inverted 
                        hide-details 
                        prepend-inner-icon="search" 
                        label="Search" 
                        class="hidden-sm-and-down">
                    </v-text-field>
                <router-link to="/event">
                    <v-btn class="blue lighten-1">รายการแข่งขัน</v-btn>
                </router-link>
                
                <router-link v-if="!isLogin" to="/login">
                    <v-btn dark color="light-green accent-4">เข้าสู่ระบบผ่าน Line</v-btn>                   
                </router-link>

                <v-menu v-else offset-y>
                    <v-btn dark color="light-green accent-4"  slot="activator">Welcome</v-btn>
                    <v-list>
                        <v-list-tile
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>   
                
            </v-toolbar>
        </section>
        
</template>

<script>
export default {
  data: () => ({
    isLogin: true,
    items: [
      { title: 'ข้อมูลส่วนตัว' },
      { title: 'แก้ไขข้อมูล' },
      { title: 'ออกจากระบบ' }
    ]
  }),
};
</script>