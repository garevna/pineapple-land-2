/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  testimonials: null
}

const getters = {
  host: (state, getters, rootState) => rootState.host,
  db: (state, getters) => `${getters.host}/testimonials`,
  photos: (state, getters) => `${getters.host}/avatars`
}

const mutations = {
  UPDATE_CONTENT (state, payload) {
    state.testimonials = payload
  }
}

const actions = {
  async GET_CONTENT ({ getters, commit }) {
    const content = await (await fetch(getters.db)).json()
    // content = content.map((item) => Object.assign({}, item, { photo: `${getters.photos}/${item.photo}` }))
    commit('UPDATE_CONTENT', content)
    return content
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
