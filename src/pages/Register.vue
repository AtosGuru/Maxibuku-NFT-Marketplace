<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- Register section -->
    <RegisterSection></RegisterSection>
    <!-- Blog  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Register',
  data () {
    return {
      SectionData
    }
  }
}
</script>
