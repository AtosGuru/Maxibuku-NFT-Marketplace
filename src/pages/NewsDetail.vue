<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <div class="hero-wrap sub-header">
         <div class="container">
            <div class="hero-content text-center py-0">
                <h1>{{ title }}</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-s1 justify-content-center mt-3 mb-0">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="blog">Blog</router-link></li>
                        <li class="breadcrumb-item">{{ title }}</li>
                    </ol>
                </nav>
            </div><!-- hero-content -->
        </div><!-- .container-->
    </div><!-- end hero-wrap -->
    </header>
    <!-- Blog  -->
    <section class="section-space-b blog-section">
        <div class="container">
            <!-- blog section -->
            <div class="row">
                <div class="col-lg-8">
                    <div class="single-entry mb-5 mb-lg-0">
                            <img :src="img" class="w-100 rounded mb-3" alt="">
                            <p class="single-entry-text mb-2 text-black d-flex flex-wrap align-items-center">Published <span class="dot-separeted"></span> 30 August 2021 <span class="dot-separeted"></span> <a href="#" class="text-black">3 Comments</a> <span class="dot-separeted"></span> By Admin</p>
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
                </div><!-- end col-lg-8 -->
                <div class="col-lg-4 ps-lg-4">
                    <div class="sidebar row">
                            <div class="col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidget.title }}</h4>
                                        <form action="#">
                                            <div class="input-group">
                                                <input type="text" class="form-control form-control-s1" :placeholder="SectionData.sidebarData.sidebarWidget.inputText">
                                                <button type="button" class="input-group-text"><em class="ni ni-search"></em></button>
                                            </div>
                                        </form>
                                    </div><!-- end card-body -->
                                </div><!-- end card -->
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <div class="avatar avatar-1 mb-3">
                                            <img :src="avatar" alt="">
                                        </div>
                                        <h4 class="mb-2">{{ userName }}</h4>
                                        <p class="sidebar-text mb-3">{{ SectionData.sidebarData.sidebarWidgetTwo.content }}</p>
                                        <ul class="styled-icon">
                                            <li v-for="list in SectionData.sidebarData.sidebarWidgetTwo.icons" :key="list.id"><router-link :to="list.path"><em class="icon ni" :class="list.icon"></em></router-link></li>
                                        </ul>
                                    </div><!-- end card-body -->
                                </div>
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidgetThree.title }}</h4>
                                        <ul class="list-item">
                                            <li v-for="list in SectionData.sidebarData.sidebarWidgetThree.catList" :key="list.id"><router-link :to="list.path"><em class="ni ni-chevron-right me-1"></em> {{ list.title }}</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidgetFour.title }}</h4>
                                        <ul class="posts">
                                            <li class="d-flex align-items-center" v-for="item in SectionData.sidebarData.sidebarWidgetFour.postList" :key="item.id">
                                                <router-link :to="item.path" class="thumbnail flex-shrink-0 me-3">
                                                    <img :src="item.img" alt="">
                                                </router-link>
                                                <div class="flex-grow-1">
                                                    <h6 class="posts-title mb-1"><router-link :to="item.path">{{ item.title }}</router-link></h6>
                                                    <p class="posts-meta">{{ item.date }}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidgetFive.title }}</h4>
                                        <ul class="tag-list">
                                            <li v-for="tag in SectionData.sidebarData.sidebarWidgetFive.tagList" :key="tag.id"><router-link :to="tag.path" class="tag-link">{{ tag.title }}</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!-- end sidebar-widget -->
                        </div><!-- end sidebar -->
                </div><!-- end col-lg-4 -->
            </div><!-- row -->
        </div><!-- .container -->
    </section><!-- end blog-section -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'NewsDetail',
  data () {
    return {
      SectionData,
      id: this.$route.params.id,
      title: '',
      img: '',
      avatar: '',
      userName: ''
    }
  },
  mounted() {
    SectionData.blogData.blogListThree.forEach(element => {
        if(this.id == element.id){
            this.img = element.img;
            this.title = element.title;
            this.avatar = element.avatar;
            this.userName = element.userName;
        }
    });
  }
}
</script>
