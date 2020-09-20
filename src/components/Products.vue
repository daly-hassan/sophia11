<template>
  <div
    id="sophiaProducts"
    :style="{
      'background-image': 'url(' + $store.state.assetsURL + 'images/candles.jpg)',
      
    }"
  > 
    <!-- Page Content -->

    <div class="container">
<br>
      <div class="row justify-content-center">
        
        <app-product
        v-for="product in products"
        :key="product.image"
        :product="product"
      ></app-product>
      </div>
      

      <!-- Pagination -->
      <!-- <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul> -->
    </div>

    <router-view> </router-view>

    <!-- /.container -->
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  name: "sophiaProducts",
  data() {
    return {
      products: this.$store.state.products.products,
    };
  },
 
  components: {
    appProduct: Product
  }
};
</script>

<style scoped>

#sophiaProducts {
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
     position:absolute;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1600px;
}

.portfolio-item {
  margin-bottom: 30px;
}


.underline {
  display: inline;
  position: relative;
  overflow: hidden;
}
.underline:after {
  content: "";
  position: absolute;
  z-index: 0;
  right: 0;
  width: 0;
  bottom: -8px;
  background: cyan;
  height: 5px;
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

.btn-outline-success {
  outline: none;
  border-style: none;
}
@import url("https://fonts.googleapis.com/css?family=Roboto");

/*----------multi-level-accordian-menu------------*/
#navbarSupportedContent {
  overflow: hidden;
}
#navbarSupportedContent li {
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 10px;
  float: left;
}

.btn {
  margin-left: 10px;
  padding: 10px;
  font-size: 20px;
}
</style>
