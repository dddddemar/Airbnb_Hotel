import { createRouter,createWebHashHistory } from "vue-router";
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:()=>import(
            "@/views/home/homeBanner.vue"
        )
    },
    {
        path:"/favor",
        component:()=>import(
            "@/views/favor/favorOne.vue"
        )
    },
    {
        path:"/message",
        component:()=>import(
            "@/views/message/messageOne.vue"
        )
    },
    {
        path:"/order",
        component:()=>import(
            "@/views/order/orderOne.vue"
        )
    },
    {
        path:"/search",
        component:()=>import(
            "@/views/search/searchOne.vue"
        )
    },
    {
        path:"/detail/:id",
        component:()=>import(
            "@/views/detail/detailOne.vue"
        )
    },
    {
        path:"/city",
        component:()=>import(
            "@/views/city/cityOne.vue"
            
        ),
        // 利用route获取焦点的租价，并将meta中的hidetabbar引入到appvue的v-if中 来更具路由不同切换组件的隐藏
        meta:{
            hideTabBar:true
        }
    }
    ]
})
export default router
