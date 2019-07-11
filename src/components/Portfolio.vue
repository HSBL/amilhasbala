<template>
  <section>
    <div>
      <h3>My recent works:</h3>
      <p>
        this portfolio was direct REST API from
        <a
          href="https://dribbble.com/ahas8"
        >my Dribbble.com profile</a>
      </p>
    </div>
    
    <!-- modal -->
    <div
      v-for="shot in shots"
      v-bind:key="shot.id"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-modal="true"
      v-bind:id="'modalId'+shot.id"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title h4" id="myLargeModalLabel">{{ shot.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="img-fluid" v-bind:src="shot.images.hidpi" v-bind:alt="shot.title" />
          </div>
        </div>
      </div>
    </div>

    <div class="card-columns">
      <div
        class="card shadow"
        v-for="shot in shots"
        v-bind:key="shot.id"
        data-toggle="modal"
        v-bind:data-target="'#modalId'+shot.id"
      >
        <img class="img-fluid" v-bind:src="shot.images.hidpi" v-bind:alt="shot.title" />
        <div class="text1">
          <div class="text-content">
            <h1 class="title">{{ shot.title }}</h1>
            <div class="body-text">{{ shot.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { constants } from "crypto";
export default {
  components: {},
  data() {
    return {
      shots: [
        {
          images: { hidpi: "https://i.postimg.cc/hvhh88tV/amilhasbalacom.png" },
          title: "Amilhasbala.com",
          description:
            "This web portfolio was built from the ground up using bootstrap for CSS framework and Vue as Javascript framework",
          id: 1
        },
        {
          images: { hidpi: "https://i.postimg.cc/tRPG7dKz/instanhijab.png" },
          title: "Instan Hijab",
          description:
            "Logo design for Instanhijab.com moslem outfit marketplace",
          id: 2
        },
        {
          images: { hidpi: "https://i.postimg.cc/52Q77DRR/imagesearchvue.png" },
          title: "Vue Code Challenge",
          description: "This challenge was my first attempt at Vue",
          id: 3
        }
      ]
    };
  },
  methods: {
    getShots() {
      this.$http
        .get(
          "https://api.dribbble.com/v2/user/shots?access_token=cb10c4282b1b183e29c8eb7c66bd38bc8be9bd031b99e9b2cb8680f8971231ae"
        )
        .then(result => {
          for (let i = 0; i < result.data.length; i++) {
            result.data[i].description = result.data[i].description.substr(
              3,
              result.data[i].description.length - 7
            );
            this.shots.push(result.data[i]);
          }
        });
    }
  },
  created() {
    this.getShots();
  }
};
</script>

<style lang="scss" scoped>
.card {
  background: white;
  border-radius: 8px;
  padding-bottom: 50px;
  position: relative;
  text-align: center;
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .text1 {
    padding: 10px;
    display: block;
    color: rgb(58, 58, 58);
  }
  .chevron {
    position: absolute;
    bottom: 20px;
    left: calc(50% - 15px);
    transform: rotate(180deg);
    transition: transform 1000ms;
  }
}
</style>
