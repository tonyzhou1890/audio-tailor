<template>
  <el-scrollbar>
    <div class="menu-list">
      <el-dropdown
        v-for="group in menu"
        :key="group.key"
        @command="handleCommand2"
      >
        <el-button type="primary">
          {{ group.name }}
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="menuItem in group.children"
              :command="menuItem.key"
              :key="menuItem.key"
              >{{ menuItem.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    // 菜单
    const menu = reactive([
      {
        name: '文件',
        key: 'g-file',
        children: [
          {
            name: '打开',
            key: 'open',
          },
          {
            name: '新建',
            key: 'create',
          },
        ],
      },
    ])

    // 点击菜单项
    function handleCommand(group: { name: string; key: string }, item: string) {
      console.log(group, item)
    }
    function handleCommand2(command: string) {
      console.log(command)
    }
    return {
      menu,
      handleCommand,
      handleCommand2,
    }
  },
})
</script>
