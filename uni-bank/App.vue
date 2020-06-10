<script>
	export default {
		onLaunch: function() {
			//console.log('App Launch')
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: #efeff4;
	}
	/* #endif */
	.uni-ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.flex {
		/* 转为弹性盒模型  */
		display: flex;
	}
	
	.flex_wrap {
		/* 转为弹性盒模型并自动换行  */
		display: flex;
		flex-wrap: wrap;
	}
	
	.flex_b {
		/* 垂直底部对齐  */
		display: flex;
		align-items: flex-end;
	}
	
	.flex_m {
		/* 垂直居中 */
		display: flex;
		align-items: center;
	}
	
	.flex_c {
		/* 水平居中 */
		display: flex;
		justify-content: center;
	}
	
	.flex_lr {
		/* 水平两端对齐，剩余空间平均分布 */
		display: flex;
		justify-content: space-between;
	}
	
	.flex_lr_m {
		/* 水平两端对齐，剩余空间平均分布，垂直居中 */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.flex_c_m {
		/* 垂直水平居中 */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.flex_tb {
		/* 垂直两端对齐  */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.flex_tb_c {
		/* 多行垂直两端对齐，水平居中 */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	
	.flex_line_c {
		/* 多行垂直水平居中 */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.flex_line_c_l {
		/* 多行垂直居中，水平居左 */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.flex_line_c_m {
		/* 多行垂直居中，水平居中 */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.flex1 {
		flex: 1;
		min-width: 0;
	}
</style>