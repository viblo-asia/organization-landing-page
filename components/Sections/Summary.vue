<template>
  <section class="section section-summary">
    <div class="container">
      <SectionTitle :title="$t('site.name')" class="wow fadeIn"/>

      <div class="flex-center">
        <p class="subtitle wow slideInLeft fast">
          {{ $t('summary.description') }}
        </p>
      </div>

      <div class="preview columns">
        <div class="column wow slideInLeft fast">
          <img src="~/assets/images/preview-01.jpg">
        </div>
        <div class="column wow slideInRight fast">
          <img src="~/assets/images/preview-02.jpg">
        </div>
      </div>
    </div>
  </section>
</template>
