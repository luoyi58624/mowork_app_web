<template>
	<el-dialog :model-value="modelValue" title="编辑App版本" width="600px" @close="hideDialog">
		<el-form :model="formData" label-width="120">
			<el-form-item label="版本名字：">
				<el-input v-model="formData.versionName" />
			</el-form-item>
			<el-form-item label="版本号：">
				<el-input-number v-model="formData.versionCode" :min="1" />
			</el-form-item>
			<el-form-item label="安装包：">
				<el-upload ref="uploadRef" accept=".apk" :auto-upload="false" :limit="1" @change="fileChange" :on-exceed="onExceed">
					<template #trigger>
						<el-button type="primary">选择安装包</el-button>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="更新描述：">
				<el-input v-model="formData.updateDesc" type="textarea" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span>
				<el-button @click="hideDialog">取消</el-button>
				<el-button type="primary" :loading="uploadLoading" @click="onSubmitAdd">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { showMessage } from 'element-admin-layout'
import type { UploadInstance } from 'element-plus'

interface Props {
	modelValue: boolean
	getListData: () => void
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const uploadRef = ref<UploadInstance>()
const uploadLoading = ref(false)
const formData = reactive({
	versionName: '0.0.1',
	versionCode: 1,
	updateDesc: '',
	file: null
})

function hideDialog() {
	emits('update:modelValue', false)
}

function fileChange(e) {
	formData.file = e.raw
}

function onExceed(e) {
	unref(uploadRef).clearFiles()
	unref(uploadRef).handleStart(e[0])
}

function onSubmitAdd() {
	uploadLoading.value = true
	const data = new FormData()
	data.set('appName', formData.file.name)
	data.set('versionName', formData.versionName)
	data.set('versionCode', formData.versionCode.toString())
	formData.updateDesc.split('\n').forEach((item, index) => {
		data.set(`updateDesc[${index}]`, item)
	})
	data.set('file', formData.file)
	http
		.post('/app-version', data)
		.then(res => {
			console.log(res)
			showDialog.value = false
			props.getListData()
			showMessage('上传成功')
		})
		.finally(() => {
			uploadLoading.value = false
		})
}
</script>

<style scoped lang="scss"></style>
