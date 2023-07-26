export const useListData = (url: string) => {
  const listData = ref([])
  const selectedData = ref([])
  const loading = ref(false)

  function getListData() {
    loading.value = true
    http
      .get(url)
      .then(res => {
        listData.value = res.data
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    listData,
    selectedData,
    loading,
    getListData
  }
}
