<template>
	<view class="outProDetail">
		<cu-custom :bgColor="navColor" :isBack="true" :textOpacity="textOpacity"><block slot="content">产品详情</block></cu-custom>
		<view class="contentBox">
			<scroll-view class="content-scroll" :scroll-y="true" @scroll="toScroll">
				<view class="detail-banner">
					<swiper class="banner-swiper"
							:indicator-dots="indicatorDots" 
							:autoplay="autoplay" 
							:interval="interval" 
							:duration="duration"
							@change="bindChangeSwiper">
					    <swiper-item v-for="(item, idx) in testSwper" :key="idx">
					       <view class="swiper-item"><image :src="item" mode=""></image></view>
					    </swiper-item>
					</swiper>
					<view class="show-swiper-current">
						<view class="show-current-idx">{{showNumFormat(curentIdx+1)}}</view>
						<view class="show-all-num">/{{showNumFormat(testSwper.length)}}</view>
					</view>
				</view>
				<view class="detail-pro-info">
					<view class="pro-info-price">￥<text>341</text></view>
					<view class="pro-info-ori-price">原售价<text>¥660</text></view>
					<view class="pro-info-title">速干衣速干衣速干衣速干衣速干衣速干衣速干衣速干衣速干衣速干衣</view>
				</view>
				<view class="to-select-size">
					<view class="small-type-title">选择</view>
					<view class="show-size-text">
						<text>请选择规格</text>
					</view>
				</view>
				<view class="to-show-service-box">
					<view class="to-show-shipments">
						<view class="small-type-title">发货</view>
						<view class="show-shipments-info">
							<view class="show-shipments-address">
								<text class="cuIcon-locationfill lg"></text>
								<text>湖南·长沙</text>
							</view>
							<view class="show-shipments-cost">运费：40.00</view>
						</view>
					</view>
					<view class="to-show-service">
						<view class="small-type-title">服务</view>
						<view class="show-service-info"><text>7天无理由 · 15天内发货</text></view>
					</view>
				</view>
				<view class="show-comment-num">商品评价（0条）</view>
				<view class="show-pro-content">
					<view style="width: 100%;height: 400upx;margin: 20upx 0;"><image src="../../static/test_img_4.jpeg" mode=""></image></view>
					<view style="font-size: 28upx; color: #000; padding: 0 30upx;">这里的衣服很好就，这里的东西很好，这里很不错，这里的衣服很好就，这里的东西很好，这里很不错</view>
					<view style="width: 100%;height: 400upx;margin: 20upx 0;"><image src="../../static/test_img_4.jpeg" mode=""></image></view>
					<view style="font-size: 28upx; color: #000; padding: 0 30upx;">这里的衣服很好就，这里的东西很好，这里很不错，这里的衣服很好就，这里的东西很好，这里很不错</view>
					<view style="width: 100%;height: 400upx;margin: 20upx 0;"><image src="../../static/test_img_4.jpeg" mode=""></image></view>
					<view style="font-size: 28upx; color: #000; padding: 0 30upx;">这里的衣服很好就，这里的东西很好，这里很不错，这里的衣服很好就，这里的东西很好，这里很不错</view>
					<view style="width: 100%;height: 400upx;margin: 20upx 0;"><image src="../../static/test_img_4.jpeg" mode=""></image></view>
					<view style="font-size: 28upx; color: #000; padding: 0 30upx;">这里的衣服很好就，这里的东西很好，这里很不错，这里的衣服很好就，这里的东西很好，这里很不错</view>
				</view>
				<!-- 底部顶高 -->
				<view class="cu-tabbar-height"></view>
			</scroll-view>
		</view>
		<view class="bottom-opt-btn">
			<view class="opt-icon-btn">
				<view class="opt-icon-btn-service"><image src="../../static/service_icon.png" mode=""></image></view>
			</view>
			<view class="opt-icon-btn">
				<view class="opt-icon-btn-cat"><image src="../../static/buy_cat_icon.png" mode=""></image></view>
			</view>
			<view class="to-add-buy-cat"><text>加入购物车</text></view>
			<view class="to-buy-pro-btn">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navColor: 'white',
				textOpacity: 0,
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 500,
				curentIdx: 0,
				
				testSwper: ['/static/test_img_1.jpeg', '/static/test_img_2.jpeg' ,'/static/test_img_4.jpeg', '/static/test_img_6.jpeg', '/static/test_img_1.jpeg', '/static/test_img_2.jpeg' ,'/static/test_img_4.jpeg', '/static/test_img_6.jpeg', '/static/test_img_1.jpeg', '/static/test_img_2.jpeg']
			}
		},
		methods: {
			showNumFormat(num) {
				if(num < 10) {
					num = '0' + num
				}
				return num
			},
			toScroll(e) {
				let top = e.detail.scrollTop
				this.textOpacity = top / 400 > 1 ? 1 : top / 400
			},
			bindChangeSwiper(val) {
				this.curentIdx = val.detail.current
			}
		}
	}
</script>

