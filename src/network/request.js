import axios from 'axios'
export function request(config){
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    instance.interceptors.request.use(requestConfig => {
      console.log(requestConfig)
      return requestConfig
    }, err => {
      console.log(err)
    })
    instance.interceptors.response.use(responseConfig => {
      console.log(responseConfig)
      return responseConfig.data
    }, err => {
      console.log(err)
    })
    return instance(config)
}

