<template>
    <div class="section-head text-center">
        <h2 :class="isMargin" v-html="text"></h2>
        <p>{{ content }}</p>
    </div><!-- end section-head -->
</template>
<script>
import SectionData from '@/store/store.js'

export default {
  name: 'SectionHeading',
  props: ['text', 'content', 'isMargin'],
  data () {
    return {
      SectionData
    }
  }
}
</script>
