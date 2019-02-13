<template>
  <section class="section section-summary">
    <div class="container">
      <SectionTitle title="Viblo Organization"/>

      <div class="flex-centered">
        <p class="subtitle">
          Viblo organization is a place where companies, teams and groups can share their perspectives,
          visions and development stories.
        </p>
      </div>

      <div class="preview columns">
        <div class="column">
          <img src="~/assets/images/preview-01.jpg">
        </div>
        <div class="column">
          <img src="~/assets/images/preview-02.jpg">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .section-summary {
    .flex-centered {
      display: flex;
      justify-content: center;
    }
    .subtitle {
      font-size: 1rem;
      line-height: 1.8rem;
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 800px;
      text-align: center;
      margin-bottom: 3rem;
    }
    .preview img {
      width: 100%;
      height: auto;
    }
  }
</style>
