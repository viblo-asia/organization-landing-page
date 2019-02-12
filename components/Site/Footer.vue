<template>
  <footer class="viblo-footer footer">
    <div class="container">
      <div class="columns">
        <div class="column flex-center justify-content-start">
          <div class="column-inner">
            <img class="logo" src="https://viblo.asia/logo_full.svg" alt="Viblo">
            <p>Free service for technical knowledge sharing</p>
          </div>
        </div>

        <div class="column">
          <div class="columns is-mobile flex-end">
            <div class="column menu">
              <p class="menu-label">Platform</p>
              <ul class="menu-list">
                <li><a href="https://viblo.asia/app">Mobile App</a></li>
                <li><a href="https://atom.io/packages/viblo">Atom Plugin</a></li>
                <li><a href="https://chrome.google.com/webstore/detail/viblos-news-feed/mliahmjgdpkkicelofhbhgiidgljijmj">Browser Extension</a></li>
                <li><a href="https://github.com/viblo-asia/sdk-js">Javascript SDK</a></li>
              </ul>
            </div>

            <div class="column menu">
              <p class="menu-label">Resources</p>
              <ul class="menu-list">
                <li><a href="https://www.facebook.com/viblo.asia">Facebook</a></li>
                <li><a href="https://github.com/viblo-asia">Github</a></li>
                <li><a href="https://viblo.asia/regsiter">Signup</a></li>
                <li><a href="https://viblo.asia/terms">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .viblo-footer {
    background: #f9f9f9;
    font-family: Roboto, sans-serif !important;
    .justify-content-start {
      justify-content: flex-start;
    }
    .flex-end {
      justify-content: flex-end;
    }

    .menu {
      max-width: 13rem;
      .menu-label {
        font-size: 1.125rem;
        text-transform: none;
        font-family: inherit;
        font-weight: 600;
        color: rgba(41, 43, 44, 255);
        padding-left: 12px;
        padding-right: 12px;
        letter-spacing: unset;
      }
      .menu-list li a {
        font-size: 1rem;
        color: rgba(41, 43, 44, 255);
      }
    }
    .logo {
      height: 39px;
      width: auto;
      + p {
        font-family: inherit;
      }
    }
  }
</style>
