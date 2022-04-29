<template>
     <div class="sidebar row">
                            <div class="col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidget.title }}</h4>
                                        <form action="#">
                                            <div class="input-group">
                                                <input type="text" class="form-control form-control-s1" :placeholder="SectionData.sidebarData.sidebarWidget.inputText">
                                                <button type="button" class="input-group-text"><em class="ni ni-search"></em></button>
                                            </div>
                                        </form>
                                    </div><!-- end card-body -->
                                </div><!-- end card -->
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <div class="avatar avatar-1 mb-3">
                                            <img :src="SectionData.sidebarData.sidebarWidgetTwo.img" alt="">
                                        </div>
                                        <h4 class="mb-2">{{ SectionData.sidebarData.sidebarWidgetTwo.title }}</h4>
                                        <p class="sidebar-text mb-3">{{ SectionData.sidebarData.sidebarWidgetTwo.content }}</p>
                                        <ul class="styled-icon">
                                            <li v-for="list in SectionData.sidebarData.sidebarWidgetTwo.icons" :key="list.id"><router-link :to="list.path"><em class="icon ni" :class="list.icon"></em></router-link></li>
                                        </ul>
                                    </div><!-- end card-body -->
                                </div>
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidgetThree.title }}</h4>
                                        <ul class="list-item">
                                            <li v-for="list in SectionData.sidebarData.sidebarWidgetThree.catList" :key="list.id"><router-link :to="list.path"><em class="ni ni-chevron-right me-1"></em> {{ list.title }}</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidgetFour.title }}</h4>
                                        <ul class="posts">
                                            <li class="d-flex align-items-center" v-for="item in SectionData.sidebarData.sidebarWidgetFour.postList" :key="item.id">
                                                <router-link :to="item.path" class="thumbnail flex-shrink-0 me-3">
                                                    <img :src="item.img" alt="">
                                                </router-link>
                                                <div class="flex-grow-1">
                                                    <h6 class="posts-title mb-1"><router-link :to="item.path">{{ item.title }}</router-link></h6>
                                                    <p class="posts-meta">{{ item.date }}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!-- end sidebar-widget -->
                            <div class="col-md-6 col-lg-12 sidebar-widget">
                                <div class="card">
                                    <div class="card-body card-body-s1">
                                        <h4 class="mb-3">{{ SectionData.sidebarData.sidebarWidgetFive.title }}</h4>
                                        <ul class="tag-list">
                                            <li v-for="tag in SectionData.sidebarData.sidebarWidgetFive.tagList" :key="tag.id"><router-link :to="tag.path" class="tag-link">{{ tag.title }}</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!-- end sidebar-widget -->
                        </div><!-- end sidebar -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'Sidebar',
  data () {
    return {
      SectionData
    }
  }
}
</script>
