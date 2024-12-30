<template>
	<div id="book">
		<!-- : 'page ' + ((page % 2 == 0) ? '' : 'even'), 'id': 'page-' + page -->
		<div class="odd" id="page1"></div>
		<div class="even" id="page2"></div>
		<div class="odd" id="page3"></div>
		<div class="even" id="page4"></div>
	</div>
</template>
<script setup>
import { nextTick, onMounted, ref } from 'vue';
onMounted(() => {
	initBook()
})
let initBook = () => {
	$('#book').turn({
		acceleration: true, // 是否启动硬件加速 如果为触摸设备必须为true
		pages: 4, // 最大页数
		elevation: 50,
		height: 200,
		direction: "rtl",
		gradients: true, // 是否显示翻页阴影效果
		when: {
			// 翻页前触发
			turning: function (e, page, view) {
				console.log(view)
				let width = $(window).width()
				var range = $(this).turn('range', page);
				if (page + 1 !== 4 && page - 1 !== 1) {
					$("#book").width(width * 0.95 + 'px')
				}
			},
			// 翻页后触发
			turned: function (e, page) {
				if (page === 1 || page === 4) {
				let width = $(window).width()

					$("#book").width(width * 0.475 + 'px')
				}
			}
		}
	});
}
$("#book").on("touchstart", function (e) {
	// 判断默认行为是否可以被禁用
	if (e.cancelable) {
		// 判断默认行为是否已经被禁用
		if (!e.defaultPrevented) {
			e.preventDefault();
		}
	}
	startX = e.originalEvent.changedTouches[0].pageX;
	startY = e.originalEvent.changedTouches[0].pageY;
});
$("#book").on("touchend", function (e) {
	// 判断默认行为是否可以被禁用
	if (e.cancelable) {
		// 判断默认行为是否已经被禁用
		if (!e.defaultPrevented) {
			e.preventDefault();
		}
	}
	moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
	//左右滑
	if (X > 50) {
		$('#book').turn('previous');
	}
	//右左滑
	else if (X < -50) {
		$('#book').turn('next');
	}
});
</script>
<style lang="css" scoped>
body {
	padding-top: 30px;
}

#book {
	width: 90vw;
	margin: 0 auto;
	/* box-shadow: 0 0 15px #4d4c4c; */
}

#book .turn-page {
	background-color: white;
}

#book .cover {
	background: #333;
}

#book .cover h1 {
	color: white;
	text-align: center;
	font-size: 50px;
	line-height: 500px;
	margin: 0px;
}

#book .loader {
	/* background-image: url(loader.gif); */
	width: 24px;
	height: 24px;
	display: block;
	position: absolute;
	top: 238px;
	left: 188px;
}

#book .data {
	text-align: center;
	font-size: 40px;
	color: #999;
	line-height: 500px;
}

#controls {
	width: 100vw;
	text-align: center;
	margin: 20px 0px;
	font: 30px arial;
}

#controls input,
#controls label {
	font: 30px arial;
}

#book .odd {
	/* background-image: -webkit-linear-gradient(left, #FFF 95%, #ddd 100%);
			background-image: -moz-linear-gradient(left, #FFF 95%, #ddd 100%);
			background-image: -o-linear-gradient(left, #FFF 95%, #ddd 100%);
			background-image: -ms-linear-gradient(left, #FFF 95%, #ddd 100%); */
	box-shadow: 0 0 15px #4d4c4c;
	background-color: aqua;
}

#book .even {
	/* background-image: -webkit-linear-gradient(right, #FFF 95%, #ddd 100%);
			background-image: -moz-linear-gradient(right, #FFF 95%, #ddd 100%);
			background-image: -o-linear-gradient(right, #FFF 95%, #ddd 100%);
			background-image: -ms-linear-gradient(right, #FFF 95%, #ddd 100%); */
	box-shadow: 0 0 15px #4d4c4c;
	background-color: aquamarine;
}
</style>