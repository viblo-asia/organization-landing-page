<template>
  <section class="section section-features">
    <div class="container">
      <SectionTitle :title="$t('main_menu.key_features')" class="wow fadeIn"/>

      <div class="columns features">
        <div class="column">
          <img src="~/assets/images/feature-01.jpg">
        </div>
        <div class="column key-features">
          <div class="column-inner">
            <div class="feature media wow slideInRight fast">
              <div class="media-left">
                <img src="~/assets/icons/icon-01.jpg">
              </div>
              <div class="media-content">
                <h3 class="subtitle">{{$t('key_features.reach_wider_audience')}}</h3>
              </div>
            </div>
            <div class="feature media wow slideInRight fast">
              <div class="media-left">
                <img src="~/assets/icons/icon-02.jpg">
              </div>
              <div class="media-content">
                <h3 class="subtitle">{{$t('key_features.multiple_collaborators')}}</h3>
              </div>
            </div>
            <div class="feature media wow slideInRight fast">
              <div class="media-left">
                <img src="~/assets/icons/icon-03.jpg">
              </div>
              <div class="media-content">
                <h3 class="subtitle">{{$t('key_features.ga_available')}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns features">
        <div class="column key-features">
          <div class="column-inner">
            <div class="feature media wow slideInLeft fast">
              <div class="media-left">
                <img src="~/assets/icons/icon-04.jpg">
              </div>
              <div class="media-content">
                <div>
                  <h3 class="subtitle">{{$t('key_features.promoting')}}</h3>
                  <p>{{$t('key_features.place_on_homepage')}}</p>
                  <p>{{$t('key_features.get_credit')}}</p>
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

      <CreateNowButton :text="$t('button.create_now')" class="mt-4 mb-4"/>
    </div>
  </section>
</template>
