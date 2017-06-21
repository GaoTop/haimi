<template>
  <div id="typeList">
    <ul class="typeHeader">
      <li><router-link to="/typePage/classPage" active-class="on" >分类</router-link></li>
      <li><router-link to="/typePage/brandPage" active-class="on" >品牌</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'typeList'
}
</script>

<style scoped lang="less">
.typeHeader{
  width: 40%;
  display: inline-block;
  height: 37px;
  margin: 0 auto;
  display: -webkit-flex;
  -webkit-flex-direction: space-between;
  li{
    flex:1;
    line-height: 36px;
    text-align: center;
    a{
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      color: #666;
      font-size: 13px;
      &.on:after{
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        position: absolute;
        left: 30%;
        bottom: 5px;
        background: #000;
      }
    }
  }
}
</style>
