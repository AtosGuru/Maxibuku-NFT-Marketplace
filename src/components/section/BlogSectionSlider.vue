<template>
<swiper 
  :modules="modules"
  :slides-per-view="3"
  :breakpoints="{
    0: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }"
  :pagination="{ clickable: true }">
        <swiper-slide v-for="item in SectionData.blogData.blogList" :key="item.id">
            <div class="card card-full card-blog">
                            <router-link :to="item.btnLink" class="d-block card-image">
                                <img :src="item.img" class="card-img-top" alt="">
                                <div class="bg-dark-transparent card-overlay">
                                    <div class="d-flex align-items-center card-author">
                                        <div class="flex-shrink-0 avatar avatar-2">
                                            <img :src="item.avatar" alt="" class="rounded-circle">
                                        </div>
                                        <div class="flex-grow-1 ms-2 text-white">
                                            <span>{{ item.userName }}</span>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                            <div class="card-body card-body-s1">
                                <h4 class="card-title mb-3"><router-link :to="item.btnLink">{{ item.title }}</router-link></h4>
                                <p class="card-text">{{ item.desc }}</p>
                            </div><!-- end card-body -->
                            <hr class="my-0">
                            <div class="card-body card-body-s1 py-3">
                                <div class="card-action-info">
                                    <span><em class="ni ni-calender-date me-1"></em>{{ item.date}}</span>
                                    <span>
                                        <span class="me-3"><em class="ni ni-comments me-1"></em>{{ item.numberText }}</span>
                                        <span><em class="ni ni-heart me-1"></em>{{ item.numberTextTwo }}</span>
                                    </span>
                                </div><!-- end card-action-info -->
                            </div><!-- end card-body -->
                            <router-link
                            class="details"
                            :to="{
                                name: 'NewsDetail',
                                params: {
                                id: item.id,
                                title: item.title,
                                img: item.img,
                                avatar: item.avatar,
                                userName: item.userName,
                                }
                            }"
                          >
                          </router-link>
                        </div><!-- end card -->
        </swiper-slide>
        <!-- pagination -->
    </swiper>
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
  name: 'BlogSectionSlider',
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
</style>