<template>
   <div class="footer">
    <router-link v-for="item in navLists" :to='item.link' active-class="on">
       <p class='bgm'><i :class="item.icon"></i></p>
       <p>{{item.text}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navLists: [
        {
          icon: 'iconfont icon-fangzi',
          text: '首页',
          link: '/homeIndex'
        },
        {
          icon: 'iconfont icon-fenlei',
          text: '分类',
          link: '/typePage'
        },
        {
          icon: 'iconfont icon-gouwuche',
          text: '购物车',
          link: '/shoppingCartPage'
        },
        {
          icon: 'iconfont icon-wode',
          text: '我的',
          link: '/zoomPage'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.footer{
  background: #fff;
  font-size:14px;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  height:48px;
  border-top:1px solid #ccc;
  display:-webkit-flex;
  justify-content: space-around;
}
p{
  color:#666;
  text-align:center;
  font-size: 12px;
}
.bgm{
  font-size: 20px;
  i{
    font-size: 20px;
  }
}
.on p{
  color: #991f33;
}

</style>
