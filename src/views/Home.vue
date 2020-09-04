<template>
  <div class="home">
    <div class="title">Vue Movie App</div>
    <router-link
      tag="h2"
      to="/search">
      Go to search
    </router-link>
    <router-link
      tag="h2"
      to="/detail">
      Go to detail
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 36px;
  font-weight: 700;
  color: white;

  margin-bottom: 16px;
}
h2 {
  font-size: 24px;
  font-weight: 700;
  color: teal;
}
h2 + h2 {
  margin-top: 16px;
}
</style>
