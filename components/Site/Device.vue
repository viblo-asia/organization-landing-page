<template>
  <div :class="{ 'device': true, [`device-${type}`]: !!type }">
    <div class="device-frame">
      <slot/>
    </div>
    <div class="device-stripe"></div>
    <div class="device-header"></div>
    <div class="device-sensors"></div>
    <div class="device-btns"></div>
    <div class="device-power"></div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    }
  }
</script>