<style scoped lang="scss">
	.outProDetail {
		width: 100%;
		height: 100%;
		position: relative;
		.contentBox {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background: #F6F9FA;
			.content-scroll {
				width: 100%;
				height: 100%;
				.detail-banner {
					width: 100%;
					height: 750upx;
					position: relative;
					.banner-swiper {
						width: 100%;
						height: 100%;
					}
					.swiper-item {
						width: 100%;
						height: 100%;
						background-color: $color-bg;
					}
					.show-swiper-current {
						position: absolute;
						bottom: 44upx;
						right: 30upx;
						z-index: 10;
						display: flex;
						align-items: flex-end;
						.show-current-idx {
							font-size: 36upx;
							color: #fff;
							line-height: 36upx;
						}
						.show-all-num {
							font-size: 26upx;
							color: #fff;
						}
					}
				}
				.detail-pro-info {
					padding: 20upx 30upx 30upx;
					background-color: #fff;
					margin-bottom: 20upx;
					.pro-info-price {
						font-size: 32upx;
						color: $text-color-red;
						margin-bottom: 4upx;
						text {
							display: inline-block;
							font-size: 44upx;
							font-weight: 700;
							margin-left: 10upx;
						}
					}
					.pro-info-ori-price {
						font-size: 26upx;
						color: $text-color-grey;
						margin-bottom: 20upx;
						text {
							display: inline-block;
							margin-left: 10upx;
							text-decoration: line-through;
						}
					}
					.pro-info-title {
						font-size: 32upx;
						color: $text-color-main-black;
						font-weight: 700;
						line-height: 42upx;
						@extend .ellipse2;
					}
				}
				.small-type-title {
					font-size: 28upx;
					color: $text-color-grey;
					margin-right: 40upx;
				}
				.to-select-size {
					padding: 20upx 30upx;
					display: flex;
					align-items: center;
					margin-bottom: 20upx;
					background-color: #fff;
					.show-size-text {
						flex: 1;
						overflow: hidden;
						display: flex;
						align-items: center;
						font-size: 28upx;
						color: $text-color-second-black;
						text {
							flex: 1;
							overflow: hidden;
							@extend .ellipse1;
						}
						&::after {
							content: '';
							display: block;
							width: 12upx;
							height: 12upx;
							border: 2upx solid #B5B5B5;
							border-left-color: transparent;
							border-top-color: transparent;
							transform: rotate(-45deg);
							margin: 0 10upx;
						}
					}
				}
				.to-show-service-box {
					padding: 20upx 30upx;
					background-color: #fff;
					margin-bottom: 20upx;
					.to-show-shipments {
						display: flex;
						align-items: center;
						margin-bottom: 40upx;
						.show-shipments-info {
							display: flex;
							align-items: center;
						}
						.show-shipments-address {
							display: flex;
							align-items: center;
							font-size: 28upx;
							color: $text-color-second-black;
							&::after {
								content: '';
								display: block;
								width: 1px;
								height: 20upx;
								background-color: #EFEFEF;
								margin-left: 20upx;
							}
							.cuIcon-locationfill {
								margin-right: 10upx;
							}
						}
						.show-shipments-cost {
							padding-left: 20upx;
						}
					}
					.to-show-service {
						display: flex;
						align-items: center;
						.show-service-info {
							flex: 1;
							font-size: 28upx;
							color: $text-color-second-black;
							display: flex;
							align-items: center;
							justify-content: space-between;
							&::after {
								content: '';
								display: block;
								width: 12upx;
								height: 12upx;
								border: 2upx solid #B5B5B5;
								border-left-color: transparent;
								border-top-color: transparent;
								transform: rotate(-45deg);
								margin: 0 10upx;
							}
						}
					}
				}
				.show-comment-num {
					padding: 20upx 30upx;
					background-color: #fff;
					margin-bottom: 20upx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					&::after {
						content: '';
						display: block;
						width: 12upx;
						height: 12upx;
						border: 2upx solid #B5B5B5;
						border-left-color: transparent;
						border-top-color: transparent;
						transform: rotate(-45deg);
						margin: 0 10upx;
					}
				}
				.show-pro-content {
					
				}
			}
		}
		.bottom-opt-btn {
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 10;
			width: 100%;
			height: 100upx;
			display: flex;
			background-color: #fff;
			box-shadow: 0 4upx 8upx 0 rgba(0,0,0,0.50);
			.opt-icon-btn {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				view {
					width: 34upx;
					height: 34upx;
				}
				.opt-icon-btn-cat {
					width: 36upx;
				}
			}
			.to-add-buy-cat {
				height: 100%;
				display: flex;
				align-items: center;
				text {
					display: inline-block;
					padding: 0 50upx;
					border-left: 1px solid #F7F7F7;
					font-size: 32upx;
					color: $text-color-second-black;
				}
			}
			.to-buy-pro-btn {
				width: 260upx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: $color-main;
				font-size: 32upx;
				color: $text-color-second-black;
			}
		}
	}
</style>
