<template>
  <section class="section section-features">
    <div class="container">
      <SectionTitle title="Key Features"/>

      <div class="columns features">
        <div class="column">
          <img src="~/assets/images/feature-01.jpg">
        </div>
        <div class="column key-features">
          <div class="column-inner">
            <div class="feature media">
              <div class="media-left">
                <img src="~/assets/icons/icon-01.jpg">
              </div>
              <div class="media-content">
                <h3 class="subtitle">Reach a wider audience with Viblo's growing community.</h3>
              </div>
            </div>
            <div class="feature media">
              <div class="media-left">
                <img src="~/assets/icons/icon-02.jpg">
              </div>
              <div class="media-content">
                <h3 class="subtitle">Multiple collaborators with editors and writer roles.</h3>
              </div>
            </div>
            <div class="feature media">
              <div class="media-left">
                <img src="~/assets/icons/icon-03.jpg">
              </div>
              <div class="media-content">
                <h3 class="subtitle">Statistics available via Google Analytics tracking.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns features">
        <div class="column key-features">
          <div class="column-inner">
            <div class="feature media">
              <div class="media-left">
                <img src="~/assets/icons/icon-04.jpg">
              </div>
              <div class="media-content">
                <div>
                  <h3 class="subtitle">Promoting organization</h3>
                  <p>Get a place on the home page as a featured top active organization</p>
                  <p>Get credit for posts made by your authors..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="preview">
            <img src="~/assets/images/preview-03.jpg">
          </div>
          <div class="preview">
            <img src="~/assets/images/preview-04.jpg">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .section-features {
    .section-title {
      margin-bottom: 3rem;
    }
    .key-features {
      flex-direction: column;
    }
    .key-features,
    .feature .media-content,
    .feature .media-left {
      display: flex;
      align-self: center;
    }
    .feature + .feature {
      border-top: none;
    }
    .feature {
      .subtitle {
        font-size: 1rem;
        font-weight: 500;
      }
      p + p {
        margin-top: 1rem;
      }
    }
    .features + .features {
      margin-top: 2rem;
    }
  }
</style>
