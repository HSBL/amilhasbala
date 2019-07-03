<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="border-right: 1px #e3e3e3 solid;">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="section-heading">My Skills.</h2>
                <hr>
                <p>{{ skills.intro }}</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-lg-offset-1 col-md-12 col-sm-12">
                <div class="service-box media">
                  <div class="media-left">
                    <div class="text-left">
                      <img src="../assets/icon-04.png" alt="design" class="img-responsive">
                    </div>
                  </div>
                  <div class="media-body text-left">
                    <h4>
                      <strong>Design</strong>
                    </h4>
                    <p class="text-muted line-height-2">
                      <span v-for="skill in skills.graphic" v-bind:key="skill.id">
                        {{ skill }}
                        <br>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="service-box media">
                  <div class="media-left">
                    <div class="text-left">
                      <img src="../assets/icon-03.png" alt="develop" class="img-responsive">
                    </div>
                  </div>
                  <div class="media-body text-left">
                    <h4>
                      <strong>Programming</strong>
                    </h4>
                    <p class="text-muted line-height-2">
                      <span v-for="skill in skills.coding" v-bind:key="skill.id">
                        {{ skill }}
                        <br>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-11">
              <h2 class="section-heading">Get in touch.</h2>
              <hr>
              <p>{{ getInTouch.intro }}</p>
            </div>
            <div class="col-md-11">
              <form action="https://formspree.io/amilhasbala@gmail.com" method="POST">
                <div class="form-group">
                  <label for="formControlInput1">
                    <span>
                      <i class="fas fa-envelope"></i>
                    </span> Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                  >
                </div>
                <div class="form-group">
                  <label for="formControlTextarea1">Your Message</label>
                  <textarea name="message" class="form-control" id="message" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="formControlTextarea1">What kind of service do yo need?</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value
                      id="defaultCheck1"
                      name="graphicDesignChecked"
                    >
                    <label class="form-check-label" for="defaultCheck1">Graphic Design</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value
                      id="defaultCheck2"
                      name="webDevelopmentChecked"
                    >
                    <label class="form-check-label" for="defaultCheck2">Web Development</label>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" value="Send" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      skills: {
        intro:
          "I love making logical problems into beautiful and intuitive interface designs. Thinking logic with my left brain and take the right one to think creatively.",
        graphic: [
          "UI/UX Design",
          "Branding",
          "Photoshop",
          "Corel Draw",
          "Illustrator"
        ],
        coding: [
          "HTML5",
          "CSS & SASS",
          "Javascript & jQuery",
          "Node.js & REST API",
          "Vue & Vuex",
          "Git & Github",
          "Wordpress",
          "Bootstrap"
        ]
      },
      getInTouch: {
        intro:
          "I will provide styling and user experience that incorporate your needs."
      }
    };
  }
};
</script>