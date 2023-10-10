import {defineStore} from 'pinia'
import { getCityAll } from '../../service/modules/city'
import { getHotSuggests } from '../../service/modules/getHotSuggests'
import {getCategories} from '../../service/modules/getCategories'
import { getHouseList} from '../../service/modules/getHouseList'
import { getDetails } from '../../service/modules/getDetail'
import {formatMonthDay} from "@/utils/formatData"

const nowDate= new Date()
const newDate= new Date()
newDate.setDate(nowDate.getDate()+1)

const useCityStore=defineStore("city",{
    state:()=>({
       allCities:{},
       currentCity:{
        cityName:"未知"
       },
       hotSuggests:{},
       cateGories:{},
       houselist:[],
       housedetails:{},
       currentNumber:1,
       startDateStr:formatMonthDay(nowDate),
       endDateStr:formatMonthDay(newDate),
       isLoading:true

       
}),
    actions:{
        async fetchAllCities(){
            const res=await getCityAll()
            this.allCities=res.data
        },
        
        async fetchAllCategories(){
            const res=await getCategories()
            this.cateGories=res.data
        
        },
        async fetchAllHotSuggests(){
            const res=await getHotSuggests()
            this.hotSuggests=res.data
        
            },
            //设置值，一直点击，数组的值一直增加的逻辑
        async fetchHouselist(){
            const res=await getHouseList(this.currentNumber)
            this.houselist.push(...res.data)
            this.currentNumber++

        },
        async fetchAllDetails(id){
            const res=await getDetails(id)
            this.housedetails=res.data
        
            }

        }


    }

)
export default useCityStore