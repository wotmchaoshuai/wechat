<template>
  <div class="myheader">
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand">体育器械自助系统</span>
      <button type="button" class="btn btn-light" @click="onLogout">
        <img
          src="../assets/img/arrow-left-circle.svg"
          alt="Bootstrap"
          width="27"
          height="27"
        />
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  methods: {
    onLogout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.navbar-brand {
  padding: 0;
  font-size: 24px;
  height: 7vh;
  line-height: 7vh;
}
</style>