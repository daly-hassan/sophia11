<template>
  <div id="sophiaHome">
    <div id="sophia11" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#sophia11" data-slide-to="0" class="active"></li>
        <li
          v-for="n in 9"
          data-target="#sophia11"
          :data-slide-to="n"
          :key="n"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active vignette-inset">
          <img
            class="d-block w-100 "
            :src="carousels[0].image"
            alt="First slide"
          />
          <div class="carousel-caption d-md-none d-md-block">
            <h5>{{ carousels[0].title }}</h5>
            <p>{{ carousels[0].subTitle }}</p>
          </div>
        </div>
        <div class="carousel-item vignette-inset" v-for="n in 9" :key="n">
          <img
            class="d-block w-100"
            :src="carousels[n].image"
            alt="Second slide"
          />
          <div class="carousel-caption d-md-none d-md-block">
            <h5>{{ carousels[n].title }}</h5>
            <p>{{ carousels[n].subTitle }}</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#sophia11"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#sophia11"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "sophiaHome",
  data() {
    return {
      carousels: this.$store.state.carousels.carousels
    };
  },
  components: {
    appFooter: Footer
  }
};
</script>

<style scoped>
.vignette-inset {
  background-size: cover;
}

.vignette-inset:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: inset 0px -200px 150px black;
}

.carousel-item {
  /* height: 80vh;
  min-height: 200px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  /* background-image: url("/w3images/photographer.jpg"); */
  background-color: black;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.carousel-caption h5 {
  /* width: 90%; */
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0.5rem;
  color: white;
  margin: auto;
  /* text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; */
}

.carousel-caption p {
  width: 75%;
  margin: auto;
  font-size: 1rem;
  line-height: 1.9;
}
</style>
