<template>
    <div class="row g-gs">
        <div class="col-xl-3 col-lg-4 col-sm-6" v-for="item in items" :key="item.id">
            <div class="card card-full">
                <router-link :to="item.path" class="d-block">
                    <img :src="item.img" class="card-img-top" alt="art image">
                </router-link>
                <div class="card-body p-4">
                    <h5 class="card-title text-truncate mb-0"><router-link :to="item.path">{{ item.title  }}</router-link></h5>
                    <div class="card-author mb-1 d-flex align-items-center">
                        <span class="me-1 card-author-by">{{ item.byText }}</span>
                        <div class="custom-tooltip-wrap">
                            <router-link :to="item.authorLink" class="custom-tooltip author-link">{{ item.authorText }}</router-link>
                            <div class="card-generic custom-tooltip-dropdown">
                                <div class="author-action d-flex flex-wrap align-items-center mb-3">
                                    <div class="flex-shrink-0 avatar">
                                        <img :src="item.avatar" alt="avatar">
                                    </div>
                                    <div class="ms-2">
                                        <span class="author-username">{{ item.userName }}</span>
                                        <span class="author-follow-text">{{ item.followersText }}</span>
                                    </div>
                                </div>
                                <h6 class="author-name mb-1">{{ item.authorName }}</h6>
                                <p class="author-desc smaller mb-3">{{ item.desc }}</p>
                                <div class="follow-wrap mb-3">
                                    <h6 class="mb-1 smaller text-uppercase">{{ item.followText }}</h6>
                                    <div class="avatar-group">
                                        <router-link :to="avatar.path" v-for="avatar in item.avatars" :key="avatar.id">
                                            <img :src="avatar.img" alt="avatar">
                                        </router-link>
                                    </div>
                                </div><!-- end follow-wrap  -->
                                <router-link :to="item.authorLink" class="btn btn-sm bg-dark-dim">{{ item.btnTextTwo }}</router-link>
                            </div><!-- end dropdown-menu -->
                        </div><!-- end custom-tooltip-wrap -->
                    </div><!-- end card-author -->
                    <div class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3">
                        <div class="me-5 me-sm-2">
                            <span class="card-price-title">{{ item.priceText }}</span>
                            <span class="card-price-number">{{ item.givenPrice }}</span>
                        </div>
                        <div class="text-sm-end">
                            <span class="card-price-title">{{ item.priceTextTwo }}</span>
                            <span class="card-price-number">{{ item.currentPrice }}</span>
                        </div>
                    </div><!-- end card-price-wrap -->
                    <router-link :to="item.path" class="btn btn-sm btn-primary">{{ item.btnText }}</router-link>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
    </div>
</template>
<script>

// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import { createPopper } from '@popperjs/core';

export default {
  name: 'Products',
  props: ['items'],
  data () {
    return {
      SectionData
    }
  },
  mounted () {
    /*============= Custom Tooltips =============== */
    function customTooltip(selector, active) {
    let elem = document.querySelectorAll(selector);
        if(elem.length > 0){
            elem.forEach(item => {
                const parent = item.parentElement;
                const next = item.nextElementSibling;
                createPopper(item, next);
                parent.addEventListener("mouseenter", function() {
                    parent.classList.add(active)
                });
                parent.addEventListener("mouseleave", function() {
                    parent.classList.remove(active)
                });
            });
        }
    }

    customTooltip('.custom-tooltip','active');

  }
}
</script>