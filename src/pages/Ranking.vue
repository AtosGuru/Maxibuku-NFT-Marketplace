<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbListThree.title" :lists="SectionData.breadcrumbData.breadcrumbListThree.navList"></HeroFour>
    </header>
    <RankingSection></RankingSection>
    <!-- footer -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'

export default {
  name: 'Ranking',
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
