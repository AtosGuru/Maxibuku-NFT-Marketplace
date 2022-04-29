<template>
    <div class="row g-gs">
        <div class="col-lg-3 col-md-4" v-for="item in SectionData.productData.productListTwo" :key="item.id">
            <div class="card card-full">
                <router-link :to="item.path" class="d-block">
                    <img :src="item.img" class="card-img-top" alt="art image">
                </router-link>
                <div class="card-body p-4">
                    <h5 class="card-title text-truncate mb-0"><router-link :to="item.path">{{ item.title  }}</router-link></h5>
                    <div class="card-author mb-1 d-flex align-items-center">
                        <span class="me-1 card-author-by">{{ item.byText }}</span>
                        <div class="custom-tooltip-wrap">
                            <router-link :to="item.authorLink" class="custom-tooltip author-link">{{ item.authorText }}</router-link>
                        </div><!-- end custom-tooltip-wrap -->
                    </div><!-- end card-author -->
                    <div class="card-price-wrap d-flex align-items-center justify-content-between mb-3">
                        <div class="me-2">
                            <span class="card-price-title">{{ item.priceText }}</span>
                            <span class="card-price-number">{{ item.givenPrice }}</span>
                        </div>
                        <div>
                            <span class="card-price-title">{{ item.priceTextTwo }}</span>
                            <span class="card-price-number">{{ item.currentPrice }}</span>
                        </div>
                    </div><!-- end card-price-wrap -->
                    <router-link :to="item.path" class="btn btn-sm btn-primary">{{ item.btnText }}</router-link>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
    </div>
</template>
<script>

// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ProductsTwo',
  data () {
    return {
      SectionData
    }
  }
}
</script>