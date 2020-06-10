<template>
	<view>
		<view class="search-bar-box">
			<uni-search-bar radius="100" placeholder="功能搜索" @confirm="search" bgColor="#EEEEEE" />
		</view>
		
		<view class="use-nav">
			<scroll-view class="nav-list" scroll-x="true" scroll-into-view="" :scroll-left="chooseIndex*baseWidth">
				<block v-for="(item, index) in useDataArr" :index="index" :key="index">
					<view class="nav-item" :class="chooseIndex == index?'active' : ''" :data-code="item.menuId" :data-index="index" @tap="getCurrentCode">
						{{item.menuName}}
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="all-use">
			<scroll-view class="" scroll-y="true" scroll-top="0" :scroll-into-view="codeY" scroll-with-animation="true" enable-back-to-top="false" @scroll="onScroll" :style="'height:'+allUseHeight+'px;'">
				<block v-for="(item, index) in useDataArr" :index="index" :key="index">
					<view class="use-type" :id="item.menuId" :style="index == useDataArr.length -1 ? `min-height:${allUseHeight}px;`:''">
						<uni-section class="uni-section" :title="item.menuName" type="line"></uni-section>
						
						<!-- <uni-grid :column="4" :highlight="false" :showBorder="false"> -->
							<view class="flex_wrap">
								<view v-for="(val, index) in item.children" :index="index" :key="index" class="grid-item-box" @tap="navigateToUrl(val.url)">
									<image :src="'http://128.128.97.200:8301/P1StaRes/V6/STY13/CN/gebank/images/'+val.iconURL" class="image" mode="" />
									<view class="text uni-ellipsis">{{ val.menuName }}</view>
								</view>
							</view>
						<!-- </uni-grid> -->
						
					</view>
				</block>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import request from '@/common/request.js'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	/* import uniGrid from '@/components/uni-grid/uni-grid.vue' */
	export default {
		components: {
			uniSearchBar,
			uniSection
		},
		data() {
			return {
				allUseHeight: 0,
				baseWidth: 0,
				chooseIndex: 0,
				codeY: '',
				useDataArr: []
			};
		},
		methods: {
			getCurrentCode(e) {
				this.codeY = e.target.dataset.code;
				this.chooseIndex = e.target.dataset.index;
			},
			onScroll(e) {
				let scrollTop = e.detail.scrollTop;
				let scrollArr = this.heightArr;
				if (scrollTop > scrollArr[scrollArr.length - 1] - this.allUseHeight) {
					return
				} else {
					for (let i = 0; i < scrollArr.length; i++) {
						if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
							this.chooseIndex = 0;
						} else if (scrollTop >= scrollArr[i - 1] - 10 && scrollTop < scrollArr[i]) {
							this.chooseIndex = i;
						}
					}
				}
			}
		},
		onLoad() {
			request.get("CCBIS/B2CMainPlat_13_GE?SERVLET_NAME=B2CMainPlat_13_GE&CCB_IBSVersion=V6&PT_STYLE=13&TXCODE=NGEGMN").then(res => {
				let DAT_LV1MENU = res.DAT_LV1MENU;
				let DAT_LV2MENU = res.DAT_LV2MENU;
				DAT_LV1MENU.forEach(j => {
					j.children = [];
				});
				DAT_LV2MENU.forEach(i => {
					DAT_LV1MENU.forEach(j => {
						if (i.pMenuId == j.menuId) {
							j.children.push(i);
						}
					});
				});
				for (let i = 0; i < DAT_LV1MENU.length; i++) {
					if (DAT_LV1MENU[i].children.length === 0) {
						DAT_LV1MENU.splice(i, 1);
					}
				}
				this.useDataArr = DAT_LV1MENU;
			})
			/* uni.request({
				url: "/api/CCBIS/B2CMainPlat_13_GE?SERVLET_NAME=B2CMainPlat_13_GE&CCB_IBSVersion=V6&PT_STYLE=13&TXCODE=NGEGMN",
				success(res) {
					console.log(res)
				},
				fail(err) {
					console.log(err)
				}
			}) */
			
			
		},
		onReady: function () {
			let windowInfo = uni.getSystemInfoSync();
			let query = uni.createSelectorQuery().in(this);
			let heightArr = [],
				searchHeight = 0,
				s = 0;
			query.select('.search-bar-box').boundingClientRect(function (n) {
				searchHeight = n.height;
			}).exec();
			
			this.allUseHeight = windowInfo.windowHeight - Math.floor(40 + searchHeight);
			this.baseWidth = Math.floor(windowInfo.windowWidth / 8);
			setTimeout(()=>{
				query.selectAll('.use-type').boundingClientRect(function (n) {
					n.forEach((res) => {
						s += res.height;
						heightArr.push(s)
					});
				}).exec();	
				this.heightArr = heightArr;
			},1000)
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';	
	.uni-searchbar{
		padding: 20rpx;
	}
	.search-bar-box {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}
	.uni-section{
		margin: 0;
	}
	
	.use-nav {
	    width: 100vw;
	    height: 39px;
	    border-bottom: 1px solid #ddd;
		background-color: #fff;
	}
	.nav-list {
	    width: 100vw;
	    white-space: nowrap;
	}
	.use-nav .nav-item {
	    width: 25%;
	    height: 39px;
	    line-height: 39px;
	    text-align: center;
	    position: relative;
	    color: #333;
	    display: inline-block;
	}
	
	.use-nav .nav-item.active {
	    color: #0086e3;
	}
	
	.nav-item.active::after {
	    content: "";
	    width: 70%;
	    height: 4rpx;
	    background: #0086e3;
	    position: absolute;
	    bottom: 0;
	    left: 15%;
	}
	
	.all-use {
		background-color: #fff;
	}
	.grid-item-box {
		//flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		//display: flex;
		/* #endif */
		/* flex-direction: column;
		align-items: center;
		justify-content: center; */
		padding: 10px 0;
		width: 25%;
		text-align: center;
	}
	.all-use .image {
	    width: 60rpx;
	    height: 52rpx;
	}
	.all-use .text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
	/* 隐藏滚动条 */
	::-webkit-scrollbar {
	    width: 0;
	    height: 0;
	    color: transparent;
	}
	
</style>
