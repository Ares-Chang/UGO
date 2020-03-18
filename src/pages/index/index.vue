<template>
  <view :style="{height: pageHeight, overflow: 'hidden'}">
    <search @search="disableScroll" />
    <!-- 焦点图 -->
    <swiper class="banner" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item v-for="item in swiperData" :key="item.goods_id">
        <navigator url="/pages/goods/index">
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 导航条 -->
    <view class="navs">
      <navigator open-type="switchTab" url="/pages/category/index" v-for="item in navData" :key="item.name">
        <image :src="item.image_src"></image>
      </navigator>
    </view>
    <!-- 楼层 -->
    <view class="floors">
      <view class="floor" v-for="floor in floorsData" :key="floor.floor_title.name">
        <view class="title">
          <image :src="floor.floor_title.image_src"></image>
        </view>
        <view class="items">
          <navigator url="/pages/list/index" v-for="(product,index) in floor.product_list" :key="index">
            <image :src="product.image_src"></image>
          </navigator>
        </view>
      </view>
    </view>
    <!-- 回到顶部 -->
    <view class="goTop icon-top"></view>
  </view>
</template>

<script>
  import search from '@/components/search';

  export default {

    data () {
      return {
        pageHeight: 'auto',
        swiperData: [],
        navData: [],
        floorsData: []
      }
    },

    components: {
      search
    },
    
    methods: {
      disableScroll (ev) {
        this.pageHeight = ev.pageHeight + 'px';
      },
      // 获取轮播图数
      async getSwiperList() {
        const {message} = await this.request({
          url: '/api/public/v1/home/swiperdata'
        })
        // console.log(message)
        this.swiperData = message
      },
      // 获取导航图数
      async getNavList() {
        const {message} = await this.request({
          url: '/api/public/v1/home/catitems'
        })
        // console.log(message)
        this.navData = message
      },
      // 获取楼层数据
      async getfloorList() {
        const {message} = await this.request({
          url: '/api/public/v1/home/floordata'
        })
        // console.log(message)
        this.floorsData = message
      }
    },
    // 页面加载时候请求
    onLoad() {
      // 获取轮播图数据
      this.getSwiperList()
      // nav数据
      this.getNavList()
      // floor数据
      this.getfloorList()
    }
  }
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    height: 340rpx;

    image {
      width: 100%;
      height: 340rpx;
    }
  }

  .navs {
    display: flex;
    justify-content: space-between;
    padding: 30rpx 44rpx;

    image {
      width: 128rpx;
      height: 140rpx;
    }
  }

  .floor {

    .title {
      width: 750rpx;
      height: 60rpx;
      padding: 20rpx 0 0 8rpx;
      background-color: #f4f4f4;
    }

    .items {
      padding: 20rpx 16rpx;
      overflow: hidden;

      navigator {
        width: 193rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
        float: left;
      }

      navigator:first-child {
        width: 232rpx;
        height: 386rpx;
        margin-left: 0rpx;
      }

      navigator:nth-child(2),
      navigator:nth-child(5) {
        width: 273rpx;
      }
    }

    &:first-child {

      .items {

        navigator {
          width: 233rpx;
        }
      }
    }
  }

  .goTop {
    position: fixed;
    bottom: 30rpx;
    /* #ifdef H5 */
    bottom: 65px;
    /* #endif */
    right: 30rpx;
  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
    height: 100rpx;
    font-size: 48rpx;
    color: #666;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>