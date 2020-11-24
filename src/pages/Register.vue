<template>
    <div class="login_box">
        <div class="register">
            <h2>新用户注册</h2>
            <ul>
                <li>
                    <span>邮箱：</span>
                    <input type="text" v-model='uname' id="uname" placeholder="请输入邮箱名" />
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>密码：</span>
                    <input type="password" v-model='upwd' id="upwd" placeholder="请输入密码" />
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>重复密码：</span>
                    <input type="password" v-model='upwd2' id="upwd2" placeholder="请重复输入密码" />
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>手机号：</span>
                    <input type="text" v-model='phone' id="phone" placeholder="请输入手机号" />
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>验证码：</span>
                    <input type="text" class="inp_yzm" placeholder="请输入验证码" />
                    <img src="images/yzm.png" alt="" />
                    <strong class="icon_refresh"></strong>
                </li>
                <li class="li_checkbox"><label>
                        <input type="checkbox" v-model='checked' />
                        <span>我已阅读并同意用户注册协议</span>
                    </label>
                </li>
                <li class="li_btn">
                    <button type="button" @click.prevent='regist()'>提交注册</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Register',
        data() {
            return {
                uname: '',
                upwd: '',
                upwd2: '',
                phone: '',
                checked:false
            }
        },
        mounted() {


        },
        methods: {
            regist() {
                if(!this.checked){
                    alert('不能注册')
                    return
                }
                var url = 'reg/'
                var params = `uname=${this.uname}&upwd=${this.upwd}&phone=${this.phone}`
                this.$axios.post(url, params)
                    .then(res => {
                        console.log(res)
                        if (res.data.code === 200) {
                            alert('注册成功，自动跳转到首页')
                            //短期保存登录状态，保存到标签被关闭
                            // sessionStorage.uname = res.uname
                            // sessionStorage.uid = res.uid
                            this.$router.push('/')
                            // this.$router.push({path:'/'})
                        } else {
                            alert('注册失败')
                            console.log(res.data.msg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

        },
        props: [],
        filters: {

        }

    }
</script>
<style>
    .login_box {
        width: 100%;
        height: 500px;
        background: url('../../public/images/1_1.jpg') center 0 no-repeat;
        margin-bottom: -60px;
        background-size: cover;
    }

    .register {
        width: 800px;
        margin:0 auto ;
    }

    .register>h2 {
        line-height: 70px;
        border-bottom: 1px solid #ddd;
        text-align: center;
        font-size: 18px;
        color: #6c757d;
        font-weight: lighter;
    }

    .register>ul {
        margin-top: 20px;
    }

    .register>ul>li {
        margin-bottom: 22px;
        line-height: 28px;
        height: 28px;
    }

    .register>ul>li>span,
    .register>ul>li>input,
    .register>ul>li>em,
    .register>ul>li>i,
    .register>ul>li>img,
    .register>ul>li>strong,
    .register>ul>li>button {
        float: left;
    }

    .register>ul>li>span {
        margin-left: 120px;
        width: 120px;
        text-align: right;
        font-size: 16px;
        color: #666;
    }

    .register>ul>li>input {
        width: 320px;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 0 10px;
    }

    .register>ul>li>input.inp_yzm {
        width: 160px;
    }

    .register>ul>li>em {
        margin: 12px 6px 0;
        width: 20px;
        height: 14px;
        background: url(../../public/images/iconlist.png) no-repeat;
        display: none;
    }

    .register>ul>li>em.icon_ok {
        background-position: 0 -550px;
    }

    .register>ul>li>em.icon_error {
        background-position: 0 -570px;
    }

    .register>ul>li>i {
        color: #f00;
        font-style: normal;
        display: none;
    }

    .register>ul>li>img {
        margin-left: 16px;
    }

    .register>ul>li>strong {
        width: 22px;
        height: 26px;
        margin-left: 14px;
        cursor: pointer;
        background: url(../../public/images/iconlist.png) 0px -600px no-repeat;
    }

    .register .li_checkbox {
        margin-top: 20px;
    }

    .register .li_checkbox label {
        margin-left: 240px;
    }

    .register .li_checkbox input {
        vertical-align: middle;
    }

    .register .li_checkbox span {
        display: inline-block;
        vertical-align: middle;
    }

    .register button {
        outline: none;
        margin-left: 240px;
        width: 320px;
        height: 30px;
        border-radius: 3px;
        border: 0;
        margin-top: 5px;
        background: #72b134;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }

    .register button:hover {
        background: #65a428;
    }

    .li_btn>button.disabled {
        background: #ccc;
        cursor: default;
    }
</style>