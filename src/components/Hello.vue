<template>
  <div class="hello">
   <router-view></router-view>
   <footerNav></footerNav>
  </div>
</template>

<script>
import homeIndex from '../view/home'
import footerNav from '@/components/footerNav'
export default {
  name: 'hello',
  data () {
    return {}
  },
  components: {
    homeIndex,
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
body{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
h1{
  font-size: 16px;
}
</style>
