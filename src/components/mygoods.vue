<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div class="goods">
    <div class="goo-search">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's usernam"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            搜索
          </button>
        </div>
      </div>
    </div>
    <div
      class="card"
      data-toggle="modal"
      data-target="#exampleModal"
      style="width: 10rem; height: 15rem"
    >
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>
    <div
      class="card card2"
      data-toggle="modal"
      data-target="#exampleModal"
      style="width: 10rem; height: 15rem"
    >
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>

    <div
      class="card"
      data-toggle="modal"
      data-target="#exampleModal"
      style="width: 10rem; height: 15rem"
    >
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>
    <div
      class="card card2"
      data-toggle="modal"
      data-target="#exampleModal"
      style="width: 10rem; height: 15rem"
    >
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>

    <div class="card" style="width: 10rem; height: 15rem">
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>
    <div class="card card2" style="width: 10rem; height: 15rem">
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>

    <div class="card" style="width: 10rem; height: 15rem">
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>
    <div class="card card2" style="width: 10rem; height: 15rem">
      <img src="../assets/img2/3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">篮球</p>
        <p class="card-text">库存:6</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MyGoods",
};
</script>

<style lang="less" scoped>
.goods {
  position: absolute;
  padding: 2rem;
  padding-bottom: 3.5rem;
}
.card-img-top {
  padding: 1rem;
}
.card-text {
  padding: 0;
  margin: 0;
}
.card {
  float: left;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.card2 {
  float: right;
}
.goo-search {
  margin-bottom: 3rem;
}
</style>