import axios from 'axios'

const http = axios.create({
	// baseURL: 'http://106.55.62.197:11001',
	baseURL: import.meta.env.VITE_SERVER_URL,
	timeout: 15000
})

http.interceptors.response.use(response => {
	if (response.data.code == 200) {
		return response.data
	} else {
		return Promise.reject(response.data)
	}
})
export { http }
