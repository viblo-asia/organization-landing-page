<template>
  <div class="viblo-landing-page">
    <Hero id="top"/>
    <Summary id="home"/>
    <KeyFeatures id="key-features"/>
    <CreatingSection id="creating"/>
    <PublishingSection id="managing"/>
  </div>
</template>

<script>
  import Hero from '~/components/Sections/Hero.vue'
  import Summary from '~/components/Sections/Summary.vue'
  import KeyFeatures from '~/components/Sections/KeyFeatures.vue'
  import CreatingSection from '~/components/Sections/Creating.vue'
  import PublishingSection from '~/components/Sections/Publishing.vue'

  export default {
    components: {
      Hero,
      Summary,
      KeyFeatures,
      CreatingSection,
      PublishingSection
    }
  }
</script>
