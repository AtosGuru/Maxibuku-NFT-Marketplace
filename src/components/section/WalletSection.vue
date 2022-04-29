<template>
<section class="wallet-section section-space-b">
            <div class="container">
                <div class="row g-gs">
                    <div class="col-sm-6 col-md-4 col-xl-4" v-for="item in SectionData.walletDataTwo" :key="item.id">
                        <router-link :to="item.path" class="card-media card-full card-media-s1 flex-column justify-content-center flex-wrap p-4">
                            <div class="d-flex flex-column align-items-center justify-content-center py-1">
                                <img :src="item.img" alt="logo" class="card-media-img flex-shrink-0 me-0 mb-3">
                                <h6>{{ item.title }}</h6>
                            </div>
                            <div class="card-media-body flex-grow-0 mt-3">
                                 <span class="btn btn-sm btn-outline-secondary">{{ item.btnText }}</span>
                            </div>
                        </router-link><!-- end card-media -->
                    </div>
                </div>
            </div><!-- .container -->
        </section><!-- end wallet-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'WalletSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
