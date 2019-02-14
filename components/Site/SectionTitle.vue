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
