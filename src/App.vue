<template>
  <div>
    <Banner></Banner>

    <div class="banner">
      <carousel>
        <slider>
          <img src="http://placehold.it/1200x400?text=one"/>
        </slider>
        <slider>
          <img src="http://placehold.it/1200x400?text=two"/>
        </slider>
        <slider>
          <img src="http://placehold.it/1200x400?text=three"/>
        </slider>
      </carousel>
    </div>

    <div class="info">
      <div class="info_c">
        <div class="info_1">通知公告</div>
        <div class="info_2" id="message">
          <carousel indicators=false controls=false interval=100000>
            <slider>
              <p class="info_2_p">12312</p>
              <div class="info_3">10小时前</div>
            </slider>
            <slider>
              <p class="info_2_p">12312312313</p>
              <div class="info_3">10小时前</div>
            </slider>
            <slider>
              <p class="info_2_p">3123123213</p>
              <div class="info_3">10小时前</div>
            </slider>
          </carousel>
        </div>
        <div class="info_4">
          <span v-on:click="turn('left')"><</span>
          <span v-on:click="turn('right')">></span>
        </div>
      </div>
    </div>

    <div class="top-content">
      <div class="tc-c">
        <div class="tc-c-l _left">
          <div class="tc-c-l-title">习近平视察西吉县成</div>
          <div class="tc-c-l-content">blabalblabalblabblabalblabalblabalblabalblabalblabalblabalblab
          alblabalblabalblabalblabalblabalblabalblabalblabalblabalblabalblabalblabalblabalalblabalblabalblabalblabal</div>
        </div>
        <div class="tc-c-r _right">
          <ul class="tc-c-r-area">
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="middle-content">
      <div class="mc-c">
        <div class="mc-c-l _left">

          <div class="mc-c-l-title">
            <div class="mc-c-l-title-1">研究观新闻</div>
            <div class="mc-c-l-title-2">更多新闻</div>
          </div>

          <div class="mc-c-l-content">
            <div class="mc-c-l-content-pic">
              <img src="http://img1.imgtn.bdimg.com/it/u=2566372841,1576710032&fm=11&gp=0.jpg"/>
              <p class="mc-c-l-content-pic-p">123123123</p>
              <p>123123123</p>
            </div>
            <div class="mc-c-l-content-pic">
              <img src="http://img1.imgtn.bdimg.com/it/u=2566372841,1576710032&fm=11&gp=0.jpg"/>
              <p class="mc-c-l-content-pic-p">123123123</p>
              <p>123123123</p>
            </div>
          </div>
        </div>
        <div class="mc-c-r _right">
          <div class="mc-c-r-title">1231231</div>
          <div class="mc-c-r-content">
            <ul>
              <li>
                <span class="mc-c-r-content-span1">1月</span>
                <span class="mc-c-r-content-span2">/11日</span>
                <span>123121231231231212312312312313123121231231312312</span>
              </li>
              <li>
                <span class="mc-c-r-content-span1">1月</span>
                <span class="mc-c-r-content-span2">/11日</span>
                <span>12312312</span>
              </li>
              <li>
                <span class="mc-c-r-content-span1">1月</span>
                <span class="mc-c-r-content-span2">/11日</span>
                <span>12312312</span>
              </li>
              <li>
                <span class="mc-c-r-content-span1">1月</span>
                <span class="mc-c-r-content-span2">/11日</span>
                <span>12312312</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-content">
      <div class="bc-c">
        <ul>
          <li>
            <img src="http://img1.imgtn.bdimg.com/it/u=2566372841,1576710032&fm=11&gp=0.jpg"/>
            <div class="bc-c-c">
              <div class="bc-c-title">123123</div>
              <div class="bc-c-content">123123</div>
            </div>
          </li>
          <li>
            <img src="http://img1.imgtn.bdimg.com/it/u=2566372841,1576710032&fm=11&gp=0.jpg"/>
            <div class="bc-c-c">
              <div class="bc-c-title">123123</div>
              <div class="bc-c-content">123123</div>
            </div>
          </li>
          <li>
            <img src="http://img1.imgtn.bdimg.com/it/u=2566372841,1576710032&fm=11&gp=0.jpg"/>
            <div class="bc-c-c">
              <div class="bc-c-title">123123</div>
              <div class="bc-c-content"><a href="#">123123</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <Foot></Foot>
  </div>
</template>

