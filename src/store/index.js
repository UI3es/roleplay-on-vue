import Vue from 'vue'
import Vuex from 'vuex'

import people from './modules/people'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people
  },
  state: {
    appName: 'Application',
    appNavModel: true,
    appNavMini: true,
    appView: 'employee',
    platformName: 'Platform',
    tenantName: 'Acme Widgets',
    title: 'Application'
  },
  mutations: {
    SET_APP_NAV_MINI: (state, payload) => {
      state.appNavMini = payload
    },
    SET_APP_NAV_MODEL: (state, payload) => {
      state.appNavModel = payload
    },
    SET_APPLICATION_TITLE: (state, payload) => {
      state.title = payload
    },
    SET_APPLICATION_VIEW: (state, payload) => {
      state.appView = payload
    },
    TOGGLE_APP_NAV_MINI: state => {
      state.appNavMini = !state.appNavMini
    },
    TOGGLE_APP_NAV_MODEL: state => {
      state.appNavModel = !state.appNavModel
    }
  },
  actions: {
    CHANGE_APPLICATION_TITLE({ commit }, { title }) {
      commit('SET_APPLICATION_TITLE', title)
    },
    CHANGE_APPLICATION_VIEW({ commit }, { view }) {
      commit('SET_APPLICATION_VIEW', view)
    }
  },
  getters: {
    getAppName: state => state.appName,
    getPlatformName: state => state.platformName,
    getTenantName: state => state.tenantName,
    getTitle: state => state.title
  }
})
