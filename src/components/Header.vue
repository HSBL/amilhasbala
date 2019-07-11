<template>
  <header>
    <nav
      class="shadow navbar fixed-top navbar-expand-md navbar-dark"
      :class="{ 'navbar--scrolled': !showNavbar }"
    >
      <a class="navbar-brand" v-if="!showNavbar" href="#">[ Has ]</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item nav-item-sub">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item nav-item-sub">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item nav-item-sub">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blogs">Blogs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
    };
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > window.innerHeight) {
        this.showNavbar = false;
      } else{
        this.showNavbar = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>


<style lang="scss" scoped>
</style>
