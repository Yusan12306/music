<template>
  <div class="container ">
    <div class="bubble">
      <svg id="s3" width=100% height="700px">
        <circle cx='100' cy='200' r='50'
        fill='lightblue' id="c3"></circle>
        <circle cx='800' cy='600' r='40'
        fill='gold' id="c3"></circle>
      </svg>
    </div>
    <div class="baground_mask"></div>
    <div class="detail">
    <span class="span">当前播放：{{songs[index].name}}</span>
    <div class="text">
      <textarea name="" id="" cols="30" rows="10" v-text='songs[index].song_lyrics'></textarea>
    </div>
    <ul>
      <li @click="prev()"></li>
      <li @click="play()" :class="{'li2':isplay,'li1':!isplay}"></li>
      <li @click="next()"></li>
      <li @click="collect($event)" :data-id='songs[index].song_id' title="点击收藏"></li>
    </ul>
    <div>
      <audio  id='audio' :src="'http://www.cootaint.com/'+songs[index].song_link" >
      </audio>
    </div>
  </div>
  </div>

</template>
<script>
  export default {
    name: 'Index',
    data() {
      return {
        songs:[{url:'',name:'',text:'',song_id:0}],
        isplay: false,
        index:0,
      }
    },
    methods: {
      rgb(){
        var r=Math.floor(Math.random()*255)
            var g=Math.floor(Math.random()*255) 
            var b=Math.floor(Math.random()*255)
            return `rgb(${r},${g},${b})`
      },
      getcircle(){
        for(var i=0;i<30;i++){
            var c=document.createElementNS("http://www.w3.org/2000/svg","circle")
            var r=10+Math.random()*50
            var cx=Math.random()*1000
            var cy=Math.random()*700
            var fillOpcity=Math.random()
            c.setAttribute("r",r)
            c.setAttribute('cx',cx)
            c.setAttribute('cy',cy)
            c.setAttribute('fill-opacity',fillOpcity)
            c.setAttribute('fill',this.rgb())
            var s3=document.getElementById('s3')
            s3.appendChild(c) 
            c.onclick=function(){
                this.onclick=null//第二次点击取消事件执行
                var t=setInterval(()=>{
                 var r=this.getAttribute('r')
                 r*=1.05
                 this.setAttribute('r',r)
                 var p=this.getAttribute('fill-opacity')
                 p*=0.9
                 this.setAttribute('fill-opacity',p)
                 if(p<0.1){
                     clearInterval(t)
                     s3.removeChild(this)
                 }
                },150)
            }
        }
      },
      getsongs(){
        var url='song/get/'
        this.$axios.get(url)
        .then(res=>{
          console.log(res)
          this.songs=res.data.data
          console.log(res.data.data)
          this.getmsg()
        })
        .catch(err=>{
          console.log(err)
        })
      },
      getmsg(){
        if(this.$store.getters.getMsg.length!==undefined){
          this.songs.unshift(this.$store.getters.getMsg)
          console.log('getmsg:',this.songs)
          this.$store.commit('clearMsg')
        }
      },
      play() {
        let audio = document.getElementById('audio')
        if (!audio.paused) {
          audio.pause()
          this.isplay = false
        } else {
          audio.play()
          this.isplay = true
        }
      },
      prev(){
        if(this.index<=0){
          this.index=this.songs.length-1
        }else{
          this.index--
        }
        this.isplay = true
        this.play()
   

      },
      next(){
        if(this.index>=this.songs.length-1){
          this.index=0
        }else{
          this.index++
        }
        this.isplay = true
        this.play()

      },
      collect(e){
          let id= e.target.dataset.id
          console.log(id)
          this.$store.commit('setmyMusicId',id)
      }

    },
    mounted() {
      this.getsongs();
      this.getcircle()
   
    },


  }
</script>
<style scoped>
  .container {
    width: 100%;
    height: 700px;
    position: relative;
    background-color: rgb(228, 241, 207);
  }
 
 .baground_mask{
  background: url('../../public/images/1_1.jpg') no-repeat;
  background-size: cover;
  width: 50%;
  height: 430px;
  position: absolute;
  top: 20px;
  left: 23%;
  border-radius: 50%;
 }
 .span{
  position: absolute;
  top: 30px;
  left:40%;
 }
 .detail{
   width: 100%;
   height: 800px;
 }
  .container ul li {
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;

  }

  .container ul li:first-child {
    background: url('../../public/images/bofangqianniu_2_51.jpg') -81px -24px no-repeat;
    top: 350px;
    left: 41%;
  }

  /* .container ul li:nth-child(2) {
     background-position: -24px -24px;
    top: 350px;
    left: 50%
  } */

  .li1 {
    top: 350px;
    left: 50%;
    background: url('../../public/images/bofangqianniu_2_51.jpg') -24px -24px no-repeat;
  }

  .li2 {
    top: 350px;
    left: 50%;
    background: url('../../public/images/bofangqianniu_2_51.jpg') -139px -177px no-repeat;
  }

  .container ul li:nth-child(3) {
    background: url('../../public/images/bofangqianniu_2_51.jpg') -139px -24px no-repeat;
    top: 350px;
    left: 59%
  }
  .container ul li:nth-child(4) {
    width: 0;
    height: 0;
    border-top: 15px solid rgb(89, 124, 189);
    border-left: 15px solid rgb(62, 67, 129);
    border-right: 15px solid rgb(123, 61, 158);
    border-bottom: 15px solid rgb(221, 153, 153);
    top: 355px;
    left: 35%;
  }
  
  .text {
    background-color: transparent;
    width: 270px;
    height: 266px;
    opacity: 0.4;
    position: absolute;
    top: 67px;
    left: 38%;
  }

  .text textarea {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>