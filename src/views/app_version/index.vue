<template>
	<div class="p-2 flex flex-col">
		<div class="mb-2 flex justify-end">
			<el-button type="primary" @click="getNewVersion">获取最新版本</el-button>
			<el-button type="primary" @click="showAddDialog = true">上传新版本</el-button>
		</div>
		<el-table class="w-full flex-1" :data="listData" :border="true" :show-overflow-tooltip="true">
			<el-table-column prop="_id" label="ID" width="240" />
			<el-table-column prop="appName" label="名称" width="200" align="center" />
			<el-table-column prop="versionName" label="版本名字" width="100" align="center" />
			<el-table-column prop="versionCode" label="版本号" width="100" align="center" />
			<el-table-column prop="downloadUrl" label="下载地址" align="center" min-width="150" />
			<el-table-column label="操作" width="120" align="center">
				<template #default="scoped">
					<el-button link type="primary" size="small" @click="openEditDialog(scoped.row)">编辑</el-button>
					<el-button link type="danger" size="small" @click="deleteListData(scoped.row._id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<AddForm v-model="showAddDialog" :get-list-data="getListData" />
		<EditForm v-model="showEditDialog" :selected-data="selectedData" :get-list-data="getListData" />
	</div>
</template>

<script setup lang="ts">
import AddForm from './AddForm.vue'
import EditForm from './EditForm.vue'

const { listData, selectedData, getListData, deleteListData } = useListData('/app_version')
const showAddDialog = ref(false)
const showEditDialog = ref(false)

function openEditDialog(data) {
	selectedData.value = data
	showEditDialog.value = true
}

function getNewVersion() {
	http.get('/app_version/new_version').then(res => {
		console.log(res.data)
	})
}
provide('selectedData', selectedData)
onMounted(() => {
	getListData()
})
</script>

<style scoped lang="scss"></style>
