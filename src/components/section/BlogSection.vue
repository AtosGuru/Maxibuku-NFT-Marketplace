<template>
        <div class="row g-gs">
                    <div class="col-lg-4 col-md-6" v-for="item in items" :key="item.id">
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
                        </div><!-- end card -->
                    </div><!-- end col -->
        </div><!-- row -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'BlogSection',
  props: ['items'],
  data () {
    return {
      SectionData,

    }
  },
}
</script>
