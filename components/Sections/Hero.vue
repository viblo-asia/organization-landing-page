<template>
  <section class="hero">
    <div class="hero-body flex-center">
      <div class="container">
        <div class="hero-content">
          <h1 class="title wow bounceInLeft">{{$t('hero.title')}}</h1>
          <h2 class="subtitle wow bounceInRight">{{$t('hero.subtitle')}}</h2>
        </div>

        <div class="hero-previewer">
          <Device type="macbook wow fadeIn">
            <img class="device-content" src="~/assets/images/viblo.asia_newest.png">
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
