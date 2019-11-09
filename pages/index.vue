<template>
	<view class="content">
		<home 	v-if="PageCur == 'home'"></home>
		<retail v-if="PageCur == 'retail'"></retail>
		<selfPro v-if="PageCur == 'selfPro'"></selfPro>
		<outdoorsPro v-if="PageCur == 'outdoorsPro'"></outdoorsPro>
		<mine 	v-if="PageCur == 'mine'"></mine>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" v-for="(item, idx) in navArr" :key="idx" :data-cur="item.component">
				<view class='cuIcon-cu-image'>
					<image :src="PageCur == item.component? item.selectedIconPath: item.iconPath"></image>
				</view>
				<view :class="PageCur== item.component?'navSelected':'navDef'">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				PageCur: 'home',
				navArr: [{
					name: '首页',
					component: 'home',
					iconPath: '/static/home_1.png',
					selectedIconPath: '/static/home_2.png'
				}, {
					name: '分销',
					component: 'retail',
					iconPath: '/static/retailStore_1.png',
					selectedIconPath: '/static/retailStore_2.png'
				}, {
					name: '茶咖',
					component: 'selfPro',
					iconPath: '/static/retailStore_1.png',
					selectedIconPath: '/static/retailStore_2.png'
				}, {
					name: '产品',
					component: 'outdoorsPro',
					iconPath: '/static/retailStore_1.png',
					selectedIconPath: '/static/retailStore_2.png'
				}, {
					name: '我的',
					component: 'mine',
					iconPath: '/static/mine_1.png',
					selectedIconPath: '/static/mine_2.png'
				}]
			}
		},
		onLoad() {
			
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
	}
	.navDef {
		color: #BAC0C9;
	}
	.navSelected {
		color: #282828;
	}
</style>

