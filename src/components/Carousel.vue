<template>
  <video-bg :sources="['https://static.videezy.com/system/resources/previews/000/005/583/original/Typing_Overhead_MacbookPro_BRoll.mp4']" class="box">
    <div class="back"></div>
    <div class="fore"></div>
    <div class="main">
      <h1>Amil Hasbala</h1>
    </div>
  </video-bg>
</template>

<script>
import VideoBg from "vue-videobg";
export default {
  components: { VideoBg },
  data() {
    return {
      items: [
        {
          image:
            "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg",
          captionHead: "Graphic Design",
          caption: "Creativity baked in to my soul",
          id: "GD"
        },
        {
          image:
            "https://images.pexels.com/photos/256112/pexels-photo-256112.jpeg",
          captionHead: "Engineering",
          caption: "Strong Logic and analytical thingking",
          id: "EG"
        },
        {
          image:
            "https://images.pexels.com/photos/46218/network-cables-cable-patch-patch-cable-46218.jpeg",
          captionHead: "Web Development",
          caption: "Writing code, balancing between logic and creativity",
          id: "WD"
        }
      ]
    };
  },
  methods: {
    multipara() {
      window.addEventListener("scroll", scrollFunc);

      function scrollFunc() {
        var windowScroll = this.scrollY;

        var $logo = document.getElementsByClassName("main")[0];
        $logo.style.transform = "translateY(" + windowScroll / 2 + "%)";

        var $back = document.getElementsByClassName("back")[0];
        $back.style.transform = "translateY(-" + windowScroll / 3 + "%)";

        var $fore = document.getElementsByClassName("fore")[0];
        $fore.style.transform = "translateY(-" + windowScroll / 7 + "%)";
      }
    }
  },
  mounted() {
    this.multipara();
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
  position: relative;
  background: url("");
  background-size: contain;
  background-position: top center;
  background-attachment: fixed;
  overflow: hidden;
}
.content {
  height: 400px;
}
.main {
  height: 100px;
  width: 100%;
  background-image: url("");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  margin-top: -50px;
}
.fore {
  background-image: url("../assets/code-foreground1.png");
  background-size: cover;
  height: 250%;
  width: 100vw;
  background-repeat: no-repeat;
  position: absolute;
  top: 90vh;
}
.back {
  width: 100vw;
  height: 500%;
  background-image: url("../assets/code-foreground2.png");
  background-repeat: no-repeat;
  background-position: top left;
  position: absolute;
  top: 50vh;
}
</style>
