import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  score: 15
}

const mutations = {
  INCREMENT(state, value = 1) {
    state.score += value
  },
  DECREMENT(state) {
    state.score--
  }
}

const actions = {
  increment(context) {
    let rand = Math.floor(Math.random() * 100)
    if (rand < 15) console.error('oh no :(')
    else context.commit('INCREMENT', rand)
  }
}

const getters = {
  scoreButPretty(state) {
    return state.score > 100 ? `🦄 ${state.score}` : state.score
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})