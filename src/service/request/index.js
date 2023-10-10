import axios from "axios";
import { BASE_URL,TIMEOUT } from "./config";

//引入
import useCityStore from "../../store/module/city";


class HYRequest{
    constructor(baseURL,timeout=10000) {
        this.instance=axios.create({
            baseURL,
            timeout
        })
    }
    request(config){
        //下两行为添加加载页面，初始为true
        const cityStore=useCityStore()
        cityStore.isLoading=true

        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                resolve(res.data)

                //下一行为:若成功则消失，则为消失
                cityStore.isLoading=false

            }).catch(err=>{
                reject(err)
                //下一行为：若失败则也消失
                cityStore.isLoading=false
            })
        })
    }

    get(config){
            return this.request({...config,method:"get"})
    }
    post(config){
            return this.request({...config,method:"post"})
    }
}
export default new HYRequest(BASE_URL,TIMEOUT)