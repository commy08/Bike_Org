<template>
    <v-app dark>
        <v-container >
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                v-model="name"
                :rules="nameRules"
                label="ชื่อ - นามสกุล"
                required
                ></v-text-field>
                <v-text-field
                v-model="IDcard"
                :rules="rulesIDcard"
                :counter="13"
                label="เลขบัตรประชาชน"
                required
                ></v-text-field>
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
                <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="เพศ"
                required
                ></v-select>
				<v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
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
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      title: "Image Upload",
      dialog: false,
		imageName: '',
		imageUrl: '',
		imageFile: '',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
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
      checkbox: false

    }),

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
		}
    }
  }
</script>