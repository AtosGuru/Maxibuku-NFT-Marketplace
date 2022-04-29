<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-gradient-2">
          <!-- Header main -->
          <HeaderMain isTransparent="is-transparent"></HeaderMain>
          <!-- hero -->
          <HeroTwo></HeroTwo>
        </header>
        <!-- Featured  -->
        <Featured></Featured>
        <!-- product  -->
        <section class="section-space trending-section bg-gray">
            <div class="container">
                <!-- section heading -->
                <SectionHeading :text="SectionData.productData.title" :content="SectionData.productData.content" isMargin="mb-3"></SectionHeading>
                <!-- product -->
                <ProductsContainer></ProductsContainer>
                <div class="text-center mt-4 mt-md-5">
                    <ButtonLink :text="SectionData.productData.btnText" :link="SectionData.productData.btnLink" classname="btn-link btn-link-s1"></ButtonLink>
                </div>
            </div><!-- .container -->
        </section><!-- trending-section -->
        <!-- HowItWork  -->
        <HowItWork classname="col-lg-3" :title="SectionData.howItWorkData.title" :subtitle="SectionData.howItWorkData.content" gutterBottom="mb-3"></HowItWork>
        <!-- Category  -->
        <Category classname="section-space bg-gray"></Category>
        <!-- Newsletter  -->
        <Newsletter></Newsletter>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroTwo from '@/components/section/HeroTwo.vue'

export default {
  name: 'Home',
  components: {
    HeroTwo
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
