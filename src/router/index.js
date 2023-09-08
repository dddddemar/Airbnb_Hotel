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
    }
    ]
})
export default router
