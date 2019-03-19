<template>
  <footer class="viblo-footer footer">
    <div class="container">
      <div class="columns">
        <div class="column flex-center justify-content-start">
          <div class="column-inner">
            <a href="/">
              <img class="logo" src="https://viblo.asia/logo_full.svg" alt="Viblo">
            </a>
            <p>{{ $t('site.slogan') }}</p>
          </div>
        </div>

        <div class="column">
          <div class="columns is-mobile flex-end">
            <div class="column menu">
              <p class="menu-label">{{ $t('footer.platform') }}</p>
              <ul class="menu-list">
                <li><a href="https://viblo.asia/app" target="_blank">{{ $t('footer.links.mobile_app') }}</a></li>
                <li><a href="https://atom.io/packages/viblo" target="_blank">{{ $t('footer.links.atom_plugin') }}</a></li>
                <li><a href="https://chrome.google.com/webstore/detail/viblos-news-feed/mliahmjgdpkkicelofhbhgiidgljijmj" target="_blank">{{ $t('footer.links.browser_extension') }}</a></li>
                <li><a href="https://github.com/viblo-asia/sdk-js" target="_blank">{{ $t('footer.links.sdk') }}</a></li>
              </ul>
            </div>

            <div class="column menu">
              <p class="menu-label">{{ $t('footer.resources') }}</p>
              <ul class="menu-list">
                <li><a href="https://www.facebook.com/viblo.asia" target="_blank">{{ $t('footer.links.facebook') }}</a></li>
                <li><a href="https://github.com/viblo-asia" target="_blank">{{ $t('footer.links.github') }}</a></li>
                <li><a href="https://accounts.viblo.asia/regsiter">{{ $t('footer.links.signup') }}</a></li>
                <li><a href="https://viblo.asia/terms">{{ $t('footer.links.terms') }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
