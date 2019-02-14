<template>
  <section class="hero">
    <div class="hero-body flex-center">
      <div class="container">
        <div class="hero-content">
          <h1 class="title wow bounceInLeft">Promoting your Organization to</h1>
          <h2 class="subtitle wow bounceInRight">Viblo's growing community.</h2>
        </div>

        <div class="hero-previewer">
          <Device type="macbook wow fadeIn">
            <img class="device-content" src="~/assets/images/image-hero.jpg">
          </Device>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Device from '~/components/Site/Device.vue'

  export default {
    components: {
      Device
    }
  }
</script>
