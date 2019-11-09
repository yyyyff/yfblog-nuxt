import axios from 'axios'
import * as config from '~/config'

const instance = axios.create({
  baseURL:config.API_ROot
})

instance.interceptors.request.use(
  
)