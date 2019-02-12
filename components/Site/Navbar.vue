<template>
  <nav class="viblo-navbar navbar header is-primary">
    <div class="container-fluid container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="/logo-white.png" alt="Viblo" height="28">
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
      showMenu: false
    }),

    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>

<style lang="scss">
  .viblo-navbar {
    &:not(.is-sticky) {
      min-height: 4rem;
      background: transparent;
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
  }
</style>
