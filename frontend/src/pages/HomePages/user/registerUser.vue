<template>
    <v-app dark>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
        <v-flex xs6 sm6>
          <v-card>
            <v-card-title class="title blue-grey lighten-1">กรุณากรอกข้อมูล</v-card-title>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation >
                    <v-text-field
                    v-model="form.name"
                    :rules="nameRules"
                    label="ชื่อ"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="form.lname"
                    :rules="lnameRules"
                    label="นามสกุล"
                    required
                    ></v-text-field>
                    <v-flex xs6>
                    <v-text-field
                    v-model="form.phone"
                    :rules="rulesPhone"
                    :counter="10"
                    label="เบอร์มือถือ"
                    required
                    ></v-text-field>
                    </v-flex>
                    <v-flex xs12 lg6>
                        <v-menu
                        ref="menu"
                        :close-on-content-click="false"
                        v-model="form.menu"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                        >
                        <v-text-field
                            slot="activator"
                            v-model="dateFormatted"
                            label="Date"
                            prepend-icon="event"
                            @blur="date = parseDate(dateFormatted)"
                        ></v-text-field>
                        <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
                        </v-menu>
                        <p>วันเกิด : ปี / เดือน / วัน: <strong>{{ date }}</strong></p>
                    </v-flex>
                    <v-flex xs2>
                      <v-select
                      v-model="form.gender"
                      :items="items"
                      :rules="[v => !!v || 'Item is required']"
                      label="เพศ"
                      required
                      ></v-select>
                    </v-flex>
            <v-flex xs7 class="text-xs-center text-sm-center text-md-center text-lg-center">
              <img :src="imageUrl" height="150" v-if="imageUrl"/>
              <v-text-field label="Select Image (รูปบัตรประชาชน)"  @click='pickFile' v-model='form.image' prepend-icon='attach_file'></v-text-field>
              <input
                type="file"
                style="display: none"
                ref="image"
                accept="image/*"
                @change="onFilePicked"
              >
            </v-flex>
                    <v-checkbox
                    v-model="form.checkboxx"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="ยืนยันการสมัครสมาชิก"
                    required
                    ></v-checkbox>

                <v-btn
                :disabled="!valid"
                @click="submit"
                >
                submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm6 >
        <v-card>
          <v-card-title class="title blue-grey lighten-1">
            เงื่อนไขการสมัคร
          </v-card-title>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
          <v-card-text>
            1.
          </v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: vm => ({
      form : {
          name : null,
          lname : null,
          phone : null,
          manu : null,
          dateFormatted : null,
          gender : null,
          image : null,
          checkboxx : null,
      },
      submit : false,
      title : "Image Upload",
      dialog : false,
		imageName : '',
		imageUrl : '',
		imageFile : '',
      valid : true,
      name : '',
      checkbox: false,
      date : new Date().toISOString().substr(0, 10),
      dateFormatted : vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu : false,
      nameRules : [
        v => !!v || 'กรุณากรอกชื่อ',
      ],
      lnameRules: [
        v => !!v || 'กรุณากรอกนามสกุล',
      ],
      select: null,
      items: [
        'ชาย',
        'หญิง'
      ],
      phone: '',
      rulesPhone: [
          v => !!v || 'กรุรากรอกเบอร์โทรศัพท์',
          v => (v && v.length <= 10) || 'Phone must be less than 10 characters'
      ],
    }),

    computed: {
        computedDateFormatted () {
        return this.formatDate(this.date)
        }
    },

    watch: {
        date () {
        this.dateFormatted = this.formatDate(this.date)
        }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      },
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
        },
        formatDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('-')
        return `${day}/${month}/${year}`
        },
        parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
        }
    }
  }
</script>