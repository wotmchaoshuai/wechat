<template>
  <div class="mylogin shadow-lg p-5 mb-5 bg-white rounded">
    <h1>Login in</h1>
    <div class="form-group mt-4">
      <label for="exampleInputEmail1">Username</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <button
      type="submit"
      class="btn btn-outline-success mt-4"
      @click="onLoginClick"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onLoginClick() {
      if (this.username === "admin" && this.password === "123456") {
        this.$router.push("/main");
        return localStorage.setItem("token", "Bearer xxx");
      }

      localStorage.removeItem("token");
    },
  },
};
</script>

<style lang="less" scoped>
.mylogin {
  margin: 10%;
  margin-top: 40%;
}
.btn {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>