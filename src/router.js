import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index'
import MyMusic from './pages/MyMusic'
import Collect from './pages/Collect'
import Login from './pages/Login'
import Register from './pages/Register'
import MusicDetail from './pages/MusicDetail'
Vue.use(Router)
export default new Router({
    routes:[
        {path:'/',component:MyMusic},
        {path:'/about',component:Index},
        {path:'/collect',component:Collect},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'/musicdetail/:reg/:imgurl',component:MusicDetail,props:true},
    ]
})