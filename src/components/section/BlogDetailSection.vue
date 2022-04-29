<template>
<div class="single-entry mb-5 mb-lg-0">
                            <img :src="SectionData.blogDetail.img" class="w-100 rounded mb-3" alt="">
                            <p class="single-entry-text mb-2 text-black d-flex flex-wrap align-items-center">Published <span class="dot-separeted"></span> 30 August 2021 <span class="dot-separeted"></span> <a href="#comments" class="text-black">3 Comments</a> <span class="dot-separeted"></span> By Admin</p>
                            <p class="single-entry-text mb-3">{{ SectionData.blogDetail.content }}</p>
                            <p class="single-entry-text mb-3">{{ SectionData.blogDetail.contentTwo }}</p>
                            <blockquote class="blockquote">
                                <p>{{ SectionData.blogDetail.quoteText }}</p>
                            </blockquote>
                            <p class="single-entry-text mb-4">{{ SectionData.blogDetail.contentThree }}</p>
                            <div class="row g-gs mb-4">
                                <div class="col-lg-6 col-sm-6" v-for="img in SectionData.blogDetail.imgList" :key="img.id">
                                    <img :src="img" class="w-100 rounded" alt="">
                                </div>
                            </div><!-- end row -->
                            <p class="single-entry-text mb-3">{{ SectionData.blogDetail.contentFour }}</p>
                            <h4 class="mb-2">{{ SectionData.blogDetail.title }}</h4>
                            <p class="single-entry-text mb-2">{{ SectionData.blogDetail.contentFive }}</p>
                            <div class="gap-2x"></div>
                            <hr class="mt-0">
                            <div class="d-flex flex-wrap align-items-center justify-content-between">
                                <ul class="tag-list my-1">
                                    <li class="me-2 text-black fw-semibold">Tags:</li>
                                    <li v-for="list in SectionData.blogDetail.tags" :key="list.id"><router-link :to="list.path" class="tag-link">{{ list.title }}</router-link></li>
                                </ul>
                                <ul class="styled-icon my-1">
                                    <li class="me-2 text-black fw-semibold">Share:</li>
                                    <li v-for="list in SectionData.blogDetail.shares" :key="list.id"><router-link :to="list.path"><em class="icon ni" :class="list.icon"></em></router-link></li>
                                </ul>
                            </div>
                            <hr>
                            <div class="comment-wrapper mt-5" id="comments">
                                <h4 class="mb-4">{{ SectionData.commentData.title }}</h4>
                                <!-- comment -->
                                <Comments class="mb-5"></Comments>
                                <div class="add-comment-wrap">
                                    <h4 class="mb-1">{{ SectionData.formData.title }}</h4>
                                    <p class="comment-desc">{{ SectionData.formData.content }}</p>
                                   <!-- form -->
                                   <Form class="mt-4"></Form>
                                </div>
                            </div><!-- end comment-wrapper -->
                        </div><!-- end single-entry -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'BlogDetailSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
