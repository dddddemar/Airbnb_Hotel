import HYRequest from '../request'

export function getHotSuggests(){
   return  HYRequest.get({
        url:"/home/hotSuggests"
    })
}