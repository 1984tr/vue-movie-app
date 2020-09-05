<template>
  <div class="search">
    <search-bar />
    <movie-list
      @select-movie="selectMovie"/>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'

export default {
  name: 'Search',
  components: {
    SearchBar,
    MovieList
  },
  methods: {
    selectMovie (movie) {
      this.$store.commit('movie/selectMovie', movie)
      this.$router.push('/detail')
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  padding: 16px;
}
</style>
