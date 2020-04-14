import axios from "axios";

//配置默认的参数
axios.defaults.baseURL = 'http://localhost:3000';//默认访问地址
axios.defaults.withCredentials = true; //跨域允许携带cookie
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"; //设置POST请求格式

//获取后台环境environment数据
export default{
    getEnshow(){
        return axios.post("/environment/getEn")
    }
}