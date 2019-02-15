<template>
  <nav
    :class="{
      'viblo-navbar navbar header flex-center': true,
      'is-open-mobile-menu': showMenu,
      'is-sticky slideInDown animated faster': isSticky,
      'is-primary fadeInDown animated faster': !isSticky
    }"
  >
    <div class="container-fluid container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img class="logo-dark" src="~/assets/images/logo-white.png" alt="Viblo" height="28">
          <img class="logo-light" src="https://viblo.asia/logo_full.svg" alt="Viblo" height="28">
        </a>

        <a class="navbar-burger burger" @click="toggleMenu">
          <span/>
          <span/>
          <span/>
        </a>
      </div>

      <div :class="{ 'is-active': showMenu }" class="navbar-menu" id="main-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <a class="navbar-item" href="#home" data-scrollspy="#home">{{ $t('main_menu.home') }}</a>
          <a class="navbar-item" href="#key-features" data-scrollspy="#key-features">{{ $t('main_menu.key_features') }}</a>
          <a class="navbar-item" href="#creating" data-scrollspy="#creating">{{ $t('main_menu.creating') }}</a>
          <a class="navbar-item" href="#managing" data-scrollspy="#managing">{{ $t('main_menu.managing') }}</a>

          <div class="languages-menu dropdown" :class="{ 'is-active': showLanguagesList }">
            <div class="dropdown-trigger flex-center">
              <button
                class="button is-text"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                @click.stop="toggleLanguageMenu"
              >
                <span>{{ $store.getters.currentLocale.name }}</span>
                <span>
                  <FaIcon v-if="!showLanguagesList" icon="angle-down"/>
                  <FaIcon v-else icon="angle-up"/>
                </span>
              </button>
            </div>

            <div v-click-outside="vcoConfig" class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <nuxt-link
                  v-for="(locale, index) in $store.getters.localeList"
                  :key="index"
                  :to="`/${locale.code}`"
                  class="dropdown-item"
                >
                  {{ locale.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import scrollSpy from 'simple-scrollspy'

  export default {
    data() {
      return {
        showMenu: false,
        isSticky: false,
        showLanguagesList: false,
        vcoConfig: {
          handler: this.toggleLanguageMenu,
          middleware: (e, el) => {
            return this.showLanguagesList
              && e.target.getAttribute('aria-controls') !== 'dropdown-menu'
          }
        }
      }
    },

    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      },

      toggleLanguageMenu() {
        this.showLanguagesList = !this.showLanguagesList
      },

      stickNavbar() {
        const scrollY = window.scrollY
        if (scrollY >= 100 && !this.isSticky) {
          this.isSticky = true
        }
        if (scrollY < 100 && this.isSticky) {
          this.isSticky = false
        }
      }
    },

    mounted() {
      window.addEventListener('scroll', () => this.stickNavbar())

      scrollSpy('.viblo-navbar', {
        menuActiveTarget: '.navbar-item',
        offset: 150
      })
    },

    beforeDestroy() {
      window.removeEventListener('scroll', () => this.stickNavbar())
    }
  }
</script>
