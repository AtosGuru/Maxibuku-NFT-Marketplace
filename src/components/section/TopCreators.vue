<template>
    <section class="top-creator-section section-space-t">
            <div class="container">
                <div class="section-head-sm">
                    <h2>{{ SectionData.creatorData.title }}</h2>
                </div>
                <!-- creators -->
                <Creators></Creators>
            </div><!-- .container -->
        </section><!-- end top-creator-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'TopCreators',
  data () {
    return {
      SectionData
    }
  }
}
</script>
