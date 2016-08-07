<template>
	<div>
  		<mbanner></mbanner>
  		<div class="list-content">
  			<ul class="l-c-c">
				<a href="https://www.baidu.com">
					<li>
						<div class="l-c-c-l">2014就斯蒂芬森地方</div>
						<div class="l-c-c-r">2013/12/12</div>
					</li>
				</a>
				<a href="#">
					<li>
						<div class="l-c-c-l">2014就斯蒂芬森地方</div>
						<div class="l-c-c-r">2013/12/12</div>
					</li>
				</a>
				<a href="#">
					<li>
						<div class="l-c-c-l">2014就斯蒂芬森地方</div>
						<div class="l-c-c-r">2013/12/12</div>
					</li>
				</a>
				<a href="#">
					<li>
						<div class="l-c-c-l">2014就斯蒂芬森地方</div>
						<div class="l-c-c-r">2013/12/12</div>
					</li>
				</a>
  			</ul>
  		</div>
	</div>
</template>

<style>
.list-content{
	padding: 10px;
}
.l-c-c {
	margin: 0;
	padding: 0;
	overflow: hidden;
}
.l-c-c li {
	list-style-type: none;
	margin: 10px;
	border-bottom: 1px solid #e6e6e6;
  	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	flex-direction: row;
	-webkit-flex-direction: row;
	line-height: 30px;
}
.l-c-c-l {
	width: 85%;
}
.l-c-c-r {
	width: 15%;
	font-size: 11px;
	color: gray;
	line-height: 30px;
}
</style>

<script>
import mbanner from './components/mbanner.vue'

export default {
  components: {
  	mbanner
  }
}
</script>