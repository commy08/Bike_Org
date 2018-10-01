<template>
    <v-app dark>
        <section>
            <v-container grid-list-sm class="pa-4" >
                <v-layout row wrap>
                    <v-flex xs12 align-center justify-space-between>
                        <h3 ref="radio" class="headline">ชื่อ - นามสกุล</h3>
                        <v-layout align-center>
                            <v-flex xs6>
                            <v-text-field
                                placeholder="ชื่อ"
                            ></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                            <v-text-field
                                placeholder="นามสกุล"
                            ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs6>
                        <h3 ref="radio" class="headline">เพศ</h3>
                        <v-radio-group v-model="type" row>
                            <v-radio label="ชาย" value="male"></v-radio>
                            <v-radio label="หญิง" value="female"></v-radio>
                        </v-radio-group>
                    </v-flex>
                    <v-date-picker header-color="blue" v-model="picker" :landscape="landscape"></v-date-picker>
                    <v-flex xs3>
                        <h3 ref="radio" class="headline">เบอร์ที่ติดต่อ</h3>
                    <v-text-field
                        type="tel"
                        prepend-icon="phone"
                        placeholder="(000) 000 - 0000"
                    ></v-text-field>
                    </v-flex>
                    
                    <v-flex xs3>
                        <h3 ref="radio" class="headline">อัพไฟล์รูปภาพ</h3>
                    <img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image" @click='pickFile' v-model='imageName'></v-text-field>
					<input
						type="file"
                        style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
        picker: null,
        landscape: !true,
        title: "Image Upload",
        dialog: false,
		imageName: '',
		imageUrl: '',
		imageFile: ''
    }),

    methods: {
        pickFile () {
            this.$refs.image.click ()
        },
		
		onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}
    }
  }
</script>