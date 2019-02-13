<template>
  <div>
    <Hero id="home" class="scrollspy"/>
    <Summary id="summary" class="scrollspy"/>
    <KeyFeatures id="key-features" class="scrollspy"/>
    <CreatingSection id="creating" class="scrollspy"/>
    <PublishingSection id="managing" class="scrollspy"/>
  </div>
</template>

<script>
  import WOW from 'wow.js'

  import Hero from '~/components/Sections/Hero.vue'
  import Summary from '~/components/Sections/Summary.vue'
  import KeyFeatures from '~/components/Sections/KeyFeatures.vue'
  import CreatingSection from '~/components/Sections/Creating.vue'
  import AddingSection from '~/components/Sections/Adding.vue'
  import PublishingSection from '~/components/Sections/Publishing.vue'

  export default {
    components: {
      Hero,
      Summary,
      KeyFeatures,
      CreatingSection,
      AddingSection,
      PublishingSection
    },

    mounted() {
      const wow = new WOW({
        mobile: false
      })

      wow.init()
    }
  }
</script>
