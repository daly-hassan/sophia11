<template>
  <div id="sophiaFooter">
    <div class="contact-page-section sec-spacer" >
      <div class="container">
        <div class="row contact-address-section">
          <div class="col-md-6 col-lg col-sm-6">
            <div
              class="contact-info contact-address container rounded-lg text-center shadow-lg p-3"
            >
              <img :src="$store.state.assetsURL + 'images/extra/maps-lines.png'">
              <hr />
              <a
                :href="$store.state.arabSalimURL"
                target="_blank"
                class="underline"
                >ARAB SALIM</a
              >
            </div>
          </div>
          <div class="col-md-6 col-lg col-sm-6">
            <div
              class="contact-info container rounded-lg text-center shadow-lg p-3"
            >
              <img :src="$store.state.assetsURL + 'images/extra/facebook.png'">
              <hr />
              <a class="underline" :href="$store.state.facebookURL" target="_blank"
                >FACEBOOK</a
              >
            </div>
          </div>
          
          <div class="col-md-6 col-lg col-sm-6">
            <div
              class="contact-info container rounded-lg text-center shadow-lg p-3"
            >
              <img :src="$store.state.assetsURL + 'images/extra/instagram.png'">
              <hr />
              <a :href="$store.state.instagramURL" target="_blank" class="underline"
                >INSTAGRAM</a
              >
            </div>
          </div>
          <div class="col-md-6 col-lg col-sm-6">
            <div
              class="contact-info contact-address container rounded-lg text-center shadow-lg p-3"
            >
              <img :src="$store.state.assetsURL + 'images/extra/whatsapp.png'">
              <hr>
              <a
                :href="$store.state.whatsappURL"
                target="_blank"
                class="underline"
                >WHATSAPP</a
              >
            </div>
          </div>
          
          <div class="col-md-6 col-lg col-sm-6">
            <div
              class="contact-info contact-phone container rounded-lg text-center shadow-lg p-3"
            >
              <img :src="$store.state.assetsURL + 'images/extra/phone-square.png'">
              <hr />
              <a class="underline" href="tel:+961-81-318-341"
                >81 318 341</a
              >
            </div>
          </div>
          <div class="col-md-6 col-lg col-sm-6">
            <div
              class="contact-info contact-email container rounded-lg text-center shadow-lg p-3"
            >
              <img :src="$store.state.assetsURL + 'images/extra/paper-plane.png'" style="width: 2.5rem">
              <hr />
              <a href="mailto:daly.sophia11@gmail.com" class="underline"
                >daly.sophia11</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "sophiaFooter",
  data() {
    return {};
  }
};
</script>

<style scoped>
.contact-page-section,
.sec-spacer {
  background-color:black;
  padding: 0;
}

.contact-address-section {
width: 100%;
padding: 0;
}
a {
  color: rgb(230, 217, 217);
  font-size: 1.2rem;
  text-decoration: none !important;
}

a:hover {
  /* color: white; */
  color: cyan;
}

img {
width: 2rem;
height: 2rem;
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
  bottom: -15px;
  background: white;
  height: 2px;
  transition-property: width;
  transition-duration: 0.4s;
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
