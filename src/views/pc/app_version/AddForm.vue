<template>
	<el-dialog :model-value="modelValue" title="上传新版本" width="600px" destroy-on-close @close="hideDialog">
		<el-form ref="formRef" :model="formData" label-width="120">
			<el-form-item label="版本名字：">
				<el-input v-model="formData.versionName" />
			</el-form-item>
			<el-form-item label="版本号：">
				<el-input-number v-model="formData.versionCode" :min="1" />
			</el-form-item>
			<el-form-item label="安装包：" required :show-message="showErrrMessage" error="请选择app安装包">
				<el-upload
					ref="uploadRef"
					accept=".apk"
					action="http://upload-z2.qiniup.com"
					:data="{ token: uploadToken, key: file?.name }"
					:auto-upload="false"
					:limit="1"
					:on-exceed="onExceed"
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
import type { FormInstance, UploadInstance } from 'element-plus'

interface Props {
	modelValue: boolean
	getListData: () => void
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const formRef = ref<FormInstance>()
const uploadRef = ref<UploadInstance>()
const uploadLoading = ref(false)
const showErrrMessage = ref(false)
const uploadToken = ref('')
const file = shallowRef<File>()
const formData = reactive({
	versionName: '0.0.1',
	versionCode: 1,
	updateDesc: ''
})

function hideDialog() {
	emits('update:modelValue', false)
}

function fileChange(e) {
	file.value = e.raw
	if (file.value != null) {
		showErrrMessage.value = false
	}
}

function onExceed(e) {
	unref(uploadRef).clearFiles()
	unref(uploadRef).handleStart(e[0])
}

async function uploadFile() {
	if (file.value == null) {
		showErrrMessage.value = true
		return
	} else {
		showErrrMessage.value = false
	}
	uploadLoading.value = true
	try {
		const tokenResData = await http.get('getUploadToken', { params: { fileName: file.value.name } })
		uploadToken.value = tokenResData.data
		unref(uploadRef).submit()
	} catch (e) {
		console.log(e)
		uploadLoading.value = false
	}
}

async function submitForm() {
	try {
		await http.post('/app-version', {
			...formData,
			appName: file.value.name,
			fileSize: file.value.size,
			updateDesc: formData.updateDesc.split('\n')
		})
		props.getListData()
		showMessage('上传成功')
		uploadLoading.value = false
		hideDialog()
	} catch (e) {
		console.log(e)
		showMessage('提交失败', 'error')
		uploadLoading.value = false
	}
}
</script>

<style scoped lang="scss"></style>
