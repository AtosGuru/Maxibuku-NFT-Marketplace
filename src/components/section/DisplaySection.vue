<template>
    <div class="col-lg-8">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.displayEnftyData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <p class="fs-14 mb-4" v-html="SectionData.displayEnftyData.content"></p>
                            <h5 class="mb-3">{{ SectionData.displayEnftyData.titleTwo }}</h5>
                            <form action="#">
                                <div class="row g-4">
                                    <div class="col-md-4 col-sm-6">
                                        <input type="text" class="form-control form-control-s1" placeholder="Display code">
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <button class="btn btn-primary">{{ SectionData.displayEnftyData.btnText }}</button>
                                    </div>
                                </div>
                            </form>
                            <hr class="my-4">
                            <h5 class="mb-3">{{ SectionData.displayEnftyData.titleThree }}</h5>
                            <a href="#" class="btn btn-outline-dark">{{ SectionData.displayEnftyData.btnTextTwo }}</a>
                            <p class="fs-14 mt-2">{{ SectionData.displayEnftyData.contentTwo }}</p>
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'DisplaySection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
