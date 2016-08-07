<template>
  <div>
    <Banner></Banner>
    <div class="content">
    	<div class="cc">
	    	<div class="content-title">
	    		<div class="content-title-1">首页 >  研究院新闻</div>
	    		<div class="content-title-2">提高采收率研究院“科研方法和规划漫谈”学术讲座成功举办</div>
	    		<div class="content-title-3">发布日期：2016-03-30　 475
</div>
	    	</div>
	    	<div class="content-content">
	    		<p>2016年3月30日上午9:30，提高采收率研究院“科研方法和规划漫谈”学术讲座在新综合楼A327举行，本院蒋建方老师和赵凤兰老师作为本次学术讲座的主讲人。
报告会上，蒋建方老师结合自身的实践经验和研究成果，首先向同学提出问题——科学是什么，技术又是什么。然后，从压裂增产理论，SRV的检测与预测和科学与技术定义等方面为同学们明确了科学与技术的区别与联系。科学可以认识世界而技术则可以改变世界。蒋老师在报告中也指出，造成油产量大幅增加，油价下跌，就业困难等的关键因素是“改造体积”。“改造体积”在石油行业的高速发展中诞生，却也为石油行业带来了如今的困境。赵老师提出——科学技术与艺术存在本质区别。科学与技术可以被重复，但艺术具有不可重复性。两位老师在最后的师生提问互动环节中强调博览群书的重要性。两位老师以自身经验引导同学们在学习和实验中注意思考和总结，不做千篇一律的重复实验，要学会对新知识的巧学和应用；不追求某一组数据的成功，要在经验总结中寻找正确的方法；不照搬师兄师姐的实验操作，要在思考中设计自己的实验方案。最后，两位老师指出中国学生总是感性的看待问题，缺乏合理的逻辑与条理性，引导学生在今后的学习和生活中善于培养自身的逻辑思维能力，提升理性思维意识，合理安排时间，实现自身规划。同学们在两位老师严谨但又不乏幽默的讲解中受益匪浅。
通过本次讲座，激励同学们以更加积极的态度去面对现今迷茫的石油形势，激发了同学们的科研热情，也相信同学们在今后的科研和人生规划中都有了更加明确的思路。</p>
	    	</div>
    	</div>
    </div>
    <Foot></Foot>
  </div>
</template>

<style>
.content{
	width:100%;
}
.cc {
	background-color: #f3f3f3;
	width: 80%;
	margin: 0 auto;
	padding: 30px;
}
.content-title-1 {
	color: #000;
	line-height:32px;
	color: gray;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow: hidden;
}
.content-title-2 {
	margin-top: 40px;
	text-align: center;
	font-size: 32px;
	line-height:42px;
	color: gray;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow: hidden;
}
.content-title-3 {
	text-align: center;
	line-height:32px;
	font-size: 18px;
	color: gray;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow: hidden;
}
.content-content {
	margin-top: 60px;
	min-height: 800px;
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