<style>
a:hover {
  text-decoration: none;
}
.banner {
  width: 1000px;
  margin: 0 auto;
}
._left {
  float:left;
  overflow: hidden;
}
._right {
  float:right;
  overflow: hidden;
}
.info {
  height: 40px; 
}
.info_c {
  width: 80%;
  margin: 0 auto;
}
.info_1 {
  padding: 0 10px 0 20px;
  color: white;
  background-color:#841621;
  font-size: 24px;
  display: inline-block;
  height: 40px; 
  line-height: 40px;
  float:left;
}
.info_1 a {
  color: white;
}
.info_2 {
  font-size: 16px;
  display: inline-block;
  height: 40px; 
  line-height: 40px;
  margin-left: 20px;
  width:65%;
}
.info_2 p {
  width: 80%;
  font-size: 16px;
  display: inline-block;
  height: 40px; 
  line-height: 40px;
  text-overflow: ellipsis;
  white-space:nowrap;
}
.info_3 {
  font-size: 14px;
  color: gray;
  display: inline-block;
  height: 40px; 
  line-height: 40px;
}
.info_3 a{
  color: gray
}
.info_4 {
  font-size: 14px;
  color: gray;
  display: inline-block;
  height: 40px; 
  line-height: 40px;
  float: right;
}
.info_4 a{
  color: gray
}
.info_4 span a {
  color: white;
}
.info_4 span {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  background-color: black;
}
.top-content {
  background-color: #e8e9e8;
  height: 300px;
}
.tc-c {
  width: 80%;
  margin: 0 auto;
}
.tc-c-l {
  width: 70%;
  padding: 10px;
}
.tc-c-l-title {
  font-size: 36px;
  color:#841621;
  width: 100%;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.tc-c-l-title a{
  color:#841621;
}
.tc-c-l-content {
  font-size: 14px;
  color: gray;
  width: 100%;
  height: 200px;
}
.tc-c-l-content a{
  color: gray;
}
.tc-c-r-area {
  margin:0;
  padding:0;
  height:250px;
  margin-top:25px;
  background-color: #841621;
}
.tc-c-r-area li {
  font-size:16px;
  color:white;
  list-style-type:none;
  height:50px;
  line-height:50px;
  width: 200px;
  overflow:hidden;
  border-bottom: 1px solid white;
  padding-left: 20px;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.tc-c-r-area li a{
  color:white;
}

.middle-content {
  background-color: #fff;
  overflow: hidden;
}
.mc-c {
  width: 80%;
  margin: 0 auto;
}
.mc-c-l {
  width: 70%;
  margin: 0 auto;
}
.mc-c-l-title {
  border-bottom: 1px solid #3f3f3f;
  height: 32px;
  width: 100%;
}
.mc-c-l-title-1 {
  font-size: 24px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  padding-left: 30px;
  width: 75%;
} 
.mc-c-l-title-2 {
  display: inline-block;
  width: 20%;
  font-size:16px;
  color: #841621;
}
.mc-c-l-title-2 a{
  color: #841621;
}
.mc-c-l-content {
  width:100%;
  margin-top: 10px;
}
.mc-c-l-content-pic {
  display: inline-block;
  width: 49%;
}
.mc-c-l-content-pic img {
  width: 98%;
}
.mc-c-l-content-pic-p {
  font-size: 24px;
  font-weight: bolder;
}
.mc-c-r {
  width: 28%;
}
.mc-c-r-title {
  border-bottom: 1px solid #3f3f3f;
  height: 32px;
  line-height:32px;
}
.mc-c-r-content ul{
  margin:0;
  padding:0;
}
.mc-c-r-content ul li {
  list-style-type: none;
  height:65px;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.mc-c-r-content-span1 {
  color: #841621;
  font-size: 32px;
  width: 20px;
}
.mc-c-r-content-span1 a{
  color: #841621;
}
.mc-c-r-content-span2 {
  color: #841621;
  font-size: 14px;
  width: 20px;
}
.mc-c-r-content-span2 a{
  color: #841621;
}
.bottom-content {
  background-color: #e8e9e8;
  overflow:hidden;
}
.bc-c {
  width: 80%;
  margin: 0 auto;
  padding-top:40px;
}
.bc-c ul {
  margin:0;
  padding:0;
} 
.bc-c ul li{
  list-style-type: none;
  width: 33%;
  padding: 10px;
  position: relative;
  float: left;
}
.bc-c ul li img {
  width: 90%;
}
.bc-c-c {
  position: absolute;
  width: 90%;
  top: 0;
  left: 0;
  text-align: center;
  vertical-align: middle;
}
.bc-c-title {
  margin-top: 50px;
  font-size: 28px;
  color: white;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.bc-c-title a{
  color: white;
}
.bc-c-content {
  font-size: 20px;
  color: red;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.bc-c-content a{
  color: red;
}
</style>

<script>

import Banner from './components/Banner.vue'
import Foot from './components/Foot.vue'
import { carousel } from 'vue-strap'
import slider from 'vue-strap/src/slider'

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    Banner,
    carousel,
    slider,
    Foot
  },
  methods: {
    turn(direction) {
      var $parent = document.getElementById('message');
      if(direction == 'left') {
        var $left = $parent.getElementsByClassName('left');
        $left[0].click();
        return;
      }
      if(direction == 'right') {
        var $right = $parent.getElementsByClassName('right');
        $right[0].click();
        return;
      }
    }
  }
}
</script>

