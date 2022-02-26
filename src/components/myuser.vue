<template>
  <div class="user">
    <div class="media">
      <img
        src="../assets/img2/3.png"
        style="height: 5rem"
        class="mr-3"
        alt="..."
      />
      <div class="media-body">
        <h5 class="mt-0">Name</h5>
        <p>Will you do the same for me?</p>
      </div>
    </div>

    <div class="card text-white bg-info mb-3">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Info card title</h5>
        <p class="card-text">Some quick example text</p>
      </div>
    </div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">投诉与建议</li>
      <li class="list-group-item">条款与规则</li>
      <li class="list-group-item">设置</li>
      <li class="list-group-item">关于</li>
    </ul>
    <div class="ppp">
      <p>——made by luhaiYang——</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyUser",
};
</script>

<style lang="less" scoped>
.user {
  padding: 0 2rem;
}
.mr-3 {
  border-radius: 20%;
}
.media {
  margin: 2rem 0 3rem 0;
}
.card {
  height: 10rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px #909090;
}
.list-group {
  margin: 4rem 0 3rem 0;
}
.ppp {
  text-align: center;
}
</style>