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

<style lang="scss">
  .btn-create-now {
    text-transform: capitalize;
    padding: 1.6rem 1rem;
    cursor: pointer;
    border: solid 2px #4771d9 !important;
    -webkit-transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    -ms-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
    &:hover {
      background: #ffffff !important;
      color: #4771d9 !important;
      border: solid 2px #4771d9 !important;
    }
  }
</style>

