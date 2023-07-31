<template>
  <div>
    <var-app-bar title="App版本管理" color="white" text-color="black" :elevation="1">
      <template #left>
        <var-button
          class="mr-2"
          color="transparent"
          round
          text
          @click="$router.back()">
          <var-icon name="chevron-left" :size="28" />
        </var-button>
      </template>
    </var-app-bar>
    <main class="container mx-auto p-2">
      <var-table>
        <thead>
          <tr>
            <th class="text-truncate">名称</th>
            <th class="text-truncate text-center!">版本名字</th>
            <th class="text-truncate text-center!">版本号</th>
            <th class="text-truncate">下载地址</th>
            <th class="text-truncate text-center!">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listData">
            <td class="text-truncate">{{ item['appName'] }}</td>
            <td class="text-truncate text-center!">{{ item['versionName'] }}</td>
            <td class="text-truncate text-center!">{{ item['versionCode'] }}</td>
            <td class="text-truncate">{{ item['downloadUrl'] }}</td>
            <td class="text-truncate text-center!">
              <var-button type="primary" text>编辑</var-button>
              <var-button type="danger" text>删除</var-button>
            </td>
          </tr>
        </tbody>
      </var-table>
    </main>
  </div>
</template>

<script setup lang="ts">
const { listData, getListData } = useListData('/app-version')

onMounted(() => {
  getListData()
})
</script>

<style scoped lang="scss"></style>
