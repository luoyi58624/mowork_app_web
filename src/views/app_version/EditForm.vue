<template>
	<el-dialog :model-value="modelValue" title="编辑App版本" width="600px" @open="openDialog" @close="hideDialog">
		<el-form :model="formData" label-width="120">
			<el-form-item label="版本名字：">
				<el-input v-model="formData.versionName" />
			</el-form-item>
			<el-form-item label="版本号：">
				<el-input-number v-model="formData.versionCode" :min="1" />
			</el-form-item>
			<el-form-item label="安装包：">
				<el-upload
					ref="uploadRef"
					accept=".apk"
					:action="serverUrl + '/app_version/upload'"
					:auto-upload="false"
					:limit="1"
					:on-exceed="onExceed"
					:on-remove="onRemove"
					@change="fileChange"
					@success="submitForm">
					<template #trigger>
						<el-button type="primary">选择安装包</el-button>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="更新描述：">
				<el-input v-model="formData.updateDesc" type="textarea" :rows="5" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span>
				<el-button @click="hideDialog">取消</el-button>
				<el-button type="primary" :loading="uploadLoading" @click="uploadFile">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { showMessage } from 'element-admin-layout'
import type { UploadInstance } from 'element-plus'

interface Props {
	modelValue: boolean
	selectedData: any
	getListData: () => void
}
const serverUrl = import.meta.env.VITE_SERVER_URL
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const uploadRef = ref<UploadInstance>()
const uploadLoading = ref(false)
const file = shallowRef<File>()
const formData = reactive({
	_id: null,
	appName: null,
	fileSize: null,
	versionName: '0.0.1',
	versionCode: 1,
	updateDesc: ''
})

function openDialog() {
	Object.keys(toRaw(formData)).forEach(key => {
		if (!isEmpty(props.selectedData[key])) {
			if (key == 'updateDesc') {
				formData.updateDesc = (props.selectedData[key] as []).join('\n')
			} else {
				formData[key] = props.selectedData[key]
			}
		}
	})
}

function hideDialog() {
	emits('update:modelValue', false)
}

function fileChange(e) {
	file.value = e.raw
}

function onRemove() {
	file.value = null
}

function onExceed(e) {
	unref(uploadRef).clearFiles()
	unref(uploadRef).handleStart(e[0])
}

async function uploadFile() {
	uploadLoading.value = true
	try {
		if (file.value == null) {
			submitForm(null)
		} else {
			unref(uploadRef).submit()
		}
	} catch (e) {
		console.log(e)
		uploadLoading.value = false
	}
}

async function submitForm(e) {
	try {
		await http.put('/app_version', {
			...formData,
			appName: file.value?.name ?? formData.appName,
			fileSize: file.value?.size ?? formData.fileSize,
			updateDesc: formData.updateDesc.split('\n'),
			downloadUrl: e?.data.filePath
		})
		props.getListData()
		showMessage('更新成功')
		uploadLoading.value = false
		hideDialog()
	} catch (e) {
		console.log(e)
		showMessage('更新失败', 'error')
		uploadLoading.value = false
	}
}
</script>

<style scoped lang="scss"></style>
