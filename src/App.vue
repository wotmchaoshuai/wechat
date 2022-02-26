<template>
  <div></div>
  <router-view></router-view>
</template>

<script>
import Login from "./components/login.vue";
import TheMain from "./components/main.vue";
export default {
  name: "app",
  components: {
    Login,
    TheMain,
  },
};
</script>

<style lang="less" scoped>
</style>