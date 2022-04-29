<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-gradient">
          <HeaderMain></HeaderMain>
          <!-- hero -->
          <Hero></Hero>
        </header>
         <!-- product  -->
        <section class="section-space trending-section">
            <div class="container">
                <!-- section heading -->
                <SectionHeading :text="SectionData.productData.title" :content="SectionData.productData.content" isMargin="mb-3"></SectionHeading>
                <!-- product -->
                <ProductsContainer></ProductsContainer>
                <div class="text-center mt-5">
                    <ButtonLink :text="SectionData.productData.btnText" :link="SectionData.productData.btnLink" classname="btn-link btn-link-s1"></ButtonLink>
                </div>
            </div><!-- .container -->
        </section><!-- trending-section -->
         <!-- FeaturedCreators  -->
        <FeaturedCreators></FeaturedCreators>
        <!-- Blog  -->
        <section class="section-space-b blog-section">
            <div class="container">
                <!-- section heading -->
                <SectionHeading :text="SectionData.blogData.title" :content="SectionData.blogData.content" isMargin="mb-3"></SectionHeading>
                <!-- blog section -->
                <BlogSectionSlider></BlogSectionSlider>
                <div class="text-center mt-5">
                    <ButtonLink :text="SectionData.blogData.btnText" link="/blog" classname="btn-link btn-link-s1"></ButtonLink>
                </div>
            </div><!-- .container -->
        </section><!-- end blog-section -->
        <!-- Cta  -->
        <Cta class="section-space-b bg-pattern" :title="SectionData.ctaData.title" :content="SectionData.ctaData.content" :btntext="SectionData.ctaData.btnText" :btnlink="SectionData.ctaData.btnLink"></Cta>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

import Hero from '@/components/section/Hero.vue'
export default {
  name: 'Home-v3',
  components: {
    Hero
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>