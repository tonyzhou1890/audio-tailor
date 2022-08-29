<template>
	<el-config-provider :locale="locale" :size="size">
		<router-view />
	</el-config-provider>
</template>

<script lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { defineComponent } from 'vue'
export default defineComponent({
	setup() {
		return {
			locale: zhCn,
			size: 'small'
		}
	}
})
</script>
