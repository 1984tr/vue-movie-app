<template>
  <div>
    <v-text-field
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
export default {
  data () {
    return {
      title: '',
      loading: false
    }
  },
  methods: {
    searchMovies () {
      console.log('search!!')
    }
  }
}
</script>
