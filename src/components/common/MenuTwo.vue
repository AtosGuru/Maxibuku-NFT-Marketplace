<template>
  <nav class="header-menu menu nav">
      <!-- menu list -->
      <MenuList></MenuList>
      <!-- header btn -->
      <ul class="menu-btns menu-btns-2">
            <li class="d-none d-lg-inline-block"><router-link to="wallet" class="icon-btn icon-btn-s1" title="Wallet"><em class="ni ni-wallet"></em></router-link></li>
            <li class="d-none d-lg-inline-block dropdown">
                <button type="button" class="icon-btn icon-btn-s1" data-bs-toggle="dropdown"><em class="ni ni-user"></em></button>
                <ul class="dropdown-menu card-generic card-generic-s3 dropdown-menu-end mt-2">
                    <li><h6 class="dropdown-header">Hello kamran!</h6></li>
                    <li v-for="list in SectionData.authorNav" :key="list.id"><router-link class="dropdown-item card-generic-item" :to="list.path"><em class="ni me-2" :class="list.icon"></em>{{ list.title }}</router-link></li>
                    <li><a href="#" class="dropdown-item card-generic-item theme-toggler" title="Toggle Dark/Light mode"><em class="ni ni-moon me-2"></em> Dark Mode</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><router-link class="dropdown-item card-generic-item" to="/"><em class="ni ni-power me-2"></em>Logout</router-link></li>
                </ul>
            </li>
          <li class="d-lg-none"><ButtonLink :text="SectionData.headerData.btnText" link="/wallet" classname="btn btn-lg" :class="classname"></ButtonLink></li>
      </ul>
  </nav><!-- .header-menu -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

// @ is an alias to /src
import MenuList from '@/components/common/MenuList.vue'

export default {
  name: 'MenuTwo',
  props: ['classname'],
  components: {
    MenuList
  },
  data () {
    return {
      SectionData
    }
  },
  mounted () {
    /*  ==========================================
      Dark/Light mode configaration
    ========================================== */
    function themeSwitcher (selector) {
      let themeToggler = document.querySelectorAll(selector)
      if (themeToggler.length > 0) {
        themeToggler.forEach(item => {
          item.addEventListener('click', function (e) {
            e.preventDefault()
            document.body.classList.toggle('dark-mode')
            if (document.body.classList.contains('dark-mode')) {
              localStorage.setItem('website_theme', 'dark-mode')
            } else {
              localStorage.setItem('website_theme', 'default')
            }
          })
        })
      }

      function retrieveTheme () {
        var theme = localStorage.getItem('website_theme')
        if (theme != null) {
          document.body.classList.remove('default', 'dark-mode')
          document.body.classList.add(theme)
        }
      }

      retrieveTheme()

      if (window) {
        window.addEventListener('storage', function () {
          retrieveTheme()
        }, false)
      }
    }

    themeSwitcher('.theme-toggler')
  }
}
</script>
