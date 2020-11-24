<template>
  <div class="container ">
    <!-- <div>{{$store.getters.getmyMusicId}}</div> -->
    <div>
      <div class="topimg"></div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-danger" v-for='(item,i) of songs' :key='i'>
          <div class="content">
            <span class="left">{{i+1}}</span>
            <div class="middle">
              <h6>{{item.name}}</h6>
              <p>{{item.song_singer}}</p>
            </div>
            <div class="right">
              <div class="img" @click='jumpplay(i)'></div>
              <a @click='del()'>删除</a>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Collect',
    data() {
      return {
        songs: []
      }
    },
    methods: {
      getcollect() {
        var url = 'song/get/'
        this.$axios.get(url)
          .then(res => {
            console.log(res)
            this.songs = res.data.data
            console.log(res.data.data)

          })
          .catch(err => {
            console.log(err)
          })
      },
      del(){

      },
      jumpplay(i){
        this.$store.commit('setMsg', this.songs[i])
        this.$router.push('/about')
      }
    },
    mounted() {
      this.getcollect()
    },

  }
</script>
<style scoped>
  .topimg {
    width: 100%;
    height: 200px;
    background: url('../../public/images/topimg.jpg') no-repeat;
    background-size: cover;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .content .left {
    padding: 5px;
    margin-right: 30px;
    margin-left: 30px;
    color: black;
    width: 20px;
  }

  .list-group-item {
    padding: 8px 10px 0px;
  }
  .list-group-item:hover {
    padding: 8px 10px 0px;
    background-color: rgb(243, 186, 214);
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;

  }

  .middle h6 {
    font-size: 15px;
    padding: 1px 15px;
    color: black;
  }

  .middle p {
    font-size: 10px;
    color: rgb(82, 76, 76);
    padding: 3px 15px;
  }
  .right{
    display: flex;
    align-items: center;
    margin-left: 60%;
  }
  .right>a {
    font-size: 10px;
    margin-left: 30px;
    color: blue;
    cursor: pointer;
  }
  .right>.img{
    background: url('../../public/images/bofangqianniu_2_51.jpg') -33px -33px no-repeat;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-right: 50px;
  }
</style>