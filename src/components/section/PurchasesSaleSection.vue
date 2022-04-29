<template>
    <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.purchaseAndSaleData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.purchaseAndSaleTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }}</button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4 tab-content-desktop" id="myTabContent">
                                <div class="tab-pane fade show active" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
                                    <div class="profile-setting-panel">
                                        <div class="history-panel" v-for="item in SectionData.purchaseAndSaleData.purchaseData" :key="item.id">
                                            <span class="history-panel-left">
                                                <em class="ni ni-money me-1"></em>
                                                <span v-html="item.title"></span>
                                            </span>
                                            <span class="history-panel-right">{{ item.dateText }}</span>
                                        </div><!-- end history-panel -->
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="sales" role="tabpanel" aria-labelledby="sales-tab">
                                    <div class="profile-setting-panel">
                                        <div class="history-panel" v-for="item in SectionData.purchaseAndSaleData.salesData" :key="item.id">
                                            <span class="history-panel-left">
                                                <em class="ni ni-money me-1"></em>
                                                <span v-html="item.title"></span>
                                            </span>
                                            <span class="history-panel-right">{{ item.dateText }}</span>
                                        </div><!-- end history-panel -->
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                            </div><!-- end tab-content -->
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'PurchasesSaleSection',
  data () {
    return {
      SectionData,
    }
  },
}
</script>
