import axios from 'axios'

const http = axios.create({
    baseURL:import.meta.env.TT_URL,
    timeout:1000
})

http.interceptors.request.use(function (config) {
    return config
},function (error) {
    return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
    return response
},function (error) {
    return Promise.reject(error)
})

export default http