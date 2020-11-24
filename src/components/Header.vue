<template>
    <div class="container">
        <div >
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link to="/" class="nav-link text-muted ">首页</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/about' class="nav-link text-muted ">我的音乐</router-link>
                </li>
                <li class="nav-item">
                    <router-link to='/collect' class="nav-link text-muted ">我的收藏</router-link>
                </li>
     
            </ul>
            <div class="rightnav">
                <ul class="clearfloat">
                    <li class="phone">4000-585-116</li>
                    <li><a href="#">中文</a></li>
                    <li><em>|</em></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#" class="weixin"></a></li>
                    <li><a href="#" class="weibo"></a></li>
                    <li v-show='!isLogin'>
                        <router-link to='/login' class='h_login'>登录</router-link>
                    </li>
                    <li v-show='!isLogin'><em>|</em></li>
                    <li v-show='!isLogin'>
                        <router-link to='/register' class="h_register">注册</router-link>
                    </li>
                    <li v-show='isLogin' class="top_user"><a href="">欢迎{{uname}}</a></li>
                    <li v-show='isLogin' class="top_quit"><a @click.prevent='logout()'>退出</a></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                isLogin:false,
                uname:''
            }
        },
        mounted() {
        },
        methods: {

        },
        watch: {
        }
    }
</script>
<style>
    .nav-item{
        font-size: 16px;
    }
 .active{
    background-color: royalblue;
  }
.rightnav {
    float: right;
    margin-top:2px;
    position: absolute;
    top: 10px;
    right: 100px;
}
.rightnav ul li {
    float: left;
    margin-left:8px;
}
.rightnav .phone {
    padding-left:23px;
    background: url(../../public/images/iconlist.png) 0 4px no-repeat;
}
.rightnav ul li em {
    color:#ccc;
    font-style: normal;
}
.weibo,.weixin {
    display: block;
    width:24px;
    height:24px;
    background: url(../../public/images/iconlist.png) no-repeat;
}
.weixin {
    background-position:0 -30px;
}
.weibo {
    background-position:0 -60px;
}

.h_login {
    display: block;
    width: 46px;
    height: 20px;
    background: #72b134;
    color: #fff;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    margin-top:2px;
}
.h_login:hover {
    color:#fff;
    background: #86c647;
}
.h_register {
    color: #f90;
}



</style>