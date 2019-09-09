<template>
    <div id="footer">
        <ul>
            <router-link 
                :to="item.path"
                tag="li"
                v-for="(item,index) in tabBars" 
                :key="index">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>


<script>
export default {
    name:"Jumei-TabBar",
    data(){
        return {
            tabBars:[
                {
                    icon:"&#xe60b;",
                    title:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe618;",
                    title:"拼团",
                    path:"/assemble"
                },
                {
                    icon:"&#xe61a;",
                    title:"购物车",
                    path:"/shopping"
                },
                {
                    icon:"&#xe625;",
                    title:"我的",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width:100%;
        height: .48rem;
        position: fixed;
        left:0;
        bottom:0;
        background:#fff;
        border-top:1px solid #ccc;
    }

    #footer ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #footer ul li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #footer ul .router-link-active{
        color:#FE4070;
    }
    #footer ul li i{
        font-size:.2rem;
        
    }

    #footer ul li span{
        font-size:.1rem
    }
</style>