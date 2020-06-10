<template>
	<view>
		<uni-list class="block">
			<uni-list-item :thumb="thumb" :show-arrow="false" title="张三" note="37007419911105784x" />
		</uni-list>
		<uni-list>
			<uni-list-item :thumb="thumb" :show-arrow="false" title="登录次数" rightText="110"/>
			<uni-list-item :thumb="thumb" :show-arrow="false" title="上次登录" rightText="2020-05-21"/>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				thumb: "http://128.128.97.200:8101/P1StaRes/V6/STY13/CN/gebank/images/icon_appointment.png",
				
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'image'
				}
			};
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
	.block{
		margin: 20rpx 0;
	}
</style>
