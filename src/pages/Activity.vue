<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbListTwo.title" :lists="SectionData.breadcrumbData.breadcrumbListTwo.navList"></HeroFour>
    </header>
    <ActivitySection></ActivitySection>
    <!-- footer -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'

export default {
  name: 'Activity',
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
