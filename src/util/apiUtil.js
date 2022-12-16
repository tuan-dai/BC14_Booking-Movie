import axios from "axios";

const api = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/'
})

const userInfo = localStorage.getItem('USER_LOGIN')
api.interceptors.request.use(
    (config) => {
        config.headers = {
            ...config.headers,
            TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyOCIsIkhldEhhblN0cmluZyI6IjA2LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MDczOTIwMDAwMCIsIm5iZiI6MTY0Nzk2ODQwMCwiZXhwIjoxNjgwODg2ODAwfQ.xX_epWJgLPS900gCFif08GWmsOKj-2It-grKojlOHmY',
            Authorization: userInfo ? 'bearer ' + JSON.parse(userInfo).accessToken : ''
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default api