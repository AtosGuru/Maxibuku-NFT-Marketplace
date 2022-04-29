/* eslint-disable no-undef */
<template>
    <swiper :modules="modules"
    :slides-per-view="1"
    :loop="true"
    :navigation="{ clickable: true }" class="swiper-button-s1">
        <swiper-slide v-for="product in SectionData.featuredItemData" :key="product.id">
            <router-link to="item-details" class="card">
                <img :src="product.img" alt="" class="card-img-top">
                <div class="card-body d-flex align-items-center">
                    <div class="avatar flex-shrink-0">
                        <img :src="product.avatar" alt="">
                    </div>
                    <div class="ms-2">
                        <h5>{{ product.title }}</h5>
                        <span class="fs-13 text-secondary">{{ product.author }}</span>
                    </div>
                </div><!-- end card-body -->
            </router-link><!-- end card -->
        </swiper-slide>
    </swiper>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

// core version + navigation, pagination modules:
import SwiperCore, { Navigation } from 'swiper';

// configure Swiper to use modules
SwiperCore.use([Navigation]);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'FeaturedItemSlider',
  components: {
      Swiper,
      SwiperSlide,
  },
  data () {
    return {
      SectionData
    }
  },
  setup() {
      return{
        modules: [Navigation]
      }
    }
}
</script>