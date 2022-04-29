<template>
    <div class="cta-box text-center">
        <h1 class="cta-title mb-4">{{ title }}</h1>
        <p class="cta-text mb-4">{{ content }}</p>
        <ButtonLink :text="btntext" :link="btnLink" class="btn btn-lg btn-primary"></ButtonLink>
    </div><!-- end explore-box -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'CtaSection',
  props: ['title', 'content', 'btntext'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
