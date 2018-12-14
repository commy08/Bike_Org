 <!----------Make By YourName---------------->
  <template>
  <v-flex>
    <file-base64 v-bind:multiple="true" v-bind:done="getFiles"></file-base64>

    <v-flex v-for="img in imgs" :key="img.id">
      <img style="width:160px; height:auto; margin-left:20px;" :src="img.base64" alt >
    </v-flex>
    <!-- <pre>
      {{ imgs }}
    </pre>-->
  </v-flex>
</template>
 
<script>
import fileBase64 from "@/components/upload";

export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {
    fileBase64
  },
  /*-------------------------Set Component---------------------------------------*/
  props: {
    done: {
      type: Function,
      default: () => {}
    }
  },
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {
      imgs: {}
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
    getFiles(files) {
      this.imgs = files;
      this.done(files)
      console.log(files);
    },
    /******* Methods default run ******/
    load: async function() {}
  }
};
</script>