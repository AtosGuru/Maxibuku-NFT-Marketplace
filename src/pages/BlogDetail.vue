<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour :title="SectionData.breadcrumbData.breadcrumbListSix.title" :lists="SectionData.breadcrumbData.breadcrumbListSix.navList"></HeroFour>
    </header>
    <!-- Blog  -->
    <section class="section-space-b blog-section">
        <div class="container">
            <!-- blog section -->
            <div class="row">
                <div class="col-lg-8">
                    <BlogDetailSection></BlogDetailSection>
                </div><!-- end col-lg-8 -->
                <div class="col-lg-4 ps-lg-4">
                    <Sidebar></Sidebar>
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
import HeroFour from '@/components/section/HeroFour.vue'

export default {
  name: 'BlogDetail',
  components: {
    HeroFour
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
