import { showMessage } from 'element-admin-layout'
import { ElMessageBox } from 'element-plus'

/**
 * 获取列表数据，注意：它只能对接 Resetful Api
 * @param url
 * @returns
 */
export const useListData = (url: string) => {
	const listData = ref([]) // 列表数据
	const selectedListData = ref([]) // 选中的列表数据
	const selectedData = ref(null) // 选中的单条数据
	const loadLoading = ref(false) // 列表加载loading
	const deleteLoading = ref(false) // 删除数据loading

	function getListData() {
		loadLoading.value = true
		http
			.get(url)
			.then(res => {
				listData.value = res.data
			})
			.finally(() => {
				loadLoading.value = false
			})
	}

	/**
	 * 删除列表数据
	 * @param id 删除的id，批量删除请传入id数组
	 */
	function deleteListData(id: string | string[]) {
		ElMessageBox.confirm('你确定要删除吗?', '警告', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		}).then(() => {
			deleteLoading.value = true
			let dataId
			if (Array.isArray(id)) {
				dataId = id.join(',')
			} else {
				dataId = id
			}
			http
				.delete(url + '/' + dataId)
				.then(() => {
					showMessage('删除成功')
					getListData()
				})
				.finally(() => {
					deleteLoading.value = false
				})
		})
	}

	return {
		listData,
		selectedListData,
		selectedData,
		loadLoading,
		deleteLoading,
		getListData,
		deleteListData
	}
}
