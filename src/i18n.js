import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'vuetify/lib/locale/en'
import es from 'vuetify/lib/locale/es'
import it from 'vuetify/lib/locale/it'
import store from './store'

Vue.use(VueI18n)

const messages = {
  en: {
    ...require('@/locales/en.json'),
    $vuetify: en,
  },
  es: {
    ...require('@/locales/es.json'),
    $vuetify: es,
  },
  it: {
    ...require('@/locales/it.json'),
    $vuetify: it,
  },
}

export default new VueI18n({
  locale: store.state.appLanguage || 'es',
  messages,
})