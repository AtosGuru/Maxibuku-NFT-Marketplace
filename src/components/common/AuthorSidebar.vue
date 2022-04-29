<template>
<div>
    <div class="sidebar mb-5 mb-xl-0 row">
                            <div class="col-md-6 col-lg-6 col-xl-12 sidebar-widget">
                                <h3 class="mb-3">{{ SectionData.authorSidebarData.sidebarWidget.title }}</h3>
                                <p class="sidebar-text mb-3">{{ content }}</p>
                                <p class="sidebar-text text-dark-gray">
                                    <span class="me-4"><strong class="text-black">{{ followingnum }}</strong> {{ followingtext }}</span>
                                    <span><strong class="text-black">{{ followernum }}</strong> {{ followertext }} </span>
                                </p>
                                <div class="follow-wrap mt-3">
                                    <p class="mb-1 text-black fw-semibold">{{ SectionData.authorSidebarData.sidebarWidget.followText }}</p>
                                    <div class="avatar-group mb-3">
                                        <a :href="item.path" v-for="(item, i) in avatars" :key="i"><img :src="item.avatar" alt=""></a>
                                    </div>
                                    <a href="#" class="btn-link sidebar-btn-link" data-bs-toggle="modal" data-bs-target="#followersModal">{{ SectionData.authorSidebarData.sidebarWidget.btnText  }}</a>
                                </div>
                            </div><!-- end col -->
                            <div class="col-md-6 col-lg-6 col-xl-12 sidebar-widget">
                                <h3 class="mb-3">{{ SectionData.authorSidebarData.sidebarWidgetTwo.title }}</h3>
                                <ul class="social-links">
                                    <li v-for="(link, i) in links" :key="i"><router-link :to="link.path"><span class="ni icon" :class="link.class"></span>{{ link.title }}</router-link></li>
                                </ul>
                            </div><!-- end col -->
                            <div class="col-md-6 col-lg-6 col-xl-12 sidebar-widget">
                                <h3 class="mb-2">{{ SectionData.authorSidebarData.sidebarWidgetThree.title }}</h3>
                                <p class="sidebar-text">{{ datetext }}</p>
                            </div><!-- end col -->
     </div><!-- end sidebar -->
    <!-- Modal -->
    <div class="modal fade" id="followersModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <ul class="nav nav-tabs nav-tabs-s1 nav-tabs--s1" id="myTabTwo" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="following-tab" data-bs-toggle="tab" data-bs-target="#following" type="button" role="tab" aria-controls="following" aria-selected="false">{{ SectionData.followersModal.btnText}}</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="followers-tab" data-bs-toggle="tab" data-bs-target="#followers" type="button" role="tab" aria-controls="followers" aria-selected="true">{{ SectionData.followersModal.btnTextTwo }}</button>
                        </li>
                    </ul>
                    <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                        <em class="ni ni-cross"></em>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="tab-content" id="myTabContentTwo">
                        <div class="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                            <div class="item-detail-tab-wrap">
                                <div class="card-follow d-flex align-items-center justify-content-between mb-3" v-for="item in SectionData.followersModal.followingList" :key="item.id">
                                    <div class="d-flex align-items-center">
                                        <a :href="item.path" class="avatar flex-shrink-0 me-2">
                                            <img :src="item.avatar" alt="avatar">
                                        </a>
                                        <div class="flex-grow-1">
                                            <p class="fw-semibold fs-14 lh"><a :href="item.path" class="text-black">{{ item.title }}</a></p>
                                            <span class="d-block fw-medium fs-15">{{ item.userName }}</span>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-light btn-show">{{ item.btnText }}</button>
                                    <button type="button" class="btn btn-sm btn-light btn-hide"><em class="ni ni-user-add"></em></button>
                                </div><!-- end card-follow -->
                            </div><!-- end item-detail-tab-wrap -->
                        </div><!-- end tab-pane -->
                        <div class="tab-pane fade show active" id="followers" role="tabpanel" aria-labelledby="followers-tab">
                            <div class="item-detail-tab-wrap">
                                <div class="card-follow d-flex align-items-center justify-content-between mb-3" v-for="item in SectionData.followersModal.followerList" :key="item.id">
                                    <div class="d-flex align-items-center">
                                        <a :href="item.path" class="avatar flex-shrink-0 me-2">
                                            <img :src="item.avatar" alt="avatar">
                                        </a>
                                        <div class="flex-grow-1">
                                            <p class="fw-semibold fs-14 lh"><a :href="item.path" class="text-black">{{ item.title }}</a></p>
                                            <span class="d-block fw-medium fs-15">{{ item.userName }}</span>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-light btn-show">{{ item.btnText }}</button>
                                    <button type="button" class="btn btn-sm btn-light btn-hide"><em class="ni ni-user-add"></em></button>
                                </div><!-- end card-follow -->
                            </div><!-- end item-detail-tab-wrap -->
                        </div><!-- end tab-pane -->
                    </div>
                </div><!-- end modal-body -->
            </div><!-- end modal-content -->
        </div><!-- end modal-dialog -->
    </div><!-- end modal-->
</div>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'AuthorSidebar',
  props: ['content', 'followingnum', 'followingtext', 'followernum', 'followertext', 'datetext', 'avatars', 'links'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
