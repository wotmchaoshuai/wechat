<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <a
        class="nav-link active"
        id="home-tab"
        data-toggle="tab"
        href="#home"
        role="tab"
        aria-controls="home"
        aria-selected="true"
        >全部</a
      >
    </li>
    <li class="nav-item" role="presentation">
      <a
        class="nav-link"
        id="profile-tab"
        data-toggle="tab"
        href="#profile"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
        >已归还</a
      >
    </li>
    <li class="nav-item" role="presentation">
      <a
        class="nav-link"
        id="contact-tab"
        data-toggle="tab"
        href="#contact"
        role="tab"
        aria-controls="contact"
        aria-selected="false"
        >未归还</a
      >
    </li>
  </ul>

  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text</p>
        </div>
      </div>
      <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text</p>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text</p>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="contact"
      role="tabpanel"
      aria-labelledby="contact-tab"
    >
      <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySport",
};
</script>

<style lang="less" scoped>
.card {
  height: 10rem;
  width: 90%;
  margin: 1.5rem auto 0;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px #909090;
}
</style>