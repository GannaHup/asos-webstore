import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_API_URL
const apiKey = process.env.REACT_APP_PUBLIC_X_RAPID_API_KEY
const apiHost = process.env.REACT_APP_PUBLIC_RAPID_API_HOST

const httpsService = axios.create({
  baseURL,
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': apiHost,
  },
})

httpsService.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => await Promise.reject(error)
)

httpsService.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

export default httpsService
