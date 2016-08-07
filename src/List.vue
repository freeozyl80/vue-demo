<template>
  <div>
    <Banner></Banner>
    <div class="content">
    	<div class="cc">
	    	<ul>
	    		<li><a href="#">1231231231232<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
	    		<li><a href="#">1231313123132<span>2016-12-12</span></a></li>
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
.content{
	width:100%;
}
.cc {
	background-color: #f3f3f3;
	width: 80%;
	margin: 0 auto;
	padding: 60px 0;
}
.cc ul {
	margin: 0;
	padding: 0;
}
.cc ul li {
	padding: 0 60px;
	line-height: 50px;
	font-size: 14px;
	list-style-type: square;
	border-bottom: 1px solid #e6e6e6;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow: hidden;
	height: 50px;
}
.cc ul li:hover{
	background-color: white;
}
.cc ul li a {
	color: #3f3f3f;
}
.cc ul li span {
	font-size: 12px;
	color: #7f7f7f;
	line-height: 50px;
	float: right;
}
</style>

<script>
import Banner from './components/Banner.vue'
import Foot from './components/Foot.vue'

export default {
  components: {
    Banner,
    Foot
  }
}
</script>