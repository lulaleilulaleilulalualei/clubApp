<template>
	<view class="homeBox">
		<cu-custom bgColor="white" :isBack="false"><block slot="content">首页</block></cu-custom>
		<view class="contentBox">
			<view class="banner-swiper">
				<swiper class="swiper" indicator-color="#E5E5E5" 
						indicator-active-color="#0A0800" 
						:indicator-dots="indicatorDots" 
						:autoplay="autoplay" 
						:interval="interval" 
						:duration="duration">
				    <swiper-item>
				       <view class="swiper-item"><image src="/static/test_img_1.jpeg" mode=""></image></view>
				    </swiper-item>
					<swiper-item>
					   <view class="swiper-item"><image src="/static/test_img_4.jpeg" mode=""></image></view>
					</swiper-item>
					<swiper-item>
					   <view class="swiper-item"><image src="/static/test_img_6.jpeg" mode=""></image></view>
					</swiper-item>
				</swiper>
			</view>
			<view class="list-box">
				<view class="item-box" v-for="item in 5" :key="item">
					<view class="item-img-box">
						<image src="/static/test_img_2.jpeg" mode=""></image>
						<view class="item-sign-icon">西湖春色</view>
					</view>
					<view class="item-info-box">
						<view class="item-info-day">
							<view class="item-info-day-num">04</view>
							<view class="item-info-day-txt">天数</view>
						</view>
						<view class="item-info-text">
							<view class="item-info-title">杭州杭州杭州杭州杭州杭州杭州杭州杭州</view>
							<view class="item-info-data">
								<view class="item-info-batch">班期：09/16-12/31</view>
								<view class="item-info-price">￥<text>1682</text></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部顶高 -->
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500
			}
		}
	}
</script>

<style scoped lang="scss">
	.contentBox {
		padding: 30upx;
		.banner-swiper {
			width: 100%;
			border-radius: 12upx;
			overflow: hidden;
			margin-bottom: 60upx;
			.swiper-item {
				height: 100%;
				width: 100%;
				background-color: $color-bg;
			}
		}
		.list-box {
			.item-box {
				&:not(:last-child) {
					margin-bottom: 68upx;
				}
				.item-img-box {
					width: 100%;
					height: 516upx;
					background-color: $color-bg;
					border-radius: 20upx;
					overflow: hidden;
					position: relative;
					margin-bottom: 30upx;
					.item-sign-icon {
						position: absolute;
						top: 30upx;
						left: 30upx;
						border-radius: 8upx 0 8upx 0;
						background-color: $color-main;
						padding: 2upx 20upx;
						font-size: 20upx;
						color: $text-color-second-black;
					}
				}
				.item-info-box {
					display: flex;
					height: 94upx;
					.item-info-day {
						width: 94upx;
						height: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						background-color: $color-main;
						color: $text-color-second-black;
						border-radius: 8upx;
						margin-right: 20upx;
						.item-info-day-num {
							font-size: 40upx;
						}
						.item-info-day-txt {
							font-size: 20upx;
						}
					}
					.item-info-text {
						flex: 1;
						overflow: hidden;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.item-info-title {
							width: 100%;
							font-size: 36upx;
							font-weight: 700;
							color: $text-color-second-black;
							@extend .ellipse1;
						}
						.item-info-data {
							display: flex;
							align-items: center;
							justify-content: space-between;
							.item-info-batch {
								font-size: 24upx;
								color: $text-color-grey;
							}
							.item-info-price {
								font-size: 24upx;
								color: $text-color-red;
								text {
									display: inline-block;
									font-size: 32upx;
									margin-left: 10upx;
									font-weight: 700;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
