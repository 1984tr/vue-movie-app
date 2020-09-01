<template>
  <v-row class="movie-list" v-masonry item-selector=".item">
    <v-col
      v-masonry-tile
      class="item"
      v-for="movie in movies"
      :key="movie.imbdID"
      cols="12"
      lg="3"
      md="3"
      sm="6">
      <v-card>
        <v-img :src="movie.Poster" :alt="movie.Title" height="300"></v-img>
        <v-card-title>{{ movie.Title }}</v-card-title>
        <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'MovieList',
  computed: {
    movies () {
      return this.$store.state.movie.movies
    }
  }
}
</script>
