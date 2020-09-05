<template>
  <div class="detail">
    <div v-if="Object.keys(movie).length > 0" class="movie-info">
      <img :src="movie.Poster" :alt="movie.Title" />
      <div>{{ movie.Title }}</div>
      <div>{{ movie.Title }}</div>
    </div>
    <div v-else class="movie-empty">
      <div>Search first :)</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data () {
    return {
      movie: this.$store.state.movie.selectedMovie
    }
  },
  mounted () {
    console.log(this.movie)
  }
}
</script>
<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.movie-info {
  width: 100%;
  img {
    width: 100%;
  }
}
.movie-empty {
  color: green;
  font-size: 32px;
  font-weight: 600;
}
</style>
