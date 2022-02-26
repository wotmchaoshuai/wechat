<template>
  <div class="container">
    <my-header></my-header>
    <div class="main-body">
      <router-view></router-view>
    </div>

    <my-bottom></my-bottom>
  </div>
</template>

<script>
import MyHeader from "./myheader.vue";
import MyBottom from "./mybottom.vue";

export default {
  name: "Main",
  components: {
    MyHeader,
    MyBottom,
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 0;
}
</style>