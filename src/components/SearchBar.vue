<template>
  <div>
    <v-text-field
      class="search-component"
      v-model="title"
      @keypress.enter="searchMovies"
      outlined>
      <template v-slot:prepend-inner>
        <v-icon>search</v-icon>
      </template>
      <template v-slot:append>
        <v-progress-circular
          v-if="loading"
          color="primary"
          size="24"
          indeterminate />
      </template>
    </v-text-field>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    title: {
      get () {
        return this.$store.state.movie.title
      },
      set (title) {
        this.$store.commit('movie/updateState', {
          title
        })
      }
    },
    loading () {
      return this.$store.state.movie.loading
    }
  },
  methods: {
    ...mapActions('movie', [
      'searchMovies'
    ])
  }
}
</script>
<style lang="scss" scoped>

</style>
