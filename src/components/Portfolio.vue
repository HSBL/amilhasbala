<template>
  <section>
    <div>
      <h3>My recent works:</h3>
      <p>this portfolio was live API from my Dribbble.com profile</p>
    </div>
    <div class="card-columns">
      <div
        class="card shadow"
        v-for="shot in shots"
        v-bind:key="shot.id"
        onclick="this.classList.toggle('expanded')"
      >
        <img class="img-fluid" v-bind:src="shot.image" v-bind:alt="shot.title" />
        <div class="text1">
          <div class="text-content">
            <h1 class="title">{{ shot.title }}</h1>
            <div class="body-text">{{ shot.description }}</div>
          </div>
        </div>
        <img
          src="https://image.flaticon.com/icons/svg/1665/1665604.svg"
          class="chevron img-fluid"
          width="30"
          alt
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      shots: [
        {
          image: "https://i.postimg.cc/t4qKrKYr/ngopiin.png",
          title: "Ngopi.in",
          description:
            "Logo design of a location based application for coffee enthusiast",
          id: 1
        },
        {
          image: "https://i.postimg.cc/tRPG7dKz/instanhijab.png",
          title: "Instan Hijab",
          description:
            "Logo design for Instanhijab.com moslem outfit marketplace",
          id: 2
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
          console.log(result);
          console.log("getshot success")
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
  .text1 {
    display: none;
  }
  .chevron {
    position: absolute;
    bottom: 20px;
    left: calc(50% - 15px);
    transform: rotate(180deg);
    transition: transform 1000ms;
  }
}
.expanded {
  .text1 {
    padding: 10px;
    display: block;
  }
  .chevron {
    transform: rotate(0deg);
  }
}
</style>
