<template>
    <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.userActivityItems.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap pt-2">
                            <ul class="nav nav-tabs nav-tabs-s3 mb-2" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.userActivityTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }}</button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4 tab-content-desktop" id="myTabContent">
                                <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                                    <div class="activity-tab-wrap">
                                        <div class="card card-creator-s1 mb-4" v-for="item in SectionData.userActivityItems.allData" :key="item.id">
                                            <div class="card-body d-flex align-items-center">
                                                <div class="avatar avatar-1 flex-shrink-0">
                                                    <img :src="item.img" alt="avatar">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="card-s1-title">{{ item.title }}</h6>
                                                    <p class="card-s1-text">You bought <router-link to="/product-details-v1-1" class="btn-link fw-medium">{{ item.title }}</router-link> from <router-link to="/author" class="btn-link fw-medium">{{ item.author }}</router-link> for <span class="fw-medium">$250.00</span></p>
                                                    <p class="card-s1-text">{{ item.timeText }}</p>
                                                </div>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end activity-tab-wrap -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                                    <div class="activity-tab-wrap">
                                        <div class="card card-creator-s1 mb-4" v-for="item in SectionData.userActivityItems.followingData" :key="item.id">
                                            <div class="card-body d-flex align-items-center">
                                                <div class="avatar avatar-1 flex-shrink-0">
                                                    <img :src="item.img" alt="avatar">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="card-s1-title">{{ item.title }}</h6>
                                                    <p class="card-s1-text">Started following <router-link to="/author">{{ item.subTitle }}</router-link></p>
                                                    <p class="card-s1-text">{{ item.timeText }}</p>
                                                </div>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end activity-tab-wrap -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="bidding" role="tabpanel" aria-labelledby="bidding-tab">
                                    <div class="activity-tab-wrap">
                                        <div class="card card-creator-s1 mb-4" v-for="item in SectionData.userActivityItems.biddingData" :key="item.id">
                                            <div class="card-body d-flex align-items-center">
                                                <div class="avatar avatar-1 flex-shrink-0">
                                                    <img :src="item.img" alt="avatar">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="card-s1-title">{{ item.title }}</h6>
                                                    <p class="card-s1-text">Bid placed by <router-link to="/author">{{ item.subTitle }}</router-link> for 0.001 ETH</p>
                                                    <p class="card-s1-text">{{ item.timeText }}</p>
                                                </div>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end activity-tab-wrap -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="sales" role="tabpanel" aria-labelledby="sales-tab">
                                    <div class="activity-tab-wrap">
                                        <div class="card card-creator-s1 mb-4" v-for="item in SectionData.userActivityItems.salesData" :key="item.id">
                                            <div class="card-body d-flex align-items-center">
                                                <div class="avatar avatar-1 flex-shrink-0">
                                                    <img :src="item.img" alt="avatar">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="card-s1-title">{{ item.title }}</h6>
                                                    <p class="card-s1-text">Purchased by <router-link to="/author">{{ item.subTitle }}</router-link> for 0.145 ETH</p>
                                                    <p class="card-s1-text">{{ item.timeText }}</p>
                                                </div>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end activity-tab-wrap -->
                                </div><!-- end tab-pane -->
                            </div><!-- end tab-content -->
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'UserActivitySection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
