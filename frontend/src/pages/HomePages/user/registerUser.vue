<template>
    <v-app dark>
      <v-container>
      <v-flex xs6>
            <v-form ref="form" v-model="valid" lazy-validation >
                <v-text-field
                v-model="name"
                :rules="nameRules"
                label="ชื่อ"
                required
                ></v-text-field>
                <v-text-field
                v-model="lname"
                :rules="lnameRules"
                label="นามสกุล"
                required
                ></v-text-field>
                <v-text-field
                v-model="phone"
                :rules="rulesPhone"
                :counter="10"
                label="เบอร์มือถือ"
                required
                ></v-text-field>
                <v-flex xs12 lg6>
                    <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    v-model="menu"
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
                        hint="DD/MM/YYYY format"
                        persistent-hint
                        prepend-icon="event"
                        @blur="date = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
                    </v-menu>
                    <p>ปี / เดือน / วัน: <strong>{{ date }}</strong></p>
                </v-flex>
                  <v-select
                  v-model="gender"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="เพศ"
                  required
                  ></v-select>
				<v-flex xs6 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image (รูปบัตรประชาชน)"  @click='pickFile' v-model='images' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
                <v-checkbox
                v-model="checkboxx"
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
        <v-form xs6>
          <v-card-titel>

          </v-card-titel>
        </v-form>
    </v-flex>
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
          dateFormatted : null,
          gender : null,
          images : null,
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
        v => !!v || 'Name is required',
      ],
      lnameRules: [
        v => !!v || 'Last name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'ชาย',
        'หญิง'
      ],
      phone: '',
      rulesPhone: [
          v => !!v || 'Phone is required',
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