<template>
    <section>
            <div class="container">
                <div class="cta-box text-center">
                    <h1 class="cta-title mb-4">{{ title }}</h1>
                    <p class="cta-text mb-4">{{ content }}</p>
                    <ButtonLink classname="btn btn-lg btn-primary" :link="btnlink" :text="btntext"></ButtonLink>
                </div><!-- end explore-box -->
            </div><!-- .container -->
    </section><!-- end cta-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Cta',
  props: ['title', 'content', 'btntext', 'btnlink'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
