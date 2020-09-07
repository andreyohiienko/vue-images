import api from '../../api/imgur'

const state = { token: null }

const getters = {
  isLoggedIn: (state) => !!state.token,
}

const actions = {
  login: () => {
    api.login()
    console.log()
  },
  logout: ({ commit }) => {
    commit('setToken', null)
  },
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
}
