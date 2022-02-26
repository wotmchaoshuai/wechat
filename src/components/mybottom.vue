<template>
  <div class="mybottom">
    <nav>
      <div class="nav nav-fill">
        <router-link
          class="nav-link active btn-outline-info"
          data-toggle="tab"
          to="/main/home"
        >
          <img
            src="../assets/img/house.svg"
            alt="Bootstrap"
            width="25"
            height="25"
          />
        </router-link>
        <router-link
          class="nav-link btn-outline-info"
          data-toggle="tab"
          to="/main/goods"
        >
          <img
            src="../assets/img/dribbble.svg"
            alt="Bootstrap"
            width="25"
            height="25"
          />
        </router-link>
        <router-link
          class="nav-link btn-outline-info"
          data-toggle="tab"
          to="/main/user"
        >
          <img
            src="../assets/img/person.svg"
            alt="Bootstrap"
            width="25"
            height="25"
          />
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
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
.nav-link {
  display: block;
  padding: 0;
  height: 7vh;
  line-height: 50px;
}
</style>