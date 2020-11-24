<template>
  <div class="login_box">
    <div class="container">
      <div class="login">
        <h2>用户登录</h2>
        <dl class="clearfloat">
          <dt><span class="tips" id="uname_prompt_text"></span>用户名：</dt>
          <dd>
            <input type="text" v-model='username' id="uname" placeholder="邮箱/手机号" />
            <em class="icon_user"></em>
            <i class="icon_error" id="uname_prompt_icon"></i>
          </dd>
        </dl>
        <dl>
          <dt><span class="tips" id="pwd_prompt_text">请输入密码</span>密码：</dt>
          <dd>
            <input type="password" v-model='password' id="pwd" placeholder="密码" />
            <em class="icon_pwd"></em>
            <i class="icon_error" id="pwd_prompt_icon"></i>
          </dd>
        </dl>
        <p>
          <label>
            <input type="checkbox" />
            <span>自动登录</span>
          </label>
        </p>
        <button type="button" id="login" @click.prevent='login()'>立 即 登 录</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mounted() {

    },
    methods: {
      // login() {
      //   var url = 'login/'
      //   var params = `username=${this.username}&password=${this.password}`
      //   this.$axios.post(url, params)
      //     .then(res => {
      //       console.log(res)
      //       if (res.data.code == 200) {
      //         alert('登录成功，自动跳转到首页')
      //         //短期保存登录状态，保存到标签被关闭
      //         // sessionStorage.uname = res.data.password
      //         // sessionStorage.uid = res.data.uid
      //         this.$router.push('/')
      //         // this.$router.push({path:'/'})
      //       } else {
      //         alert('登录失败')
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err)
      //     })
      // }
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
.login {
    box-sizing: border-box;
    width: 400px;
    padding:6px 20px 0;
    height: 380px;
    float: right;
    margin-top: 37px;
    margin-right: 300px;
    background: rgba(223,226,233,0.9);
    border-radius: 10px;
    box-shadow: 0px 0px 5px #7e858f;
}
.login>h2 {
    font-weight: lighter;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #b5bdca;
    font-size: 18px;
    margin-bottom: 18px;
}
.login dl {
    margin-bottom: 6px;
}
.login dl dt {
    font-size: 16px;
    color:#666;
    line-height: 40px;
}
.login .tips {
    font-size: 12px;
    color:#f00;
    float: right;
    display: none;
}
.login dl dd {
    position: relative;
}
.login dl dd input {
    box-sizing: border-box;
    width: 100%;
    display: block;
    padding-left: 45px;
    height:38px;
    border:1px solid #b5bdca;
    border-radius: 2px;
}
.login dl dd em {
    position: absolute;
    top: 1px;
    left:1px;
    width: 36px;
    height: 36px;
    background: #eaecef url(../../public/images/iconlist.png) no-repeat;
    border-right: 1px solid #c4ccd7;
    border-radius: 2px 0 0 2px;
}
.login dl dd em.icon_user {
    background-position: 6px -474px;
}
.login dl dd em.icon_pwd {
    background-position: 9px -512px;
}
.login dl dd i {
    position: absolute;
    width:20px;
    height:14px;
    background:url(../../public/images/iconlist.png) no-repeat;
    right:6px;
    top:12px;
    display: none;
}
.login dl dd i.icon_ok {
    background-position:0 -550px;
}
.login dl dd i.icon_error {
    background-position:0 -570px;
}
.login p input {
    vertical-align: middle;
}
.login p span {
    font-size: 14px;
    color:#666;
    display: inline-block;
    vertical-align: middle;
    margin:16px 0;
}
.login button {
    outline: none;
    display: block;
    width: 100%;
    height:38px;
    border-radius: 3px;
    border:0;
    margin-top:8px;
    background: #72b134;
    color:#fff;
    font-size: 18px;
}
.login button:hover {
    background: #7dbc3f;
}
.login button:active {
    background: #85c447;
}
</style>