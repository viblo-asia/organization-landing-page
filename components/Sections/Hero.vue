<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="hero-content">
          <h1 class="title">Promoting your Organization to</h1>
          <h2 class="subtitle">Viblo's growing community.</h2>
        </div>

        <div class="hero-previewer">
          <Device type="macbook">
            <img class="device-content" src="/image-hero.jpg">
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

<style lang="scss">
  .hero {
    margin-top: -4rem;
    padding-top: 4rem;
    background: linear-gradient(180deg, #4771d9 0%, #5bdfdf 100%) no-repeat;
    background-size: 100% calc(100% - 180px);
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    &-content {
      margin-top: 2.5rem;
      margin-bottom: 3.5rem;

      .title, .subtitle {
        font-family: Poppins, sans-serif;
        font-size: 3.5rem;
        color: #ffffff;
        text-align: center;
      }
      .title {
        font-weight: 600;
        margin-bottom: 2rem;
      }
      .subtitle {
        font-weight: 300;
      }
    }

    &-previewer {
      display: flex;
      justify-content: center;
      position: relative;
      .device-frame {
        -webkit-box-shadow: 0 12px 22px 8px rgba(0,0,0,0.1);
        -moz-box-shadow: 0 12px 22px 8px rgba(0,0,0,0.1);
        box-shadow: 0 12px 22px 8px rgba(0,0,0,0.1);
      }
      &:before {
        content: url(~assets/images/bg-device-left.png);
        position: absolute;
        top: -40px;
        left: -260px;
      }
      &:after {
        content: url(~assets/images/bg-device-right.png);
        position: absolute;
        top: -50px;
        right: -200px;
      }
    }
  }
</style>
