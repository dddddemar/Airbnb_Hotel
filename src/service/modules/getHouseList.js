import HYRequest from '../request'

export function getHouseList(currentPage){
   return  HYRequest.get({
        url:"/home/houselist",
        //传入参数page的值来写
        params:{
            page:currentPage
        }
    })
}