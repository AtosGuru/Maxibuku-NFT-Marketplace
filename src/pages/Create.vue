<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- create -->
    <section class="create-section bg-pattern section-space-b pt-4 pt-md-5 mt-md-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 col-xl-6 mx-auto">
                        <div class="create-content-box">
                            <div class="section-head-sm">
                                <router-link :to="SectionData.createData.path" class="btn-link fw-semibold"><em class="ni ni-arrow-left"></em> {{SectionData.createData.btnText }}</router-link>
                                <h1 class="mt-2 mb-3">{{SectionData.createData.title }}</h1>
                                <p v-html="SectionData.createData.content"></p>
                            </div>
                            <div class="row g-gs">
                                <div class="col-sm-6 col-6" v-for="item in SectionData.createData.cards" :key="item.id">
                                    <router-link :to="item.path" class="card text-center card-full">
                                        <div class="card-body card-body-s1 d-block">
                                            <img class="mb-4 create-img" :src="item.img" alt="">
                                            <span class="text-black fw-bold d-block">{{item.title }}</span>
                                        </div>
                                    </router-link>
                                </div><!-- enbd col -->
                            </div><!-- end row -->
                            <p class="mt-5">{{SectionData.createData.contentTwo }}</p>
                        </div><!-- end create-content-box -->
                    </div><!-- end col -->
                </div><!-- row-->
            </div><!-- end container -->
        </section><!-- end create-section -->
    <!-- Footer  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Create',
  data () {
    return {
      SectionData
    }
  }
}
</script>
