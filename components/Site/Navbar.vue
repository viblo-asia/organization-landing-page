<template>
  <nav
    :class="{
      'viblo-navbar navbar header flex-center': true,
      'is-sticky slideInDown animated faster': isSticky,
      'is-primary fadeInDown animated faster': !isSticky
    }"
  >
    <div class="container-fluid container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img class="logo-dark" src="/logo-white.png" alt="Viblo" height="28">
          <img class="logo-light" src="https://viblo.asia/logo_full.svg" alt="Viblo" height="28">
        </nuxt-link>

        <a class="navbar-burger burger" @click="toggleMenu">
          <span/>
          <span/>
          <span/>
        </a>
      </div>

      <div :class="{ 'is-active': showMenu }" class="navbar-menu" id="main-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <a class="navbar-item" href="#home">Home</a>
          <a class="navbar-item" href="#key-features">Key Features</a>
          <a class="navbar-item" href="#creating">Creating Organization</a>
          <a class="navbar-item" href="#managing">Managing Organization</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
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
    },

    beforeDestroy() {
      window.removeEventListener('scroll', () => this.stickNavbar())
    }
  }
</script>

<style lang="scss">
  .viblo-navbar {
    min-height: 4rem;
    &:not(.is-sticky) {
      background: transparent;
      .logo-light {
        display: none;
      }
      .logo-dark {
        display: inline-block;
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

      .logo-dark {
        display: none;
      }
      .logo-light {
        display: inline-block;
        height: 28px;
      }

      + main {
        padding-top: 4rem;
      }
    }
  }
</style>
