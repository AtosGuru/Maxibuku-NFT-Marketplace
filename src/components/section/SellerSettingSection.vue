<template>
  <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.sellerSettingData.title }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <p class="fs-14 mb-3" v-html="SectionData.sellerSettingData.content"></p>
                            <p class="fs-14 mb-3">{{ SectionData.sellerSettingData.contentTwo }}</p>
                            <p class="fs-14 mb-3">{{ SectionData.sellerSettingData.contentThree }}</p>
                            <ul class="btns-group btns-group-full-mobile">
                                <li>
                                   <v-select class="generic-select generic-select-s2" v-model="selected" :options="options"></v-select>
                                </li>
                                <li>
                                    <a href="#" class="btn btn-primary">{{ SectionData.sellerSettingData.btnText }}</a>
                                </li>
                            </ul>
                            <hr class="my-4">
                            <p class="fs-13" v-html="SectionData.sellerSettingData.contentFour"></p>
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'SellerSettingSection',
  data () {
    return {
      SectionData,
      selected: 'Select a Country',
      options: [
        'Select a Country',
        'Afghanistan',
        'Åland Islands',
        'Albania',
        'American Samoa',
        'United States of America',
        'Uruguay',
        'Uzbekistan'
      ]
    }
  }
}
</script>
