<template>
	<view class="container">
		
		<uni-list>
			<block v-for="(item, index) in uiList" :key="index">
				<uni-list-item :title="item.text" :show-badge="true" :badge-text="item.id" @click="goUrl(item.url)"></uni-list-item>
			</block>
		</uni-list>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uiList: [
					{
						id: "badge",
						text: "数字角标",
						url: "../badge/badge"
					},{
						id: "calendar",
						text: "日历",
						url: "../calendar/calendar"
					},{
						id: "card",
						text: "卡片",
						url: "../card/card"
					},{
						id: "collapse",
						text: "折叠面板",
						url: "../collapse/collapse"
					},{
						id: "combox",
						text: "组合框",
						url: "../combox/combox"
					},{
						id: "countdown",
						text: "倒计时",
						url: "../countdown/countdown"
					},{
						id: "drawer",
						text: "抽屉侧滑菜单",
						url: "../drawer/drawer"
					},{
						id: "fab",
						text: "悬浮按钮",
						url: "../fab/fab"
					},{
						id: "fav",
						text: "收藏按钮",
						url: "../fav/fav"
					},{
						id: "goodsNav",
						text: "商品导航",
						url: "../goodsNav/goodsNav"
					},{
						id: "grid",
						text: "宫格组件",
						url: "../grid/grid"
					},{
						id: "icons",
						text: "图标",
						url: "../icons/icons"
					},{
						id: "indexedList",
						text: "索引列表",
						url: "../indexedList/indexedList"
					},/* {
						text: "外部网页超链接组件",
						url: "../link/link"
					}, */{
						id: "list",
						text: "列表组件",
						url: "../list/list"
					},{
						id: "loadMore",
						text: "加载更多",
						url: "../loadMore/loadMore"
					},{
						id: "navBar",
						text: "导航栏",
						url: "../navBar/navBar"
					},{
						id: "noticeBar",
						text: "通告栏组件",
						url: "../noticeBar/noticeBar"
					},{
						id: "numberBox",
						text: "数字输入框",
						url: "../numberBox/numberBox"
					},{
						id: "pagination",
						text: "分页器",
						url: "../pagination/pagination"
					},{
						id: "popUp",
						text: "弹出层",
						url: "../popUp/popUp"
					},{
						id: "rate",
						text: "评分组件",
						url: "../rate/rate"
					},{
						id: "searchBar",
						text: "搜索栏",
						url: "../searchBar/searchBar"
					},/* {
						text: "标题栏",
						url: "../section/section"
					}, */{
						id: "segmentedControl",
						text: "分段器",
						url: "../segmentedControl/segmentedControl"
					},{
						id: "steps",
						text: "步骤条",
						url: "../steps/steps"
					},{
						id: "swipeAction",
						text: "滑动操作",
						url: "../swipeAction/swipeAction"
					},{
						id: "tag",
						text: "标签",
						url: "../tag/tag"
					},/* {
						text: "章节标题",
						url: "../title/title"
					}, */{
						id: "transition",
						text: "过渡动画",
						url: "../transition/transition"
					}
				]
			}
		},
		methods: {
			goUrl(url){
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	.container {
		
	}
	.content{
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
