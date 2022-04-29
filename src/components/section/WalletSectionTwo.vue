<template>
<section class="wallet-section section-space-b">
            <div class="container">
                <div class="row g-gs">
                    <div class="col-lg-4 col-md-6" v-for="item in SectionData.walletData" :key="item.id">
                        <router-link :to="item.path" class="card card-full text-center">
                            <div class="card-body card-body-s1 d-block">
                                <img class="mb-4" :src="item.img" alt="">
                                <h4 class="card-title mb-3">{{ item.title }}</h4>
                                <p class="card-text card-text-s1 mb-4">{{ item.content }}</p>
                                <span class="btn btn-primary"> {{ item.btnText }}</span>
                            </div><!-- end card-body -->
                        </router-link><!-- end card -->
                    </div><!-- end col -->
                </div><!-- row -->
            </div><!-- .container -->
        </section><!-- end wallet-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'WalletSectionTwo',
  data () {
    return {
      SectionData
    }
  }
}
</script>
