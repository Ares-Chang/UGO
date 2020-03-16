<template>
	<view class="content">
		<!-- 搜索区 -->
		<view class="search">
			<input type="text">
		</view>
		
		<!-- 轮播图 -->
		<swiper>
			<swiper-item>
				<navigator src="">
					<image src="/static/uploads/banner1.png" />
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator src="">
					<image src="/static/uploads/banner2.png" />
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator src="">
					<image src="/static/uploads/banner3.png" />
				</navigator>
			</swiper-item>
		</swiper>

		<!-- nav区域 -->
		<view class="nav">
			<navigator class="item">
				<image src="/static/uploads/icon_index_nav_1@2x.png" />
			</navigator>
			<navigator class="item">
				<image src="/static/uploads/icon_index_nav_2@2x.png" />
			</navigator>
			<navigator class="item">
				<image src="/static/uploads/icon_index_nav_3@2x.png" />
			</navigator>
			<navigator class="item">
				<image src="/static/uploads/icon_index_nav_4@2x.png" />
			</navigator>
		</view>

    <!-- 楼层 -->
    <!-- floor 1 -->
    <view class="floor floor_1">
      <view class="title">
				<image src="/static/uploads/pic_floor01_title.png" />
      </view>
      <view class="imgs">
        <navigator class="item">
          <image src="/static/uploads/pic_floor01_1@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor01_2@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor01_3@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor01_4@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor01_5@2x.png" />
        </navigator>
      </view>
    </view>
    <!-- floor 2 -->
    <view class="floor">
      <view class="title">
				<image src="/static/uploads/pic_floor02_title.png" />
      </view>
      <view class="imgs">
        <navigator class="item">
          <image src="/static/uploads/pic_floor02_1@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor02_2@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor02_3@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor02_4@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor02_5@2x.png" />
        </navigator>
      </view>
    </view>
    <!-- floor 3 -->
    <view class="floor">
      <view class="title">
				<image src="/static/uploads/pic_floor03_title.png" />
      </view>
      <view class="imgs">
        <navigator class="item">
          <image src="/static/uploads/pic_floor03_1@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor03_2@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor03_3@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor03_4@2x.png" />
        </navigator>
        <navigator class="item">
          <image src="/static/uploads/pic_floor03_5@2x.png" />
        </navigator>
      </view>
    </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
.content {
	// 搜索区
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

	// 轮播图
	swiper {
		image {
			width: 750rpx;
			height: 340rpx;
		}
  }
  
  // nav区域
  .nav {
    display: flex;
    height: 195rpx;
    .item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      image {
        width: 128rpx;
        height: 140rpx;
      }
    }
  }

  // 楼层
  .floor {
    .title {
      padding-top: 16rpx;
      padding-left: 20rpx;
      box-sizing: border-box;
      background-color: #f4f4f4;
      image {
        height: 60rpx;
        width: 100%;
      }
    }
    .imgs {
      box-sizing: border-box;
      padding: 20rpx 16rpx;
      overflow: hidden;
      .item {
        float: left;
        margin-right: 10rpx;
      }
      .item:nth-child(1) {
        image {
          width: 232rpx;
          height: 368rpx;
        }
      }
      .item:nth-child(2),.item:nth-child(5) {
        image {
          width: 273rpx;
          height: 188rpx;
        }
      }
      .item:nth-child(3),.item:nth-child(4) {
        image {
          width: 203rpx;
          height: 188rpx;
        }
      }
      .item:nth-child(3),.item:nth-child(4) {
        margin-right: 0;
      }
    }
  }

  .floor_1 {
    .imgs {
      .item:nth-child(n+2) {
       image {
          width: 238rpx;
          height: 188rpx;
       }
      }
    }
  }

}
</style>
