<template>
  <div class="good-things" v-if="goodThing.length!=0">
    <h2>{{goodThing.Channel.Name}}</h2>
    <div class="things-img">
      <router-link v-for="item in goodThing.Records"  :to="{ name: 'shopDetail',params:{ProductID:item.CastID}}">
        <span><img :src="item.PictureWebp"/></span>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'good-thing',
  props: ['goodThing'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.good-things{
  margin-top: 8px;
  background: #fff;
  h2{
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    font-weight: 100;
  }
}
.things-img{
  width: 100%;
  overflow: hidden;
  a{
    display: block;
    width: 50%;
    overflow: hidden;
    float: left;
    position: relative;
    span{
      padding-top: 63%;
      display: inline-block;
    }
    img{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
    }
  }
}
</style>
