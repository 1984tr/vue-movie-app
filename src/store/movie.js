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
    },
    pushIntoMovies (state, movies) {
      state.movies.push(...movies)
    }
  },
  actions: {
    fetchMovies ({ state, commit }, pageNum) {
      return new Promise(resolve => {
        (async () => {
          const res = await axios.get(`https://www.omdbapi.com/?apikey=97ef7695&s=${state.title}&page=${pageNum}`)
          commit('pushIntoMovies', res.data.Search)
          resolve(res.data)
        })()
      })
    },
    async searchMovies ({ commit, dispatch }) {
      try {
        commit('updateState', {
          loading: true,
          movies: []
        })
        const { totalResults } = await dispatch('fetchMovies', 1)
        const totalCount = Math.ceil(totalResults / 10)
        for (let i = 2; i <= totalCount; i++) {
          if (i > 4) break
          await dispatch('fetchMovies', i)
        }
      } catch (e) {
        alert(e)
      } finally {
        commit('updateState', { loading: false })
      }
    }
  }
}
