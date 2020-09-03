<template>
  <div class="app">
    <router-link
      to="/"
      class="to-home">
      HOME
    </router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: gray;
}
.to-home {
  padding: 8px;
  color: white;
}
</style>
