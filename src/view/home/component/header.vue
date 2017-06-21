<template>
  <div class="search-bar">
    <div class="text">
      <i class="iconfont icon-search"></i>
      <input class="fl f12 c_fff" placeholder="搜索宝贝" type="text">
      <router-link to="/searchPage">
        <div class="submit">搜索</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bar{
  height: 44px;
  background: #242424;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  display:-webkit-box;
  box-sizing:border-box;
  .text{
    width: 100%;
    height: 100%;
    background: #1a1a1a;
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
      background: #1a1a1a;
      color:#fff;
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
