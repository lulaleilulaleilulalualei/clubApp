<template>
	<view class="retailBox">
		<cu-custom bgColor="white" :isBack="false"><block slot="content">分销</block></cu-custom>
		<view class="top-search-box">
			<view class="top-search-input">
				<view class="top-search-icon"><image src="/static/search-icon.png" mode=""></image></view>
				<view class="to-search-inp-box"><input type="text" value="" placeholder="搜索目的地/线路名" /></view>
			</view>
		</view>
		<view class="select-type-box">
			<scroll-view class="select-type-scroll" :scroll-x="true">
				<view :class="['item-select-type', {'item-type-active': item.isSelect}]" 
					v-for="(item, idx) in selectType" 
					:key="idx"
					@click="toCutType(idx)">{{item.name}}</view>
			</scroll-view>
		</view>
		<view class="filter-box-out">
			<view class="filter-box">
				<view class="item-filter">
					<view :class="['item-filter-txt', {'to-active-filter': curFilter == 1}]" @click="selectFilter(1)">综合排序</view>
				</view>
				<view class="item-filter">
					<view :class="['item-filter-txt', {'to-active-filter': curFilter == 2}]" @click="selectFilter(2)">出发地</view>
				</view>
				<view class="item-filter">
					<view :class="['item-filter-txt', {'to-active-filter': curFilter == 3}]" @click="selectFilter(3)">天数/日期</view>
				</view>
				<view class="item-filter">
					<view :class="['item-filter-txt', {'to-active-filter': curFilter == 4}]" @click="selectFilter(4)">筛选</view>
				</view>
			</view>
			<view class="select-filter-box" :style="{height: curFilter != ''? filterH: 0}">
				<scroll-view class="filter-scroll-box" :scroll-y="true">
					<view class="select-filter-box-recom">
						<view class="item-filter-recom" v-for="(item, idx) in recomFilter" :key="idx">
							<text :class="['item-filter-recom-txt', {'item-active-filter': item.value == recomFilterVal}]">{{item.name}}</text>
							<text v-if="item.value == recomFilterVal" class="lg cuIcon-check item-active-filter"></text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="list-scroll">
			<view :class="curFilter != '' && 'show-modal-active'" @click="toCloseFilterbox" class="list-modal-box"></view>
			<scroll-view class="list-scroll-box" :scroll-y="curFilter == ''">
				<view class="item-line" v-for="item in 5" :key="item">
					<view class="item-line-img"><image src="/static/test_img_2.jpeg" mode=""></image></view>
					<view class="item-line-info">
						<view class="item-line-title">长沙长沙长沙长沙长沙长沙长沙长沙长沙长沙</view>
						<view class="item-line-icon">
							<view class="item-line-icon-member">会员专属</view>
							<view class="item-line-icon-tag">美食长沙</view>
							<view class="item-line-icon-tag">美食长沙</view>
						</view>
						<view class="item-line-batch">班期：06/16-12/31</view>
						<view class="item-line-price-box">
							<view class="item-line-price">￥<text>2189</text></view>
							<text class='item-line-startTxt'>起</text>
						</view>
						<view class="item-line-num-show">已售6 浏览458</view>
					</view>
				</view>
				<!-- 底部顶高 -->
				<view class="cu-tabbar-height"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectType: [{
					name: '全部',
					isSelect: true
				}, {
					name: '登山',
					isSelect: false
				}, {
					name: '溯溪',
					isSelect: false
				}, {
					name: '自驾游',
					isSelect: false
				}, {
					name: '登山',
					isSelect: false
				}, {
					name: '溯溪',
					isSelect: false
				}, {
					name: '自驾游',
					isSelect: false
				}],
				curFilter: '', //当前筛选
				//推荐排序
				recomFilter: [{
					name: '综合排序',
					value: 1,
				}, {
					name: '价格从高到底',
					value: 2,
				}, {
					name: '价格从低到高',
					value: 3
				}, {
					name: '销量由高到底',
					value: 4
				}, {
					name: '评分由高到底',
					value: 5
				}, {
					name: '驾驶时长由高到底',
					value: 6
				}],
				recomFilterVal: 1, //推荐排序默认值
			}
		},
		computed: {
			filterH() { //筛选列高度
				let sys = uni.getSystemInfoSync();
				return (sys.windowWidth / 750) * 540 + 'px'
			}
		},
		methods: {
			toCutType(idx) {
				this.selectType.map((v, i) => {
					if(idx == i) {
						v.isSelect = true
					}else {
						v.isSelect = false
					}
				})
			},
			selectFilter(type) {
				if(this.curFilter == type) {
					this.curFilter = ''
				}else {
					this.curFilter = type
				}
			},
			toCloseFilterbox() {
				this.curFilter = ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.retailBox {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.top-search-box {
		padding: 30upx;
		.top-search-input {
			background: #F6F9FA;
			width: 100%;
			height: 64upx;
			border-radius: 32upx;
			display: flex;
			align-items: center;
			padding: 0 30upx;
			.top-search-icon {
				width: 30upx;
				height: 30upx;
				margin-right: 20upx;
			}
			.to-search-inp-box {
				flex: 1;
				overflow: hidden;
				height: 100%;
				input {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.select-type-box {
		width: 100%;
		height: 60upx;
		.select-type-scroll {
			width: 100%;
			height: 100%;
			white-space: nowrap;
			.item-select-type {
				font-size: 28upx;
				color: $text-color-second-black;
				display: inline-block;
				margin: 0 30upx;
				height: 100%;
				border-bottom: 6upx solid transparent;
			}
			.item-type-active {
				border-bottom-color: $color-main;
				font-weight: 800;
			}
		}
	}
	.filter-box-out {
		position: relative;
		width: 100%;
		height: auto;
		z-index: 99;
		.select-filter-box {
			position: absolute;
			top: 82upx;
			left: 0;
			z-index: 10;
			width: 100%;
			background-color: #fff;
			transition: all 0.3s;
			.filter-scroll-box {
				width: 100%;
				height: 100%;
			}
		}
	}
	.select-filter-box-recom {
		padding: 0 30upx;
		.item-filter-recom {
			padding: 30upx 0;
			font-size: 28upx;
			color: $text-color-second-black;
			display: flex;
			justify-content: space-between;
			&:not(:last-child) {
				border-bottom: 1px solid #F4F4F4;
			}
			.cuIcon-check {
				font-size: 32upx;
			}
		}
		.item-active-filter {
			color: $color-main;
		}
	}
	.filter-box {
		display: flex;
		padding: 0 30upx 0;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 10upx 20upx 0 #F9F9F9;
		.item-filter {
			position: relative;
			.item-filter-txt {
				font-size: 24upx;
				color: $text-color-main-black;
				display: flex;
				align-items: center;
				padding: 20upx 0 30upx;
				&::after {
					margin-left: 20upx;
					content: '';
					display: block;
					border: 6upx solid $text-color-main-black;
					transform: rotate(45deg);
					border-left-color: transparent;
					border-top-color: transparent;
					position: relative;
					top: -3upx;
				}
			}
			.to-active-filter {
				color: $color-main;
				&::after {
					transform: rotate(225deg);
					top: 5upx;
					border-right-color: $color-main;
					border-bottom-color: $color-main;
				}
			}
		}
	}
	.list-scroll {
		flex: 1;
		overflow: hidden;
		position: relative;
		z-index: 1;
		.list-modal-box {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.4);
			transition: all 1s;
			z-index: -1;
			opacity: 0;
		}
		.show-modal-active {
			z-index: 10;
			opacity: 1;
		}
		.list-scroll-box {
			padding: 30upx 30upx 0;
			width: 100%;
			height: 100%;
			.item-line {
				display: flex;
				width: 100%;
				margin-bottom: 40upx;
				.item-line-img {
					width: 220upx;
					height: 270upx;
					background-color: $color-bg;
					border-radius: 12upx;
					overflow: hidden;
					position: relative;
					margin-right: 20upx;
				}
				.item-line-info {
					flex: 1;
					overflow: hidden;
					padding-bottom: 30upx;
					border-bottom: 1px solid #E5E5E5;
					.item-line-title {
						font-size: 32upx;
						color: $text-color-main-black;
						font-weight: 600;
						margin-bottom: 20upx;
						@extend .ellipse2;
					}
					.item-line-icon {
						display: flex;
						flex-wrap: wrap;
						margin-bottom: 12upx;
						.item-line-icon-member {
							padding: 2upx 12upx;
							border: 1px solid #979797;
							border-radius: 4upx;
							margin-right: 10upx;
							font-size: 20upx;
							color: $text-color-main-black;
						}
						.item-line-icon-tag {
							background: #F6F9FA;
							border-radius: 4upx;
							padding: 2upx 12upx;
							font-size: 20upx;
							color: $text-color-icon;
							margin-right: 10upx;
						}
					}
					.item-line-batch {
						font-size: 20upx;
						color: $text-color-main-black;
						margin-bottom: 10upx;
					}
					.item-line-price-box {
						display: flex;
						align-items: flex-end;
						margin-bottom: 10upx;
						.item-line-price {
							font-size: 24upx;
							color: $text-color-red;
							margin-right: 10upx;
							text {
								font-size: 32upx;
								color: $text-color-red;
								font-weight: 600;
							}
						}
						.item-line-startTxt {
							font-size: 20upx;
							color: $text-color-icon;
							position: relative;
							top: -2upx;
						}
					}
					.item-line-num-show {
						text-align: right;
						font-size: 20upx;
						color: $text-color-icon;
					}
				}
			}
		}
	}
</style>
