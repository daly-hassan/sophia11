<template>
  <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <img class="card-img-top " :src="product.image" alt="" />
      <div class="card-body">
        <h4 class="card-title">
          {{ product.title }}
        </h4>
        <p class="card-text">
          {{ product.subTitle }}
        </p>
        <a
          :href="product.fbLink"
          target="_blank"
          class="underline"
          >FACEBOOK</a
        >
        
        <!-- <button class="btn btn-outline-light" type="button" data-toggle="collapse" :data-target="'#' + product.image" aria-expanded="false" :aria-controls="product.image">
    More Details
  </button>
  
  <div class="collapse" :id="product.image">
  <div class="card-body">
   <ul>
     <li v-for="(detail, index) in product.details" :key="index"> {{ detail }} </li>
   </ul>
  </div>
</div> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.portfolio-item {
  margin-bottom: 30px;
}
.card {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}



h4, li{
  color: white;
}
p,
a {
  color: rgb(236, 226, 226);
}

a:hover {
  color: white;
}

.underline {
  display: inline;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}
.underline:after {
  content: "";
  position: absolute;
  z-index: 0;
  right: 0;
  width: 0;
  bottom: -8px;
  background:white;
  height: 2px;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.underline:hover:after,
.underline:focus:after,
.underline:active:after {
  left: 0;
  right: auto;
  width: 100%;
}
</style>
