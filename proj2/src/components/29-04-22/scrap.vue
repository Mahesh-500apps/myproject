 <template>
 <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <b>{{ messages.ip }} [{{ message.type }}]:</b>
        {{ message.blocked }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import cheerio from "cheerio";
export default {
  name: "ScrapIP",
  props: {
    msg: String,
    messages: Array
  },
  methods: {
    fetchUrl() {
      for (let i = 0; i < 5; i++) {
        const ip = "192.168.0." + i;
        const url = "https://www.google.com/search?q=w3schools&oq=w3schools&aqs=chrome.0.69i59j0i131i433i512l2j0i433i512j0i131i433i512j69i60l3.6083j0j7&sourceid=chrome&ie=UTF-8" + ip + ".html";
        axios.get(url).then(response => {
          const $ = cheerio.load(response.data);

          setTimeout(() => {
            if ($(".global_data_cnt_DNSBLBlacklistTest").text() == 243) {
              this.messages.push({
                ip: ip,
                type: "Blacklist Test",
                blocked: $(".global_data_cnt_DNSBLBlacklistTest").text()
              });
            }
          }, 10000);
        });
      }
    }
  },
  created() {
    this.fetchUrl();
  }
};
</script>
