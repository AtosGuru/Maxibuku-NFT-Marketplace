<template>
<section class="author-section section-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3">
                        <AuthorSidebar
                        :content="SectionData.authorSidebarDataTwo.sidebarWidget.content"
                        :followingnum="SectionData.authorSidebarDataTwo.sidebarWidget.followingNum"
                        :followingtext="SectionData.authorSidebarDataTwo.sidebarWidget.followingText"
                        :followernum="SectionData.authorSidebarDataTwo.sidebarWidget.followerNum"
                        :followertext="SectionData.authorSidebarDataTwo.sidebarWidget.followerText"
                        :avatars="SectionData.authorSidebarDataTwo.sidebarWidget.followersAvatar"
                        :links="SectionData.authorSidebarDataTwo.sidebarWidgetTwo.links"
                        :datetext="SectionData.authorSidebarDataTwo.sidebarWidgetThree.date"
                        ></AuthorSidebar>
                    </div><!-- end col -->
                    <div class="col-xl-9 ps-xl-4">
                        <div class="author-items-wrap">
                            <h3>{{ SectionData.profileData.title }}</h3>
                            <div class="gap-2x"></div><!-- end gap -->
                            <div class="row g-gs">
                                <div class="col-md-4" v-for="item in itemsLoaded" :key="item.id">
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
                                                <span class="card-price-title">Current bid</span>
                                                <span class="card-price-number">{{ item.priceTwo }}</span>
                                            </div>
                                        </div><!-- end card-price-wrap -->
                                        <ul class="btns-group">
                                            <li><a href="#" class="btn btn-sm bg-danger-dim" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a></li>
                                        </ul>
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
                            </div>
                            </div><!-- row -->
                            <div class="text-center">
                                <a href="#" @click.prevent="loadMore" v-if="currentPage < items.length" class="btn-link btn-link-s1 mt-4 mt-md-5">Load More</a>
                            </div>
                        </div><!-- end author-items-wrap -->
                    </div><!-- end col-lg-8 -->
                </div><!-- end row -->
            </div><!-- .container -->
            <!-- Modal -->
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center">
                            <img :src="SectionData.deleteModal.img" alt="" class="mb-3">
                            <h4 class="modal-tilte mb-2">{{ SectionData.deleteModal.title }}</h4>
                            <p class="modal-text">{{ SectionData.deleteModal.content}}</p>
                        </div><!-- end modal-body -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm" data-bs-dismiss="modal">{{ SectionData.deleteModal.btnText }}</button>
                            <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">{{ SectionData.deleteModal.btnTextTwo }}</button>
                        </div>
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
  name: 'ProfileSection',
  data () {
    return {
      SectionData,
      items: [
      {
        id: 1,
        img: require('@/images/thumb/nft-2.jpg'),
        imgLg: require('@/images/thumb/nft-lg.jpg'),
        title: 'One Tribe Black Edition',
        content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: 'ZeniconStudio',
        authorLink: 'author',
        price: '$14.20',
        priceTwo: '1.32 ETH',
        metaText: 'Not for sale',
        metaTextTwo: '200 editions',
        metaTextThree: 'Highest bid <span class="text-primary fw-semibold">1.072 wETH</span>',
      },
      {
        id: 2,
        img: require('@/images/thumb/nft3.jpg'),
        imgLg: require('@/images/thumb/nft-lg2.jpg'),
        title: 'Operation Jade Fury',
        content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: 'ZeniconStudio',
        authorLink: 'author',
        price: '$14.20',
        priceTwo: '1.32 ETH',
        metaText: 'Not for sale',
       metaTextTwo: '200 editions',
       metaTextThree: 'Highest bid <span class="text-primary fw-semibold">1.072 wETH</span>',
      },
      {
        id: 3,
        img: require('@/images/thumb/nft4.jpg'),
        imgLg: require('@/images/thumb/nft-lg3.jpg'),
        title: 'Unboxing The Compass',
        content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: 'ZeniconStudio',
        authorLink: 'author',
        price: '$14.20',
        priceTwo: '1.32 ETH',
        metaText: 'Not for sale',
       metaTextTwo: '200 editions',
       metaTextThree: 'Highest bid <span class="text-primary fw-semibold">1.072 wETH</span>',
      },
      {
        id: 4,
        img: require('@/images/thumb/nft5.jpg'),
        imgLg: require('@/images/thumb/nft-lg4.jpg'),
        title: 'Rendering by the Water',
        content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: 'ZeniconStudio',
        authorLink: 'author',
        price: '$14.20',
        priceTwo: '1.32 ETH',
        metaText: 'Not for sale',
       metaTextTwo: '200 editions',
       metaTextThree: 'Highest bid <span class="text-primary fw-semibold">1.072 wETH</span>',
      },
      {
        id: 5,
        img: require('@/images/thumb/nft6.jpg'),
        imgLg: require('@/images/thumb/nft-lg5.jpg'),
        title: 'Divine Opulence',
        content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: 'DvisionNetwork',
        authorLink: 'author',
        price: '$12.00',
        priceTwo: '1.44 ETH',
        metaText: 'Not for sale',
       metaTextTwo: '200 editions',
       metaTextThree: 'Highest bid <span class="text-primary fw-semibold">1.072 wETH</span>',
      },
      {
        id: 6,
        img: require('@/images/thumb/nft7.jpg'),
        imgLg: require('@/images/thumb/nft-lg6.jpg'),
        title: 'Sacral Metatron Cube',
        content: 'Limited Edition *digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: 'KamranMedia',
        authorLink: 'author',
        price: '$11.00',
        priceTwo: '2.33 ETH',
        metaText: 'Not for sale',
        metaTextTwo: '200 editions',
        metaTextThree: 'Highest bid <span class="text-primary fw-semibold">1.072 wETH</span>',
      },
     ],
     currentPage: 6,
    }
  },
  methods: {
    loadMore() {
      if (this.currentPage > this.items.currentPage) return;
      this.currentPage = this.currentPage + 3;
    },
  },
  computed: {
    itemsLoaded() {
      return this.items.slice(0, this.currentPage);
    },
  },
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
 .btn,
 .author-link {
   z-index: 2;
   position: relative;
 }
</style>