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
import MyGoods from "./mygoods.vue";
import MyHome from "./myhome.vue";
import MyUser from "./myuser.vue";
export default {
  name: "Main",
  components: {
    MyHeader,
    MyBottom,
    MyGoods,
    MyHome,
    MyUser,
  },
};
</script>

<style lang="less" scoped>
</style>