<template>
  <div class="home">
    <app-carousel></app-carousel>
    <div class="container">
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-contact></app-contact>
    </div>
  </div>
</template>

<script>
import Portfolio from "../components/Portfolio.vue";
import Carousel from "../components/Carousel.vue";
import Services from "../components/Services.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "home",
  components: {
    "app-portfolio": Portfolio,
    "app-carousel": Carousel,
    "app-services": Services,
    "app-contact": Contact
  }
};
</script>
