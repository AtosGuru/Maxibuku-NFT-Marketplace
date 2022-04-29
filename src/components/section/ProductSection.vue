<template>
    <section class="section-space trending-section" :class="classname">
            <div class="container">
                <!-- section heading -->
                <SectionHeading :text="SectionData.productData.title"></SectionHeading>
                <!-- product -->
                <Products></Products>
                <div class="text-center mt-5">
                    <ButtonLink :text="SectionData.productData.btnText" link="/explore" classname="btn-link btn-link-s1"></ButtonLink>
                </div>
            </div><!-- .container -->
    </section><!-- trending-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ProductSection',
  props: ['classname'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
