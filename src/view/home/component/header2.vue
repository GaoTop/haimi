<template>
  <div class="search-bar">
    <div class="text">
      <i class="iconfont icon-search"></i>
      <input class="fl f12 c_fff" v-model="keyValue" type="text">
      <router-link :to="{ name: 'searchDetail',params:{Keyword:keyValue} }">
        <div class="submit" @click="search">搜索</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyValue: '搜索宝贝'
    }
  },
  created (){
     this.$http.jsonp( "http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject="+this.keyValue+"&Sort=&BrandID=&platform=WAP",
       {
           jsonp: '_callback'
        }
        ).then(function(res){
           let data = res.data.data;
           this.weBuys=data;
        },function(res){
            alert( res )
     })
  },
  methods: {
    search () {
      location.reload(true);//刷新页面
    }
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bar{
  height: 44px;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  display:-webkit-box;
  box-sizing:border-box;
  .text{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    line-height: 25px;
    position: relative;
    display: -webkit-flex;
    i{
      font-size: 20px;
      color: #fff;
    }
    input{
      flex:1;
      border: none;
      height: 20px;
      display:inline-block;
      background: #f4f4f4;
      color:#666;
    }
    .submit{
      width: 40px;
      text-align: center;
      color:#fff;
      font-size: 12px;
    }
  }
}
</style>
