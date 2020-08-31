import axios from 'axios'
export default {
  namespaced: true,
  state: () => ({
    title: '',
    loading: false,
    movies: []
  }),
  getters: {

  },
  mutations: {
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async searchMovies ({ state, commit }) {
      try {
        commit('updateState', { loading: true })
        const res = await axios.get(`https://www.omdbapi.com/?apikey=97ef7695&s=${state.title}`)
        commit('updateState', { movies: res.data.Search })
      } catch (e) {
        alert(e)
      } finally {
        commit('updateState', { loading: false })
      }
    }
  }
}
