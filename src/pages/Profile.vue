<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-pattern-3">
          <!-- Header main -->
          <HeaderDashboard></HeaderDashboard>
          <!-- hero -->
          <AuthorHero avatarSize="avatar-3" :isCopyInput="true" :coverimg="SectionData.authorPersonalData.coverImg" :img="SectionData.authorPersonalData.img" :title="SectionData.authorPersonalData.title" :username="SectionData.authorPersonalData.userName" :btntext="SectionData.authorPersonalData.btnText" :btnlink="SectionData.authorPersonalData.btnLink"></AuthorHero>
        </header>
        <!-- Author section  -->
        <ProfileSection></ProfileSection>
        <!-- Footer  -->
        <Footer></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Profile',
  data () {
    return {
      SectionData
    }
  }
}
</script>
