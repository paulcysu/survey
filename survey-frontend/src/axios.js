import axios from 'axios'
import router from "./router"

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
  const token = '123'
  config.headers.Authorization = `Bearer`
})

axiosClient.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response && error.response.status === 401) {
    router.navigate('/login')
  }
})

export default axiosClient