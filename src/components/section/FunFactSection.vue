<template>
<section class="fun-fact-section" :class="{'bg-gray' : isBg}">
    <div class="container">
      <div class="row g-gs">
          <div class="col-md-4" v-for="item in items" :key="item.id" :class="classname">
              <div class="card card-counter text-center">
                  <div class="card-body card-body-s1">
                      <img :src="item.icon" alt="" class="mb-3">
                      <h3 class="mb-1">{{ item.title }}</h3>
                      <p>{{ item.subTitle }}</p>
                  </div><!-- card-body -->
              </div><!-- card -->
          </div><!-- end col -->
      </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end fun-fact-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'FunFactSection',
  props: ['isBg', 'classname', 'items'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
