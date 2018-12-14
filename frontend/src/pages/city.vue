<!----------Make By YourName---------------->
 <template>
  <v-content>
    <v-flex column fill-height justify-center>
      <v-select
        v-model="form.city"
        @change="getAmp"
        :items="city"
        item-value="id"
        item-text="province_name"
        outline
        label="Select City"
      ></v-select>
      <v-select
        v-model="form.amp"
        :items="amp"
        item-value="id"
        item-text="amphur_name"
        outline
        label="Select Amp"
      ></v-select>
    </v-flex>
  </v-content>
</template>

    <script>
import axios from "@/axios";

export default {
  name: "city",
  /*-------------------------Load Component---------------------------------------*/
  components: {},
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {
      city: [],
      amp: [],

      ampSelect: {},

      form: {
        city: "",
        amp: ""
      }
    };
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    getCity: async function() {
      let u = await axios
        .get("http://192.168.1.105:8082/api/getCity/")
        .then(r => {
          this.city = r.data;
        })
        .catch(e => {
          alert("Error City");
        });
    },
    getAmp: async function() {
      let u = await axios
        .get("http://192.168.1.105:8082/api/getAmp/" + this.form.city)
        .then(r => {
          this.amp = r.data;
        })
        .catch(e => {
          alert("Error amp");
        });
    },

    /******* Methods default run ******/
    load: async function() {
      this.getCity();
    }
  }
};
</script>