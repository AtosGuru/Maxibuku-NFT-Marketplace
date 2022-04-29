<template>
   <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.offerData.mainTitle }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.offerData.tabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }} </button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4" id="myTabContent">
                                <div class="tab-pane fade show active" id="offers-receive" role="tabpanel" aria-labelledby="offers-receive-tab">
                                    <div class="profile-setting-panel">
                                        <div class="alert alert-danger d-flex mb-4" role="alert">
                                            <svg class="flex-shrink-0 me-3" width="30" height="30" viewBox="0 0 24 24" fill="#ff6a8e">
                                                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                                            </svg>
                                            <p class="fs-14" v-html="SectionData.offerData.alertText"></p>
                                        </div><!-- end alert -->
                                        <h3 class="mb-1">{{ SectionData.offerData.title }}</h3>
                                        <p class="mb-4 fs-14">{{ SectionData.offerData.subTitle }}</p>
                                        <div class="row g-gs">
                                            <div class="col-xl-6" v-for="item in SectionData.offerData.receiveItems" :key="item.id">
                                                <div class="card card-full">
                                                    <div class="card-body card-body-s1">
                                                        <p class="mb-3 fs-13 mb-4">{{ item.timeText }}</p>
                                                        <div class="card-media mb-3">
                                                            <div class="card-media-img flex-shrink-0">
                                                                <img :src="item.img" alt="media image">
                                                            </div><!-- card-media-img -->
                                                            <div class="card-media-body">
                                                                <h4><router-link :to="item.path">{{ item.title }}</router-link></h4>
                                                                <p class="fw-medium fs-14">{{ item.addressText }}</p>
                                                                <p class="fs-15">{{ item.addressTextTwo }}</p>
                                                            </div><!-- end card-media-body -->
                                                        </div><!-- end card-media -->
                                                        <div class="card-media mb-3">
                                                            <div class="card-media-body" v-for="actionList in item.actionList" :key="actionList.id">
                                                                <span class="fw-medium fs-13">{{ actionList.title }}</span>
                                                                <p class="fw-medium text-black fs-14">{{ actionList.subTitle }}</p>
                                                            </div>
                                                        </div><!-- end d-flex -->
                                                        <ul class="btns-group">
                                                            <li v-for="list in item.btns" :key="list.id"><a :href="list.path" class="btn-link flex-grow-1 fw-medium fs-13" :class="list.btnClass">{{ list.title }}</a></li>
                                                        </ul>
                                                    </div><!-- end card-body -->
                                                </div><!-- end card -->
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="offers-made" role="tabpanel" aria-labelledby="offers-made-tab">
                                    <div class="profile-setting-panel">
                                        <h3 class="mb-1">{{ SectionData.offerData.titleTwo }}</h3>
                                        <p class="mb-4 fs-14">{{ SectionData.offerData.subTitleTwo }}</p>
                                        <div class="row g-gs">
                                            <div class="col-xl-6" v-for="item in SectionData.offerData.madeItems" :key="item.id">
                                                <div class="card card-full">
                                                    <div class="card-body card-body-s1">
                                                        <p class="mb-3 fs-13 mb-4">{{ item.timeText }}</p>
                                                        <div class="card-media mb-3">
                                                            <div class="card-media-img flex-shrink-0">
                                                                <img :src="item.img" alt="media image">
                                                            </div><!-- card-media-img -->
                                                            <div class="card-media-body">
                                                                <h4><router-link :to="item.path">{{ item.title }}</router-link></h4>
                                                                <p class="fw-medium fs-14">{{ item.addressText }}</p>
                                                                <p class="fs-15">{{ item.addressTextTwo }}</p>
                                                            </div><!-- end card-media-body -->
                                                        </div><!-- end card-media -->
                                                        <div class="card-media mb-3">
                                                            <div class="card-media-body" v-for="actionList in item.actionList" :key="actionList.id">
                                                                <span class="fw-medium fs-13">{{ actionList.title }}</span>
                                                                <p class="fw-medium text-black fs-14">{{ actionList.subTitle }}</p>
                                                            </div>
                                                        </div><!-- end d-flex -->
                                                        <ul class="btns-group">
                                                            <li><span class="badge fw-medium" :class="item.badgeClass">{{ item.badgeText }}</span></li>
                                                            <li><a href="#" class="btn-link fw-medium fs-13 text-danger">{{ item.btnText }}</a></li>
                                                        </ul>
                                                    </div><!-- end card-body -->
                                                </div><!-- end card -->
                                            </div><!-- end col -->
                                        </div><!-- end row -->
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
  name: 'OfferSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
