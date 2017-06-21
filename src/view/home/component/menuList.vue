<template>
  <div class="menuList">
    <dl v-for='item in menuList'>
      <router-link :to="'/detailsPage/detailsNewPage/'+item.SlideID">
        <dt><img :src="item.PictureWebp"></img></dt>
        <dd>{{item.SlideName}}</dd>
      </router-link>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'menuList',
  props: ['menuList'],
  data () {
    return {}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menuList{
  width: 100%;
  background: #fff;
  margin-top: 8px;
  display: -webkit-flex;
  dl{
    flex:1;
    text-align: center;
    padding-bottom: 6px;
    box-sizing: border-box;
    a{
      color: #000;
       dd {
      margin-top: 5px;
    }
      dt{
        width: 75px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>
