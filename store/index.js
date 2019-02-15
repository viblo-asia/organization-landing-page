import _map from 'lodash/map'

const getLocaleName = code => {
  return code === 'en-US' ? 'English' : 'Tiếng Việt'
}

export const state = () => ({
  locales: ['en-US', 'vi-VN'],
  locale: 'en-US'
})

export const getters = {
  localeList: state => _map(state.locales, code => ({ code, name: getLocaleName(code) })),

  currentLocale: state => ({
    code: state.locale,
    name: getLocaleName(state.locale)
  })
}

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
