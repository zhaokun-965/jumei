import Vue from "vue";
import VueRouter from "vue-router"
import home from "./home";
import assemble from "./assemble";
import shopping from "./shopping"
import mine from "./mine"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        home,
        assemble,
        shopping,
        mine
    ]
})


export default router;