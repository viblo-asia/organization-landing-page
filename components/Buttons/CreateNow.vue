<template>
  <div class="flex-center">
    <a
      :href="toCreatePage"
      class="btn-create-now button is-medium"
      :class="{ [`is-${type}`]: true }"
    >
      {{ text }}
    </a>
  </div>
</template>

<script>
  import { url } from '~/utils/urls'

  export default {
    props: {
      text: {
        type: String,
        default: 'Create organization now!'
      },

      type: {
        type: String,
        default: 'primary'
      }
    },

    computed: {
      toCreatePage() {
        return '/settings/organization/create'
      }
    }
  }
</script>

<style>
  .btn-create-now {
    text-transform: capitalize;
    padding: 1.6rem 1rem;
  }
</style>

