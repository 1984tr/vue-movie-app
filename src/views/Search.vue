<template>
  <div class="search">
    <search-bar />
    <movie-list />
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
  }
}
</script>
<style lang="scss" scoped>
.search {
  padding: 16px;
}
</style>
