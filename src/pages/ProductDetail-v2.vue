/* eslint-disable no-undef */
<template>
    <div class="page-wrap">
         <!-- header  -->
        <header class="header-section has-header-main">
            <!-- Header main -->
            <HeaderMain></HeaderMain>
        </header>
        <section class="item-detail-section section-space">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="item-detail-content mt-4 mt-lg-0">
                            <h1 class="item-detail-title mb-2">{{ title }}</h1>
                            <div class="item-detail-meta d-flex flex-wrap align-items-center mb-3">
                                <span class="item-detail-text-meta">{{ metaText }}</span>
                                <span class="dot-separeted"></span>
                                <span class="item-detail-text-meta">{{ metaTextTwo }}</span>
                                <span class="dot-separeted"></span>
                                <span class="item-detail-text-meta" v-html="metaTextThree"></span>
                            </div>
                            <p class="item-detail-text mb-4">{{ content }}</p>
                            <div class="item-credits">
                                <div class="row g-4">
                                    <div class="col-xl-6" v-for="item in SectionData.itemDetailData.itemDetailList" :key="item.id">
                                        <div class="card-media card-media-s1">
                                            <router-link :to="item.path" class="card-media-img flex-shrink-0 d-block">
                                                <img :src="item.avatar" alt="avatar">
                                            </router-link>
                                            <div class="card-media-body">
                                                <router-link :to="item.path" class="fw-semibold">{{ item.title }}</router-link>
                                                <p class="fw-medium small">{{ item.subTitle }}</p>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end col-->
                                    <div class="col-xl-12" v-for="item in SectionData.itemDetailData.itemDetailListTwo" :key="item.id">
                                        <div class="card-media card-media-s1">
                                            <router-link :to="item.path" class="card-media-img flex-shrink-0 d-block">
                                                <img :src="item.avatar" alt="avatar">
                                            </router-link>
                                            <div class="card-media-body">
                                                <p class="fw-semibold text-black">{{ item.title }}</p>
                                                <span class="fw-medium small">{{ item.subTitle }}</span>
                                            </div>
                                        </div><!-- end card -->
                                    </div><!-- end col-->
                                </div><!-- end row -->
                            </div><!-- end row -->
                            <div class="item-detail-btns mt-4">
                                <ul class="btns-group d-flex">
                                    <li class="flex-grow-1">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" class="btn btn-primary d-block">{{ SectionData.itemDetailData.btnText }}</a>
                                    </li>
                                    <li class="flex-grow-1">
                                        <div class="dropdown">
                                            <a href="#" class="btn bg-dark-dim d-block" data-bs-toggle="dropdown">{{ SectionData.itemDetailData.btnTextTwo }}</a>
                                            <div class="dropdown-menu card-generic p-2 keep-open w-100 mt-1">
                                                <router-link :to="icon.path" class="dropdown-item card-generic-item" v-for="(icon, i) in SectionData.socialShareList" :key="i"><em class="ni me-2" :class="icon.btnClass"></em>{{ icon.title }}</router-link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div><!-- end item-detail-btns -->
                        </div><!-- end item-detail-content -->
                    </div><!-- end col -->
                    <div class="col-lg-5 ms-auto">
                        <div class="item-detail-content">
                            <div class="item-detail-img-container item-detail-img-full mb-4">
                                <img :src="imgLg" alt="" class="w-100 rounded-3">
                            </div><!-- end item-detail-img-container -->
                        </div><!-- end item-detail-content -->
                    </div><!-- end col -->
                    <div class="col-lg-12">
                        <div class="item-detail-tab mt-5">
                            <div class="row g-gs">
                                <div class="col-xl-4 col-lg-6">
                                    <div class="card-border card-full">
                                        <div class="card-body card-body-s1">
                                                <h5 class="mb-3">{{ SectionData.itemDetailData.itemDetailOwnerListTwo.title }}</h5>
                                                <div class="item-detail-list">
                                                    <div class="card-media card-media-s2" v-for="item in SectionData.itemDetailData.itemDetailOwnerListTwo.ownerList" :key="item.id">
                                                        <router-link :to="item.path" class="card-media-img flex-shrink-0 d-block"><img :src="item.avatar" alt="avatar"></router-link>
                                                        <div class="card-media-body">
                                                            <p class="fw-semibold"><router-link :to="item.path" class="text-black">{{ item.title }}</router-link></p>
                                                            <p class="small">{{ item.subTitle }}</p>
                                                        </div>
                                                    </div><!-- end card-media -->
                                                </div><!-- end item-detail-list -->
                                        </div><!-- end card-body -->
                                    </div><!-- end card-border -->
                                </div><!-- end col -->
                                <div class="col-xl-4 col-lg-6">
                                    <div class="card-border card-full">
                                        <div class="card-body card-body-s1">
                                            <h5 class="mb-3">{{ SectionData.itemDetailData.itemDetailBidsListTwo.title }}</h5>
                                            <div class="item-detail-list">
                                                <div class="card-media card-media-s2" v-for="item in SectionData.itemDetailData.itemDetailBidsListTwo.bidsList" :key="item.id">
                                                    <router-link :to="item.path" class="card-media-img flex-shrink-0 d-block"><img :src="item.avatar" alt="avatar"></router-link>
                                                    <div class="card-media-body text-truncate">
                                                        <p class="fw-semibold text-black text-truncate">{{ item.title }}</p>
                                                        <p class="small">{{ item.date }}</p>
                                                    </div>
                                                </div><!-- end card-media -->
                                            </div><!-- end item-detail-list -->
                                        </div>
                                    </div><!-- end col -->
                                </div><!-- end col -->
                                <div class="col-xl-4">
                                    <div class="card-border card-full">
                                        <div class="card-body card-body-s1">
                                                <h5 class="mb-3">{{ SectionData.itemDetailData.itemDetailHistoryListTwo.title }}</h5>
                                                <div class="item-detail-list">
                                                    <div class="card-media card-media-s2" v-for="item in SectionData.itemDetailData.itemDetailHistoryListTwo.historyList" :key="item.id">
                                                        <router-link :to="item.path" class="card-media-img flex-shrink-0 d-block"><img :src="item.avatar" alt="avatar"></router-link>
                                                        <div class="card-media-body text-truncate">
                                                            <p class="fw-semibold text-black text-truncate">{{ item.title }}</p>
                                                            <p class="small text-truncate">{{ item.subTitle }}</p>
                                                        </div>
                                                    </div><!-- end card-media -->
                                                </div><!-- end item-detail-list -->
                                        </div>
                                    </div><!-- end col -->
                                </div><!-- end col -->
                            </div><!-- end row -->
                        </div><!-- end item-detail-tab -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- .container -->
             <!-- Modal -->
            <div class="modal fade" id="placeBidModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ SectionData.placeBidModal.title }}</h4>
                            <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div><!-- end modal-header -->
                        <div class="modal-body">
                            <p class="mb-3" v-html="SectionData.placeBidModal.content"></p>
                            <div class="mb-3">
                                <label class="form-label">{{ SectionData.placeBidModal.labelText }}</label>
                                <input type="text" class="form-control form-control-s1" placeholder="Enter bid">
                            </div>
                            <div class="mb-3">
                                <label class="form-label" v-html="SectionData.placeBidModal.labelTextTwo"></label>
                                <input type="text" class="form-control form-control-s1" value="1">
                            </div>
                            <ul class="total-bid-list mb-4">
                                <li v-for="(list, i) in SectionData.placeBidModal.totalBidList" :key="i"><span>{{ list.title }}</span> <span>{{ list.price }}</span></li>
                            </ul>
                            <a :href="SectionData.placeBidModal.btnLink" class="btn btn-primary d-block">{{ SectionData.placeBidModal.btnText }}</a>
                        </div><!-- end modal-body -->
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->
        </section><!-- end item-detail-section -->
        <!-- Related product -->
        <RelatedProduct></RelatedProduct>
        <!-- Footer  -->
        <Footer></Footer>
    </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ItemDetailv2',
  data(){
        return{
            SectionData,
            id: this.$route.params.id,
            title: '',
            imgLg: '',
            metaText: '',
            metaTextTwo: '',
            metaTextThree: '',
            content: '',
         }
    },
    mounted() {
    SectionData.productData.products.forEach( element => {
        if(this.id == element.id){
            this.imgLg = element.imgLg;
            this.title = element.title;
            this.metaText = element.metaText;
            this.metaTextTwo = element.metaTextTwo;
            this.metaTextThree = element.metaTextThree;
            this.content = element.content;
        }
        
    });
  }
}
</script>
