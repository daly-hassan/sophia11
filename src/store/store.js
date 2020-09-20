import Vue from 'vue';
import Vuex from 'vuex';
import carousels from './modules/carousels';
import products from './modules/products';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        baseURL: 'https://daly-hassan.github.io/sophia11/',
        assetsURL: 'https://daly-hassan.github.io/sophia11/src/assets/',
        whatsappURL: 'https://wa.me/96181318341',
        facebookURL: 'https://www.facebook.com/handmadegifta/',
        instagramURL: 'https://www.instagram.com/sophia.eleven/',
        arabSalimURL: 'https://www.google.com/maps/place/Arab+Salim/data=!4m2!3m1!1s0x151eebb188670f91:0xfe670760e9571ef8?sa=X&ved=2ahUKEwi7vc7Qr9TrAhWi8uAKHcDXDiUQ8gEwAHoECAsQAQ',
    },
    modules: {
        carousels: carousels,
        products: products,
    }
})