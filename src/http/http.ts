import axios from 'axios'

const http = axios.create({
  baseURL:
    import.meta.env.MODE == 'development' ? 'http://localhost:3001' : 'http://115.159.28.38:10008',
  timeout: 5000
})

http.interceptors.response.use(response => {
  if (response.data.code == 200) {
    return response.data
  } else {
    return Promise.reject(response.data)
  }
})
export { http }
