<template>
  <div class="carousel">
    <video autoplay muted loop class="video">
      <source
        src="https://static.videezy.com/system/resources/previews/000/005/583/original/Typing_Overhead_MacbookPro_BRoll.mp4"
        type="video/mp4"
      >Your browser does not support HTML5 video.
    </video>

    <div class="content">
      <h1>Hello my name is Amil Hasbala</h1>
      <p>This site is live deployed from my github repository.</p>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {}
};
</script>

<style lang="scss" scoped>
.carousel{
  max-height: 50vw;
  overflow: hidden;
}
</style>
