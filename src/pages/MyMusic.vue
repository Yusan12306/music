<template>
  <div class="container ">
    <!-- 轮播图 -->
    <div id="demo" class="carousel" data-ride='carousel'>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100 h-100" src="../../public/images/banner1.jpg" alt="">
        </div>
        <div class="carousel-item">
          <img class="w-100 h-100" src="../../public/images/banner2.jpg" alt="">
        </div>
        <div class="carousel-item">
          <img class="w-100 h-100" src="../../public/images/banner3.jpg" alt="">
        </div>
        <div class="carousel-item">
          <img class="w-100 h-100" src="../../public/images/banner4.jpg" alt="">
        </div>
      </div>
      <a data-slide='prev' href="#demo" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a data-slide='next' href="#demo" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
      </a>
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to='0' class="active"></li>
        <li data-target="#demo" data-slide-to='1'></li>
        <li data-target="#demo" data-slide-to='2'></li>
        <li data-target="#demo" data-slide-to='3'></li>
      </ul>
    </div>
    <!-- 分类歌单 -->
    <div class="slide">&gt;&gt;分类歌单</div>
    <div class="item row mx-0" @click='jumpDetail($event)'>
      <div class="one col-7 px-0 " data-reg="a">
        <div class="mr-2 mb-2 p-3 " data-reg="a">
          <span data-reg="a">
            所有原创的音乐都是特别而不可复制的
          </span>
          <h3 class="p-2 " data-reg="a">青之旋律</h3>
          <p class="p-2 " data-reg="a">
            古典钢琴弹不出的回忆<br>像巴赫音乐隐没人海里<br>我为你创作了几百世纪,也是注定没结局<br>用笔在乐谱雕刻着唯一,叹息你永远不懂我的心<br>我的旧约圣经。
          </p>
        </div>
      </div>
      <div class="one col-5 px-0" data-reg="b">
        <div class="p-3 mb-2" data-reg="b">
          <span class="p-2" data-reg="b">
            思维着的声音
          </span>
          <h3 class="p-2" data-reg="b">流行歌曲</h3>
          <p class="p-2" data-reg="b">
            从前从前有个人爱你很久<br>但偏偏风渐渐把距离吹得好远<br>好不容易又能再多爱一天<br>但故事的最后你好像还是说了拜拜
          </p>
        </div>
      </div>
      <div class="two col-5 px-0" data-reg="c">
        <div class="p-3 mr-2 mb-2" data-reg="c">
          <span data-reg="c">
            愿歌声伴你入梦
          </span>
          <h3 data-reg="c">夜半吹眠曲</h3>
          <p data-reg="c">
            人浮在世好比满天星<br>明亮或暗数不清<br>流星耀眼光辉遍天空<br>转瞬逝去无形
          </p>
        </div>
      </div>
      <div class="three col-7 px-0" >
        <div class="row mx-0" >
          <div class="col-4 px-0" data-reg="d">
            <div class="mr-2 p-3" data-reg="d">
              <span data-reg="d">
                送给每一位华夏儿女
              </span>
              <h4 data-reg="d">红歌嘹亮</h4>
            </div>
          </div>
          <div class="col-4 px-0" data-reg="e">
            <div class="mr-2 p-3" data-reg="e">
              <span data-reg="e">
                悠扬旋律<br>
                细咂年华
              </span>
              <h4 class="mt-4" data-reg="e">轻音乐</h4>
            </div>
          </div>
          <div class="col-4 px-0" data-reg="f">
            <div class="p-3" data-reg="f">
              <span data-reg="f">
                街头风
              </span>
              <h4 data-reg="f">抖音精选</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MyMusic',
    data() {
      return {
        songs: [],
      }
    },
    methods: {
      jumpDetail(e) {
        let item = e.target
        let url
        if (item.dataset.reg == 'a') {
          url='4_148.jpg'
        }
        if (item.dataset.reg == 'b') {
          url='3_120.jpg'
        }
        if (item.dataset.reg == 'c') {
          url='s_cartoon_61.jpg'
        }
        if (item.dataset.reg == 'd') {
          url='s_others_11.jpg'
        }
        if (item.dataset.reg == 'e') {
          url='s_cartoon_18.jpg'
        }
        if (item.dataset.reg == 'f') {
          url='3_97.jpg'
        }
        let reg=item.dataset.reg 
        this.$router.push(`/MusicDetail/${reg}/${url}`)
      }
    },
    mounted() {
      
    },

  }
</script>
<style scoped>
  .carousel-item{
    width: 1200px;
    height: 300px;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 4%;
    height: 20%;
    top: 40%;
    border-radius: 0.25rem;
    background-color: #aaa;
  }

  .carousel-indicators li {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .carousel-indicators li.active {
    background-color: #0aa1ed;
  }

 .slide{
   padding: 10px;
   font-size: large;
   float: left;
 }

  .item {
    width: 100%;
    height: 500;
  }

  .item>.one>div {
    height: 250px;
  }

  .item>.one:first-child>div {
    background: url('../../public/images/4_148.jpg') no-repeat;
    background-size: cover;
  }
  .item>.one:first-child>div:hover,.item>.one:nth-child(2)>div:hover,.item>.two>div:hover,
  .item>.three>div>div:first-child:hover,.item>.three>div>div:nth-child(2):hover,.item>.three>div>div:nth-child(3):hover{
    font-weight: 200;
    color: crimson;
  }

  .item>.one:nth-child(2)>div {
    background: url('../../public/images/3_120.jpg') no-repeat;
    background-size: cover;
  }

  .item>.two>div {
    background-image: url('../../public/images/s_cartoon_61.jpg');
    height: 200px;
  }

  .item>.two>div>span,
  .item>.two>div>p,
  .item>.two>div>h3 {
    color: rgb(145, 121, 121);
  }

  .item>.three>div>div>div {
    height: 200px;
  }

  .item>.three>div>div:first-child {
    background: url('../../public/images/s_others_11.jpg') no-repeat;
    background-size: cover;
  }

  .item>.three>div>div:nth-child(2) {
    background: url('../../public/images/s_cartoon_18.jpg') no-repeat;
    background-size: cover;
  }

  .item>.three>div>div:nth-child(3) {
    background: url('../../public/images/3_97.jpg') no-repeat;
    background-size: cover;
  }
</style>