<template>
	<view class="container">
		<view class="navbar-body">
			<uni-nav-bar :fixed="false" :border="false" color="#333" background-color="#007AFF" @clickLeft="toHome"
			 @clickRight="toMsg">
				<block slot="left">
					<view class="header-img">
						<image src="@/static/images/icon_account.png" class="image" mode=""></image>
					</view>
				</block>
				<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
					<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
				</view>
				<block slot="right">
					<view class="header-img">
						<image src="@/static/images/icon_msg_push.png" class="image" mode=""></image>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="grid-body grid-4">
			<uni-grid :column="4" :highlight="false" :showBorder="false">
				<uni-grid-item v-for="(item, index) in listGrid4" :index="index" :key="index">
					<view class="grid-item-box" @click="navigateToUrl(item.url)">
						<image :src="item.icon" class="image" mode="" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="grid-body grid-5">
			<uni-grid :column="5" :highlight="true" :showBorder="false">
				<uni-grid-item v-for="(item, index) in listGrid5" :index="index" :key="index">
					<view class="grid-item-box" @click="navigateToUrl(item.url)">
						<image :src="item.icon" class="image" mode="" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="notice-body">
			<uni-notice-bar :speed="50" :show-icon="true" :scrollable="true" :single="true" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</view>
		<view class="manage-body">
			<navigator class="manage-item" url="" v-for="(item, index) in manageList" :index="index" :key="index" :style="index==0?'border-left: 1px solid #ccc;':''">
				<view class="product-title">{{item.title}}</view>
				<view class="product-yield-rate">{{item.yieldRate}}</view>
				<view class="product-rate-intro">{{item.rateIntro}}</view>
				<view class="product-threshold">{{item.threshold}}</view>
			</navigator>
		</view>
		<view class="activity-body">
			<uni-section class="uni-section" title="热门活动" type="line">
				<text>更多</text>
				<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
			</uni-section>
			<swiper class="activity-swiper-box" autoplay="true" next-margin="40rpx">
				<swiper-item v-for="(item, index) in activityList" :key="index">
					<view class="swiper-item">
						<image class="image" :src="item.img" mode="" />
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="credit-body">
			<uni-section class="uni-section" title="信用卡" type="line">
				<text>还款 · 办卡 · 额度</text>
				<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
			</uni-section>
			<swiper class="credit-swiper-box" display-multiple-items="2">
				<swiper-item v-for="(item, index) in creditList['imgs']" :key="index">
					<view class="swiper-item">
						<image class="image" :src="item" mode="" />
					</view>
				</swiper-item>
			</swiper>
			<uni-grid :column="3" :showBorder="false" class="grid-3">
				<uni-grid-item v-for="(item, index) in creditList['list']" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.img" class="image" mode="" />
						<text class="text">{{ item.name }}</text>
						<text class="desc">{{ item.desc }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="loan-body">
			<uni-section class="uni-section" title="我要贷款" type="line">
				<text>更多</text>
				<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
			</uni-section>
			<view class="loan-list">
				<view class="loan-item" v-for="(item, index) in loanList" :key="index" :style="index == 0? 'border-top:0;':''">
					<view class="loan-item-body">
						<view class="loan-name">{{item.name}}</view>
						<view class="loan-rate">{{item.rate}}</view>
					</view>
					<view class="loan-item-body">
						<view class="loan-desc">{{item.desc}}</view>
						<view class="loan-max">{{item.max}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="like-body">
			<uni-section class="uni-section" title="猜你喜欢" type="line"></uni-section>
			<view class="manage-body">
				<navigator class="manage-item" url="" v-for="(item, index) in manageList" :index="index" :key="index" :style="index==0?'border-left: 1px solid #ccc;':''">
					<view class="product-title">{{item.title}}</view>
					<view class="product-yield-rate">{{item.yieldRate}}</view>
					<view class="product-rate-intro">{{item.rateIntro}}</view>
				</navigator>
			</view>
			<view class="like-list">
				<navigator class="like-item" url="" v-for="(item, index) in likeList" :index="index" :key="index">
					<view class="like-item-body">
						<image :src="item.img" mode="" class="image"></image>
						<view class="like-text">
							<text>{{item.name}}</text>
							<text class="like-desc">{{item.desc}}</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/common/request.js'
	export default {
		data() {
			return {
				listGrid4: [{
						icon: '/static/images/icon_sweep.png',
						text: '扫一扫',
						url: ""
					},
					{
						icon: '/static/images/icon_receiving.png',
						text: '收付款',
						url: ""
					},
					{
						icon: '/static/images/icon_transfer.png',
						text: '转账',
						url: ""
					},
					{
						icon: '/static/images/icon_account.png',
						text: '我的账户',
						url: ""
					}
				],
				listGrid5: [{
						icon: '/static/images/icon_recharge.png',
						text: '充值',
						url: ""
					},
					{
						icon: '/static/images/icon_account_query.png',
						text: '账户查询',
						url: ""
					},
					{
						icon: '/static/images/icon_transfer_accounts.png',
						text: '转账',
						url: ""
					},
					{
						icon: '/static/images/icon_appointment.png',
						text: '网点预约',
						url: ""
					},
					{
						icon: '/static/images/icon_suyin.png',
						text: '速盈',
						url: ""
					},
					{
						icon: '/static/images/icon_money_management.png',
						text: '理财',
						url: ""
					},
					{
						icon: '/static/images/icon_quickly_loans.png',
						text: '快贷',
						url: ""
					},
					{
						icon: '/static/images/icon_credit_card.png',
						text: '信用卡',
						url: ""
					},
					{
						icon: '/static/images/icon_Pay.png',
						text: '缴费',
						url: ""
					},
					{
						icon: '/static/images/all.png',
						text: '全部',
						url: "../allUse/allUse"
					}
				],
				manageList: [
					{
						title: "乾元-私享私人银行",
						yieldRate: "3.80%",
						rateIntro: "预期年化收益率",
						threshold: "10万|191天"
					},
					{
						title: "乾元-私享私人银行",
						yieldRate: "3.80%",
						rateIntro: "预期年化收益率",
						threshold: "10万|191天"
					},
					{
						title: "乾元-私享私人银行",
						yieldRate: "3.80%",
						rateIntro: "预期年化收益率",
						threshold: "10万|191天"
					}
				],
				activityList: [
					{
						img: "/static/images/hot-activity-ad.png",
						url: ""
					},{
						img: "/static/images/hot-activity-ad.png",
						url: ""
					},{
						img: "/static/images/hot-activity-ad.png",
						url: ""
					}
				],
				creditList: {
					imgs: ["/static/images/credit-card-1.png", "/static/images/credit-card-2.png", "/static/images/credit-card-1.png", "/static/images/credit-card-2.png"],
					list: [
						{
							img: "/static/images/refund.png",
							name: "信用卡申请",
							desc: "信用卡申请"
						},
						{
							img: "/static/images/bill-aging.png",
							name: "账单分期",
							desc: "还款压力大，分期可帮您"
						},
						{
							img: "/static/images/bill.png",
							name: "优惠活动",
							desc: "优惠活动"
						}
					]
				},
				loanList: [
					{
						name: "快e贷",
						rate: "6.3%",
						desc: "纯信用，实时到账，随借随还，按天计息",
						max: "最高30万"
					},
					{
						name: "融e贷",
						rate: "5.22%",
						desc: "金额大，还款期限长，随借随还",
						max: "最高300万"
					},
					{
						name: "小微快贷",
						rate: "6.96%",
						desc: "线上办理，实时到账，适用小微企业主",
						max: "最高500万"
					}
				],
				likeList: [
					{
						img: "/static/images/buttom-ad-1.png",
						name: "善融扶贫馆",
						desc: "扶贫邀你同行"
					},
					{
						img: "/static/images/buttom-ad-2.png",
						name: "充值优惠",
						desc: "封顶返券30元"
					},
					{
						img: "/static/images/buttom-ad-3.png",
						name: "建信财险",
						desc: "无忧保障你我他"
					},
					{
						img: "/static/images/buttom-ad-4.png",
						name: "折扣观影",
						desc: "超低价看电影"
					}
				]
			}
		},
		methods: {
			toHome() {
				uni.navigateTo({
					url: "../home/home"
				})
			},
			search() {
				uni.showToast({
					title: '搜索'
				})
			},
			toMsg() {
				uni.showToast({
					title: '消息'
				})
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			},
			navigateToUrl(url){
				uni.navigateTo({
					url: url
				})
			}
		},
		onLoad() {
			
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				uni.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)
		}
	}
	
</script>

<style lang="scss" scoped>
	@import '@/common/uni-nvue.scss';
	$nav-height: 30px;
	.container > view{
		background-color: #fff;
	}
	.header-img {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 160rpx;
		margin-left: 4px;
	}
	.header-img .image {
		width: 50rpx;
		height: 50rpx;
	}
	.container .grid-4{
		background-color: $uni-color-primary;
	}
	.grid-4 .image {
		width: 66rpx;
		height: 66rpx;
	}
	.grid-5 .image {
		width: 60rpx;
		height: 60rpx;
	}
	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
		color: #fff;
	}
	.grid-5 .text {
		color: #333;
	}
	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// width: 500rpx;
		flex: 1;
		background-color: $uni-bg-color-grey;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}
	.input-uni-icon {
		line-height: $nav-height;
	}
	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: $uni-font-size-base;
		background-color: $uni-bg-color-grey;
	}
	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
	.notice-body{
		padding-top: 10px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.manage-body{
		padding: 10px;
		display: flex;
		justify-content: center;
	}
	.manage-item{
		flex: 1;
		border: 1px solid #ccc;
		border-left: none;
		text-align: center;
		padding: 10rpx;
	}
	.manage-item .product-title{
		font-size: 24rpx;
		color: #333;
	}
	.manage-item .product-yield-rate{
		font-size: 48rpx;
		color: #f24c0d;
	}
	.manage-item .product-rate-intro{
		font-size: 24rpx;
		color: #ccc;
	}
	.manage-item .product-threshold{
		font-size: 24rpx;
		color: #333;
	}
	.uni-section::after{
		content: '';
		height: 0;
	}
	.activity-swiper-box{
		padding: 20rpx;
		height: 200rpx;
	}
	.activity-swiper-box .image{
		height: 200rpx;
	}
	.credit-swiper-box{
		height: 160rpx;
		padding: 20rpx;
	}
	.credit-swiper-box .swiper-item{
		margin: 0 10rpx;
	}
	.credit-swiper-box .image{
		height: 160rpx;
		width: 100%;
	}
	.credit-body .grid-3{
		padding-bottom: 20rpx;
	}
	.grid-3 .image {
		width: 100rpx;
		height: 100rpx;
	}
	.grid-3 .text {
		font-size: 28rpx;
		margin-top: 10rpx;
		color: #333;
	}
	.grid-3 .desc {
		font-size: 20rpx;
		margin-top: 8rpx;
		color: #d4d4d4;
		text-align: center;
	}
	.loan-list{
		padding: 0 20rpx;
	}
	.loan-item{
		padding: 20rpx 0;
		border-top: 1px solid #ccc;
	}
	.loan-item-body {
		display: flex;
		justify-content: space-between;
	}
	.loan-item-body .loan-rate{
		color: #f24c0d;
		font-size: 44rpx;
	}
	.like-list{
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;
	}
	.like-item{
		width: 50%;
	}
	.like-item-body{
		display: flex;
	}
	.like-item-body .image{
		width: 140rpx;
		height: 140rpx;
		margin: 10rpx;
	}
	.like-text{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.like-text .like-desc{
		color: #8f8f94;
		font-size: 24rpx;
	}
</style>
