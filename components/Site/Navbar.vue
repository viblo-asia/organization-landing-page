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
          <a class="navbar-item" href="#home" data-scrollspy="#home">Home</a>
          <a class="navbar-item" href="#key-features" data-scrollspy="#key-features">Key Features</a>
          <a class="navbar-item" href="#creating" data-scrollspy="#creating">Creating Organization</a>
          <a class="navbar-item" href="#managing" data-scrollspy="#managing">Managing Organization</a>
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

<style lang="scss">
  $navbar-height: 3.75rem;

  .viblo-navbar {
    min-height: $navbar-height;

    & + main .hero {
      margin-top: -$navbar-height;
      padding-top: $navbar-height;
    }

    .navbar-item {
      border-radius: 4px;
      margin-left: 2px;
      margin-right: 2px;
    }

    &:not(.is-sticky) {
      background: transparent;
      .logo-light {
        display: none;
      }
      .logo-dark {
        display: inline-block;
      }
      .navbar-item[data-active="true"], .navbar-item[data-active="true"]:hover {
        background: #ffffff !important;
        color: #333333 !important;
      }
    }

    @media screen and (min-width: 1700px) {
      .container-fluid {
        max-width: 1680px;
      }
      .navbar-item {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    &.is-sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
      -moz-box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
      box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
      .navbar-item[data-active="true"] {
        background: #f4f4f4 !important;
        color: #4771d9 !important;
      }

      + main {
        padding-top: $navbar-height;
      }
    }


    &.is-open-mobile-menu,
    &.is-sticky {
      .navbar-burger {
        color: #4a4a4a !important;
      }
      .logo-dark {
        display: none;
      }
      .logo-light {
        display: inline-block;
        height: 28px;
      }
    }
  }
</style>
