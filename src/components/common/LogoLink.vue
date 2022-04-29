<template>
    <router-link to="/" class="logo-link" :class="classname">
        <img class="logo-dark logo-img" :src="require('@/images/logo-black.png')" alt="logo">
        <img class="logo-light logo-img" :src="require('@/images/logo-white.png')" alt="logo">
    </router-link>
</template>
<script>

export default {
  name: 'LogoLink',
  props: ['classname']
}
</script>
