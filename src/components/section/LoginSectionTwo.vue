<template>
    <section class="login-section section-space-b pt-4 pt-md-5 mt-md-3">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-8 col-xl-6 mx-auto">
                        <ul class="row g-gs nav nav-tabs nav-tabs-s2 justify-content-center" id="myTab" role="tablist">
                            <li class="nav-item col-sm-6 col-6" role="presentation" v-for="list in SectionData.loginTabNav" :key="list.id">
                                <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">
                                    <img :src="list.img" alt="" class="icon icon-svg">
                                    <span class="nav-link-title mt-1 d-block">{{ list.title }}</span>
                                </button>
                            </li>
                        </ul>
                        <div class="gap-2x"></div><!-- end gap -->
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="meta-mask" role="tabpanel" aria-labelledby="meta-mask-tab">
                                <div class="card-media card-media-s3 text-center">
                                    <div class="card-media-body">
                                        <h3 class="mb-4">{{ SectionData.loginDataTwo.title }}</h3>
                                        <router-link :to="SectionData.loginDataTwo.btnLink" class="btn btn-primary">{{ SectionData.loginDataTwo.btnText }}</router-link>
                                        <p class="mt-3"><router-link :to="SectionData.loginDataTwo.btnTextLink" target="_blank" class=" fs-13 btn-link fw-regular">{{ SectionData.loginDataTwo.btnTextTwo }}</router-link></p>
                                    </div>
                                </div><!-- end card-media -->
                            </div><!-- end tab-pane -->
                            <div class="tab-pane fade" id="wallet-connect" role="tabpanel" aria-labelledby="wallet-connect-tab">
                                <div class="card-media card-media-s3 text-center">
                                    <div class="card-media-body">
                                        <h3 class="mb-4">{{ SectionData.loginDataTwo.titleTwo }}</h3>
                                        <router-link :to="SectionData.loginDataTwo.btnLink" class="btn btn-primary">{{ SectionData.loginDataTwo.btnText }}</router-link>
                                        <p class="mt-3"><router-link :to="SectionData.loginDataTwo.btnTextLink" target="_blank" class=" fs-13 btn-link fw-regular">{{ SectionData.loginDataTwo.btnTextThree }}</router-link></p>
                                    </div>
                                </div><!-- end card-media -->
                            </div><!-- end tab-pane -->
                        </div><!-- end tab-content -->
                    </div><!-- end col-lg-7 -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end login-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'LoginSectionTwo',
  data () {
    return {
      SectionData
    }
  }
}
</script>