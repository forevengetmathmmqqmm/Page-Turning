<template>
	<div class="turn-content" >
		<div id="book" :class="currentPage">
			<div class="odd" id="page1">1</div>
			<div class="even" id="page2">2</div>
			<div class="odd" id="page3">3</div>
			<div class="even" id="page4">4</div>
		</div>
	</div>
</template>
<script setup>
import { formatePx } from '@/utils'
import { nextTick, onMounted, ref } from 'vue';
const currentPage = ref(1)
onMounted(() => {
	initBook()
})
let initBook = () => {
	const height = formatePx(400)
	const width = formatePx(600)
	$('#book').turn({
		acceleration: true, // 是否启动硬件加速 如果为触摸设备必须为true
		pages: 4, // 最大页数
		elevation: 50,
		height: height,
		width,
		autoCenter: true,
		direction: "rtl",
		gradients: true, // 是否显示翻页阴影效果
		when: {
			// 翻页前触发
			turning: function (e, page, view) {
				currentPage.value = 'start'
			},
			// 翻页后触发
			turned: function (e, page) {
			},
			first: (e, page) => {
				currentPage.value = 'first'
			},
			last: (e, page) => {
				currentPage.value = 'last'
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
#book {
	transition: transform .5s;
}
.turn-content {
	width: 100vw;
	display: flex;
	justify-content: center;
}
.first {
	transform: translateX(-25%);
}
.middle {
	transform: translateX(0);
}
.last {
	transform: translateX(25%);
}
</style>