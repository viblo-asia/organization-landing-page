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
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import scrollSpy from 'simple-scrollspy'

  export default {
    data: () => ({
      showMenu: false,
      isSticky: false
    }),

    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
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
