<template>
  <div>
    <div class="mBanner">
      <img class="logo" src="../assets/logo.png"/>
    </div>
    <div class="mbt">
      <mt-header>
        <mt-button slot="left">&nbsp;&nbsp;&nbsp;首页</mt-button>
        <mt-button icon="more" slot="right" @click="handleOpen"></mt-button>
      </mt-header>

      <div class="mbt-expand" v-show="isClick">
        <ul>
          <li><a href="#">新闻学院</a></li>
          <li>经济学院</li>
          <li>环境学院</li>
        </ul>
      </div>

    </div>
  </div>
</template>
<style>
.mBanner {
  width: 100%;
  text-align:center;
  background-color: #821622;
}
.mBanner img {
  padding: 10px 0;
  width:80%;
}
.mint-header {
  background-color: #212826;
}
.mbt {
  position: relative;
}
.mbt-expand {
  position: absolute;
  right:0px;
  top:30px;
  background-color: #212826;
  width:140px;
  z-index: 999;
}
.mbt-expand ul {
  margin:0;
  padding:0;
}
.mbt-expand ul li {
  list-style-type: none;
  line-height: 24px;
  font-size:15px;
  color: white;
  padding: 10px 20px;
}
.mbt-expand ul li a{
  color: white;
}
</style>

<script>
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';

export default {
  data () {
    return { isClick: false}
  },

  ready () {
  },

  destroyed () {
  },
  components: {
    'mt-header': Header,
    'mt-button': Button
  },
  methods: {
    handleOpen() {
      this.$data.isClick = !this.$data.isClick;
    }
  }
}
</script>
