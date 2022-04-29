<template>
<section class="related-product-section section-space-b">
    <div class="container">
        <!-- section heading -->
        <SectionHeading :text="SectionData.relatedProductData.title"></SectionHeading>
        <!-- product -->
        <swiper 
            :modules="modules"
            :slides-per-view="4"
            :breakpoints="{
              0: {
                  slidesPerView: 1
              },
              767: {
                  slidesPerView: 2
              },
              992: {
                  slidesPerView: 3
              },
              1200: {
                  slidesPerView: 4
              }
            }"
            :pagination="{ clickable: true }">
            <swiper-slide v-for="item in SectionData.productData.products" :key="item.id">
                <div class="card card-full">
                    <div to="item.path" class="card-image">
                        <img :src="item.img" class="card-img-top" alt="art image">
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title text-truncate mb-0">{{ item.title  }}</h5>
                        <div class="card-author mb-1 d-flex align-items-center">
                            <span class="me-1 card-author-by">By</span>
                            <div class="custom-tooltip-wrap">
                                <router-link :to="item.authorLink" class="custom-tooltip author-link">{{ item.author }}</router-link>
                            </div>     
                        </div><!-- end card-author -->
                        <div class="card-price-wrap d-flex align-items-center justify-content-between mb-3">
                          <div class="me-2">
                              <span class="card-price-title">Price</span>
                              <span class="card-price-number">{{ item.price }}</span>
                          </div>
                          <div>
                              <span class="card-price-title">Current bid</span>
                              <span class="card-price-number">{{ item.priceTwo }} ETH</span>
                          </div>
                        </div><!-- end card-price-wrap -->
                       <router-link to="item.path" class="btn btn-sm btn-primary">Place bid</router-link>
                    </div><!-- end card-body -->
                    <router-link
                    class="details"
                    :to="{
                        name: 'ProductDetail',
                        params: {
                        id: item.id,
                        title: item.title,
                        metaText: item.metaText,
                        price: item.price,
                        priceTwo: item.priceTwo,
                        imgLg: item.imgLg,
                        metaText: item.metaText,
                        metaTextTwo: item.metaTextTwo,
                        metaTextThree: item.metaTextThree,
                        content: item.content,
                        }
                    }"
                >
                </router-link>
                </div><!-- end card -->
            </swiper-slide>
        </swiper>
    </div><!-- .container -->
</section><!-- end related-product-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
// core version + navigation, pagination modules:
import SwiperCore, { Pagination } from 'swiper';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'RelatedProduct',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SectionData
    }
  },
  setup() {
    return{
       modules: [Pagination]
    }
  }
}
</script>

<style lang="css" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
 }
 .author-link {
   z-index: 2;
   position: relative;
 }
</style>