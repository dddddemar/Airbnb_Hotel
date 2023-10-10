import HYRequest from '../request'

export function getCategories(){
   return  HYRequest.get({
        url:"/home/categories"
    })
}