import Vuex from 'vuex'
import Vue from 'vue'
//10.注册vuex
Vue.use(Vuex)
//11.创建存储对象
var store=new Vuex.Store({
  state:{//共享数据
    count:5,//1-1异步修改数据函数
    myMusicId:0,
    msg:{}
  },
  getters:{
    getCount(state){
      return state.count//1-2异步修改数据函数
    },
    getmyMusicId(state){
      return state.myMusicId
    },
    getMsg(state){
      return state.msg
    }
  },
  mutations:{
    clear(state){//1-3异步修改数据函数
      state.count=0
    },
    setmyMusicId(state,data){
        state.myMusicId=data
    },
    setMsg(state,data){
      state.msg=data
    },
    clearMsg(state){
      state.msg=null
    }
  },
  actions:{//1-4异步修改数据函数=
    modifyCount:(context)=>{//context上下文对象=>$store对象
      setTimeout(()=>{//模拟网速放慢
        context.commit('clear') //调用mutations中定义函数完成异步修改操作
      },1500)//1-5调用this.$store.dispatch('modifyCount')
    }
  }
})
export default store
//12.将存储对象添加vue对象