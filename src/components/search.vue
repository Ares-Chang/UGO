<template>
  <!-- 搜索区 -->
  <view class="search">
		<view class="search_box">
			<!-- 搜索框  -->
			<input type="text" />
		</view>
		<!-- 历史记录 -->
		<!-- 搜索列表 -->
  </view>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/* 搜索区 */
.search {
  background-color: #ff2d4a;
  box-sizing: border-box;
  padding: 20rpx 16rpx;
  input {
    width: 100%;
    height: 60rpx;
    background-color: #fff;
    border-radius: 5rpx;
  }
}
</style>