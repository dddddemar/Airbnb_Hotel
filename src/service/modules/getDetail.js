import HYRequest from '../request'

export function getDetails(id){
   return  HYRequest.get({
        url:"/detail/infos",
        params:{
            houseId:id
        }
    })
}
