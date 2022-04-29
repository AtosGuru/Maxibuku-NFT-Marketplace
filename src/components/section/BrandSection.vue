<template>
<section class="brand-section section-space bg-gray">
            <div class="container">
                <!-- section heading -->
                <SectionHeading :text="SectionData.brandData.title" :content="SectionData.brandData.content" isMargin="mb-3"></SectionHeading>
                <div class="row g-gs">
                    <div class="col-6 col-md-3 col-sm-4" v-for="item in SectionData.brandData.brandList" :key="item.id">
                        <div class="client-logo-item text-center">
                            <img :src="item.img" alt="" class="img-fluid">
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end brand-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'brandSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
