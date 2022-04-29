<template>
<section class="team-section section-space">
            <div class="container">
                <!-- section heading -->
                <SectionHeading :text="SectionData.teamData.title" :content="SectionData.teamData.content" isMargin="mb-3"></SectionHeading>
                <div class="row g-gs">
                    <div class="col-6 col-md-6 col-lg-4" v-for="item in SectionData.teamData.teamList" :key="item.id">
                        <div class="team-item text-center">
                            <img :src="item.img" alt="" class="team-item-img mb-4">
                            <h4 class="mb-1 text-truncate">{{ item.title }}</h4>
                            <p class="fs-13 text-truncate">{{ item.meta }}</p>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end team-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'TeamSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
