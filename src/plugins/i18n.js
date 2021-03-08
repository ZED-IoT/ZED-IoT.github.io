import Vue from 'vue'
import i18next from 'i18next'
import HttpApi from 'i18next-http-backend'
import VueI18Next from '@panter/vue-i18next'

Vue.use(VueI18Next)

i18next
  .use(HttpApi)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    supportedLngs: ['en'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      crossDomain: true,
    },
  })

export default new VueI18Next(i18next)
