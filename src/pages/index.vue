<template>
  <div class="wrapper">
    <div class="header">
      <home-menu></home-menu>
    </div>
  </div>
</template>

<script lang="ts">
import HomeMenu from '~/components/homeMenu.vue'

export default defineComponent({
  setup() {
    // 菜单栏

    HomeMenu
    return {}
  },
})
</script>

<route lang="json">
{
  "name": "Index",
  "meta": {
    "title": "首页"
  }
}
</route>
