<template>
<section class="author-section section-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3">
                        <AuthorSidebar
                        :content="SectionData.authorSidebarData.sidebarWidget.content"
                        :followingnum="SectionData.authorSidebarData.sidebarWidget.followingNum"
                        :followingtext="SectionData.authorSidebarData.sidebarWidget.followingText"
                        :followernum="SectionData.authorSidebarData.sidebarWidget.followerNum"
                        :followertext="SectionData.authorSidebarData.sidebarWidget.followerText"
                        :avatars="SectionData.authorSidebarData.sidebarWidget.followersAvatar"
                        :links="SectionData.authorSidebarData.sidebarWidgetTwo.links"
                        :datetext="SectionData.authorSidebarData.sidebarWidgetThree.date"
                        ></AuthorSidebar>
                    </div><!-- end col -->
                    <div class="col-xl-9 ps-xl-4">
                        <div class="author-items-wrap">
                            <ul class="nav nav-tabs nav-tabs-s1" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.authorSidebarData.authorTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }}</button>
                                </li>
                            </ul>
                            <div class="gap-2x"></div><!-- end gap-2x -->
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="on-sale" role="tabpanel" aria-labelledby="on-sale-tab">
                                    <div class="row g-gs">
                                        <div class="col-md-4" v-for="item in SectionData.productData.onSaleList" :key="item.id">
                                            <div class="card card-full">
                                                <div class="card-image">
                                                    <img :src="item.img" class="card-img-top" alt="art image">
                                                </div>
                                                <div class="card-body p-4">
                                                    <h5 class="card-title text-truncate mb-0">{{ item.title }}</h5>
                                                    <div class="card-author mb-1 d-flex align-items-center">
                                                        <span class="me-1 card-author-by">By</span>
                                                        <div class="custom-tooltip-wrap">
                                                            <router-link :to="item.authorLink" class="custom-tooltip author-link">{{ item.author }}</router-link>
                                                        </div><!-- end custom-tooltip-wrap -->
                                                    </div><!-- end card-author -->
                                                    <div class="card-price-wrap d-flex align-items-center justify-content-between mb-3">
                                                        <div class="me-2">
                                                            <span class="card-price-title">Price</span>
                                                            <span class="card-price-number">{{ item.price }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="card-price-title">Curren bid</span>
                                                            <span class="card-price-number">{{ item.priceTwo }} ETH</span>
                                                        </div>
                                                    </div><!-- end card-price-wrap -->
                                                    <router-link to="item.path" class="btn btn-sm btn-primary">Place Bid</router-link>
                                                </div><!-- end card-body -->
                                                <router-link
                                                    class="details"
                                                    :to="{
                                                        name: 'ProductDetail',
                                                        params: {
                                                        id: item.id,
                                                        title: item.title,
                                                        imgLg: item.imgLg,
                                                        metaText: item.metaText,
                                                        metaTextTwo: item.metaTextTwo,
                                                        metaTextThree: item.metaTextThree,
                                                        content: item.content,
                                                        }
                                                    }"
                                            >
                                            </router-link>
                                            </div><!-- end card -->
                                        </div><!-- end col -->
                                    </div><!-- row -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="owned" role="tabpanel" aria-labelledby="owned-tab">
                                    <div class="row g-gs">
                                        <div class="col-md-4" v-for="item in SectionData.productData.ownedList" :key="item.id">
                                            <div class="card card-full">
                                                <div class="card-image">
                                                    <img :src="item.img" class="card-img-top" alt="art image">
                                                </div>
                                                <div class="card-body p-4">
                                                    <h5 class="card-title text-truncate mb-0">{{ item.title  }}</h5>
                                                    <div class="card-author mb-1 d-flex align-items-center">
                                                        <span class="me-1 card-author-by">By</span>
                                                        <div class="custom-tooltip-wrap">
                                                            <router-link :to="item.authorLink" class="custom-tooltip author-link">{{ item.author }}</router-link>
                                                        </div><!-- end custom-tooltip-wrap -->
                                                    </div><!-- end card-author -->
                                                    <div class="card-price-wrap d-flex align-items-center justify-content-between mb-3">
                                                        <div class="me-2">
                                                            <span class="card-price-title">Price</span>
                                                            <span class="card-price-number">{{ item.price }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="card-price-title">Curren bid</span>
                                                            <span class="card-price-number">{{ item.priceTwo }} ETH</span>
                                                        </div>
                                                    </div><!-- end card-price-wrap -->
                                                    <router-link to="item.path" class="btn btn-sm btn-primary">Place Bid</router-link>
                                                </div><!-- end card-body -->
                                                <router-link
                                                    class="details"
                                                    :to="{
                                                        name: 'ProductDetail',
                                                        params: {
                                                        id: item.id,
                                                        title: item.title,
                                                        imgLg: item.imgLg,
                                                        metaText: item.metaText,
                                                        metaTextTwo: item.metaTextTwo,
                                                        metaTextThree: item.metaTextThree,
                                                        content: item.content,
                                                        }
                                                    }"
                                                >
                                                </router-link>
                                            </div><!-- end card -->
                                        </div><!-- end col -->
                                    </div><!-- row -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="created" role="tabpanel" aria-labelledby="created-tab">
                                    <div class="row g-gs">
                                        <div class="col-md-4" v-for="item in SectionData.productData.onSaleList" :key="item.id">
                                            <div class="card card-full">
                                                <div class="card-image">
                                                    <img :src="item.img" class="card-img-top" alt="art image">
                                                </div>
                                                <div class="card-body p-4">
                                                    <h5 class="card-title text-truncate mb-0">{{ item.title  }}</h5>
                                                    <div class="card-author mb-1 d-flex align-items-center">
                                                        <span class="me-1 card-author-by">By</span>
                                                        <div class="custom-tooltip-wrap">
                                                        <router-link :to="item.authorLink" class="custom-tooltip author-link">{{ item.author }}</router-link>
                                                    </div><!-- end custom-tooltip-wrap -->
                                                    </div><!-- end card-author -->
                                                    <div class="card-price-wrap d-flex align-items-center justify-content-between mb-3">
                                                        <div class="me-2">
                                                            <span class="card-price-title">Price</span>
                                                            <span class="card-price-number">{{ item.price }}</span>
                                                        </div>
                                                        <div>
                                                            <span class="card-price-title">Curren bid</span>
                                                            <span class="card-price-number">{{ item.priceTwo }} ETH</span>
                                                        </div>
                                                    </div><!-- end card-price-wrap -->
                                                    <router-link to="item.path" class="btn btn-sm btn-primary">Place Bid</router-link>
                                                </div><!-- end card-body -->
                                                <router-link
                                                    class="details"
                                                    :to="{
                                                        name: 'ProductDetail',
                                                        params: {
                                                        id: item.id,
                                                        title: item.title,
                                                        imgLg: item.imgLg,
                                                        metaText: item.metaText,
                                                        metaTextTwo: item.metaTextTwo,
                                                        metaTextThree: item.metaTextThree,
                                                        content: item.content,
                                                        }
                                                    }"
                                                >
                                                </router-link>
                                            </div><!-- end card -->
                                        </div><!-- end col -->
                                    </div><!-- row -->
                                </div><!-- end tab-pane -->
                            </div><!-- end tab-content -->
                        </div><!-- end author-items-wrap -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- .container -->
             <!-- Modal -->
            <div class="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="reportModalLabel">{{SectionData.reportModalData.title }}</h4>
                            <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="modal-text mb-2" v-html="SectionData.reportModalData.content"></p>
                            <p class="modal-text mb-3" v-html="SectionData.reportModalData.contentTwo"></p>
                            <form action="#">
                                <input type="email" class="form-control form-control-s1 mb-3" placeholder="Enter your email">
                                <textarea name="message" rows="6" class="form-control form-control-s1 mb-3" :placeholder="SectionData.reportModalData.placeholderText"></textarea>
                                <button class="btn btn-primary w-100" type="submit">{{SectionData.reportModalData.btnText}}</button>
                            </form>
                        </div><!-- end modal-body -->
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->
            <!-- Modal -->
        </section><!-- end author-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'AuthorSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>

<style lang="css" scoped>
 .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
 }
 .author-link {
   z-index: 2;
   position: relative;
 }
</style>