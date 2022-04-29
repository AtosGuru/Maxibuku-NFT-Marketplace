<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-pattern-3">
          <!-- Header main -->
          <HeaderMain></HeaderMain>
          <!-- hero -->
          <AuthorHero avatarSize="avatar-3" :isDropdown="true" :isCopyInput="true" :coverimg="SectionData.authorPublicData.coverImg" :img="SectionData.authorPublicData.img" :title="SectionData.authorPublicData.title" :username="SectionData.authorPublicData.userName" :btntext="SectionData.authorPublicData.btnText" :btnlink="SectionData.authorPublicData.btnLink"></AuthorHero>
        </header>
        <!-- Author section  -->
        <AuthorSection></AuthorSection>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Author',
  data () {
    return {
      SectionData
    }
  }
}
</script>
