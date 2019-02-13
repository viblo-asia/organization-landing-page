<template>
  <div class="viblo">
    <Navbar/>

    <main class="viblo-main">
      <nuxt/>
    </main>

    <Footer/>
  </div>
</template>

<script>
  import Navbar from '~/components/Site/Navbar.vue'
  import Footer from '~/components/Site/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
