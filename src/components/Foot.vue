<template>
  <div class="Foot">
    <div class="foot-content">
      <div class="fc-c">
        <div class="fc-c-title">相关规则:</div>
        <div class="group">
            <select class="form-control dropdown-toggle">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select class="form-control dropdown-toggle">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select class="form-control dropdown-toggle">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select class="form-control dropdown-toggle">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-c">
        <ul>
          <li class="footer-c-title">123</li>
          <li><a href="http://www.baidu.com">123</a></li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <ul>
          <li class="footer-c-title">123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <ul>
          <li class="footer-c-title">123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <ul>
          <li class="footer-c-title">123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <ul>
          <li class="footer-c-title">123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.foot-content {
  background-color: #b4b4b4;
  height: 150px;
}
.fc-c {
  width: 80%;
  height: 250px;
  margin: 0 auto;
  padding-top:20px;
}
.foot-c-title {
  font-size: 20px;
  font-weight: bolder;
  height:32px;
  line-height: 32px;
}
.group select {
  float: left;
  width: 22%;
  margin: 10px;
}
.footer {
  text-align: center;
  background-color: #262626;
  color: white;
}
.footer-c {
  width: 80%;
  height: 300px;
  margin: 0 auto;
}
.footer-c ul {
  margin: 0;
  margin-top: 20px;
  padding: 0;
  width: 19%;
  display: inline-block;
}
.footer-c ul li {
  list-style-type: none;
  width: 100%;
  line-height: 32px;
  font-size: 16px;
  color: #3f3f3f;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.footer-c ul li a {
  color: #3f3f3f;
}
.footer-c ul .footer-c-title {
  font-size: 16px;
  color: white;
}
.footer-c ul .footer-c-title a{
  color: white;
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
