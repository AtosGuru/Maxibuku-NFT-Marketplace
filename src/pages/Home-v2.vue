<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-gradient-2">
          <!-- Header main -->
          <HeaderMain isTransparent="is-transparent"></HeaderMain>
          <!-- hero -->
          <heroThree></heroThree>
        </header>
        <!-- Category  -->
        <Category classname="section-space-b"></Category>
        <!-- Recent Item Section  -->
        <RecentItemSection></RecentItemSection>
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
        <HowItWork classname="col-lg-3" :title="SectionData.howItWorkData.titleTwo" :subtitle="SectionData.howItWorkData.content" gutterBottom="mb-3"></HowItWork>
        <!-- funFact  -->
        <funFactSection :isBg="true" class="section-space" classname="col-lg-4 col-sm-6" :items="SectionData.funfactData.funfactList"></funFactSection>
        <!-- Newsletter  -->
        <Newsletter></Newsletter>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import heroThree from '@/components/section/HeroThree.vue'

export default {
  name: 'Home-v2',
  components: {
    heroThree
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>