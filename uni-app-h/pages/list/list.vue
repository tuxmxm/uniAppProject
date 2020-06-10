<template>
	<view>
		<!-- 一般用法 -->
		<uni-list>
		    <uni-list-item title="标题文字" :show-arrow="false"></uni-list-item>
		    <uni-list-item title="标题文字"></uni-list-item>
		    <uni-list-item title="标题文字" :show-badge="true" badge-text="12"></uni-list-item>
		    <uni-list-item title="禁用状态" :disabled="true" :show-badge="true" badge-text="12"></uni-list-item>
		</uni-list>
		
		<!-- 带描述信息 -->
		<uni-list>
		    <uni-list-item title="标题文字" note="描述信息"></uni-list-item>
		    <uni-list-item title="标题文字" note="描述信息" :show-badge="true" badge-text="12"></uni-list-item>
		</uni-list>
		
		<!-- 包含图片 -->
		<uni-list>
		    <uni-list-item title="标题文字" thumb="/static/logo.png"></uni-list-item>
		</uni-list>
		
		<!-- 包含图标 -->
		<uni-list>
		    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
		</uni-list>
		
		<!-- 显示Switch -->
		<uni-list>
		    <uni-list-item title="标题文字" :show-switch="true" :show-arrow="false"></uni-list-item>
		</uni-list>
		
		<!-- 右侧插槽 -->
		<uni-list>
		    <uni-list-item title="右侧插槽" :showArrow="false">
		        <template v-slot:right="">
		            <image style="width: 30px;height: 30px;" src="/static/logo.png" mode="widthFix"></image>
		        </template>
		    </uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
