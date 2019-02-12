<template>
  <div :class="{ 'section-title': true, 'is-light': light, 'is-bottom-left': bottomLeft }">
    <slot>
      <span v-if="!bottomLeft" class="line"/>
      <h2 class="title">
        <span v-if="bottomLeft" class="line"/> {{ title }}
      </h2>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,

      light: {
        type: Boolean,
        default: false
      },

      bottomLeft: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .section-title {
    padding-top: 2rem;
    padding-bottom: 1.6rem;
    text-align: center;
    .line {
      display: inline-block;
      width: 110px;
      height: 8px;
      background: #5be0e0;
      margin-bottom: 2rem;
    }
    .title {
      font-size: 3rem;
      color: #1983f4;
    }
    &.is-light {
      .line {
        background: #ffffff;
      }
      .title {
        color: #ffffff;
      }
    }
    &.is-bottom-left {
      text-align: left;
      .title {
        position: relative;
        font-size: 2rem;
        font-weight: 600;
        color: #333333;
        .line {
          position: absolute;
          bottom: -8px;
          margin-bottom: 0;
          width: 166px;
          height: 14px;
          background: rgba(91, 224, 224, 0.8);
        }
      }
    }
  }
</style>
