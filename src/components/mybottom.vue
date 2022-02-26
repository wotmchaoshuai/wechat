<template>
  <div class="mybottom">
    <nav>
      <div class="nav nav-pills nav-fill">
        <router-link class="nav-link active" data-toggle="tab" to="/main/home">
          <img
            src="../assets/img/house.svg"
            alt="Bootstrap"
            width="25"
            height="25"
          />
        </router-link>
        <router-link class="nav-link" data-toggle="tab" to="/main/goods">
          <img
            src="../assets/img/dribbble.svg"
            alt="Bootstrap"
            width="25"
            height="25"
          />
        </router-link>
        <router-link class="nav-link" data-toggle="tab" to="/main/sport">
          <img
            src="../assets/img/clipboard2.svg"
            alt="Bootstrap"
            width="25"
            height="25"
          />
        </router-link>
        <router-link class="nav-link" data-toggle="tab" to="/main/user">
          <div class="b-4">
            <img
              src="../assets/img/person.svg"
              alt="Bootstrap"
              width="25"
              height="25"
            />
          </div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyBottom",
};
</script>

<style lang="less" scoped>
.mybottom {
  background-color: #f8f9fa;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
.nav-link {
  display: block;
  padding: 0;
  height: 7vh;
  line-height: 7vh;
}
</style>