<template>
  <div class="Banner">
    <div class="tb-c">
    <div class="top-banner">
      <div class="log-area">
        <img class="logo" src="../assets/logo.png"/>
      </div>
      <div class="search-area">
        <input class="form-control" type="text" minlength="0" placeholder="search"/>
      </div>
    </div>
    </div>

    <div class="bb-c">
    <div class="bottom-banner">
      <div class="tap-item">首页</div>
      <div class="tap-item">机构问题</div>
      <div class="tap-item">团队建设</div>
      <div class="tap-item">精彩团战</div>
      <div class="tap-item">每周top10</div>
      <div class="tap-item">精彩回放</div>
    </div>
    </div>
  </div>
</template>

<style>
.Banner {
  width: 100%;
}
.tb-c {
  background-color: #841621;
  width: 100%;
}
.top-banner {
  background-color: #841621;
  width: 80%;
  height: 150px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  margin:0 auto;
}
.log-area {
  width: 70%;
}
.search-area {
  vertical-align: middle;
}
.search-area input{
  width: 300px;
  vertical-align: middle;
  margin-top: 70px;
  opacity: 0.3;
  background-color: #3f3f3f;
}
.bb-c {
  width: 100%;
  background-color: #010504;
}
.bottom-banner {
  background-color: #010504;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -webkit-flex-direction: row;
}
.tap-item {
  height: 40px;
  line-height: 40px;
  color: white;
  width: 150px;
  text-align: center;
}
.tap-item:hover{
  color: white;
  background-color: #841621;
  cursor: pointer;
}
</style>

<script>
export default {
  data () {
    return { count: 0 }
  },

  ready () {
  },

  destroyed () {
  }
}
</script>
