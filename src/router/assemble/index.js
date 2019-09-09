export default {
    path:"/assemble",
    name:"assemble",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/assemble"),
    
}