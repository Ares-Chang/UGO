<template>
  <!-- 搜索区 -->
  <view class="search" :class="{'focus':focus}">
		<view class="search_box">
			<!-- 搜索框  -->
			<input type="text" @focus="input_focus" :placeholder="placeholder" />
			<text class="cancel" @click="this.focus=false;this.placeholder=''">取消</text>
			<!-- 默认图标 -->
			<view class="icon_1">搜索</view>
			<!-- 聚焦图标 -->
			<view class="icon_2"></view>
		</view>
		<!-- 历史记录 -->
		<view class="res"></view>
		<!-- 搜索列表 -->
  </view>
</template>

<script>
export default {
	data() {
		return {
			focus: false,
			placeholder: ''
		}
	},
	methods: {
		input_focus() {
			this.focus = true
			this.placeholder = '请输入你想要的商品'

			// 获取窗口高度
			var res = uni.getSystemInfoSync()
			// 传递给父级
			this.$emit('windowHeight',res.windowHeight)
		}
	}
};
</script>

<style lang="less" scoped>
/* 搜索区 */
// 选中状态
.search {
  background-color: #ff2d4a;
  box-sizing: border-box;
	padding: 20rpx 16rpx;
	.search_box {
		position: relative;
		input {
			width: 100%;
			height: 60rpx;
			background-color: #fff;
			border-radius: 5rpx;
		}
		.cancel {
			display: none;
		}
		.icon_1 {
			display: block;
			height: 32rpx;
			line-height: 32rpx;
			font-size: 24rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			background: url(http://static.botue.com/ugo/images/icon_search%402x.png) no-repeat;
			background-size: 32rpx;
			padding-left: 48rpx;
			color: #bcbcbc;
		}
		.icon_2 {
			display: none;
		}
	}
	.res {
		display: none;
	}
}

// 聚焦状态
.focus {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: #eeeeee;
	.search_box {
		display: flex;
		input {
			flex: 1;
			margin-right: 20rpx;
			padding-left: 65rpx;
			font-size: 28rpx;
		}
		.cancel {
			width: 160rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			border: 1px solid #cccccc;
			font-size: 30rpx;
			display: block;
			box-sizing: border-box;
			border-radius: 8rpx;
		}
		.icon_1 {
			display: none;
		}
		.icon_2 {
			display: block;
			height: 32rpx;
			width: 32rpx;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 20rpx;
			background: url(http://static.botue.com/ugo/images/icon_search%402x.png) no-repeat;
			background-size: 32rpx;
			padding-left: 48rpx;
		}
	}
	.res {
		display: block;
		position: absolute;
		top: 92rpx;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #222;
	}
}
</style>