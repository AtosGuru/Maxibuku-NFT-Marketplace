<template>
<div class="col-lg-8">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.redeemEnftyData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <p class="fs-14 mb-3">{{ SectionData.redeemEnftyData.content }}</p>
                            <p class="fs-14 mb-4">{{ SectionData.redeemEnftyData.contentTwo }}</p>
                            <h5 class="mb-1">{{ SectionData.redeemEnftyData.titleTwo }}</h5>
                            <p class="fs-14 mb-3">{{ SectionData.redeemEnftyData.contentThree }}</p>
                            <div class="row">
                                <div class="col-lg-5 col-md-6">
                                  <v-select class="generic-select" v-model="selected" :options="options"></v-select>
                                </div>
                            </div>
                            <p class="fs-14 mt-3">{{ SectionData.redeemEnftyData.contentFour }}</p>
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'RedeemSection',
  data () {
    return {
      SectionData,
      selected: 'Redemptions',
      options: [
        'Redemptions',
        'Mad Dog Redemption',
        'Blau Everything',
        'Jon Burgerman Offer',
        'Lans King Capsule',
        'Tommy Wilson Teams'
      ]
    }
  }
}
</script>
