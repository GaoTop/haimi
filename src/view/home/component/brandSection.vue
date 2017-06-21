<template>
  <div class="brand-section" v-if="brandSection.length!=0">
    <h2>{{brandSection.Channel.Name}}</h2>
    <div class="brand-img">
        <div class="brand-left">
          <a href="#"><img :src="brandSection.Records[0].PictureWebp"/></a>
          <a href="#"><img :src="brandSection.Records[1].PictureWebp"/></a>
        </div>
        <div class="brand-right">
          <a href="#"><img :src="brandSection.Records[2].PictureWebp"/></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand-section',
  props: ['brandSection'],
  data () {
    return {}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.brand-section{
  margin-top: 8px;
  background: #fff;
  h2{
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    font-weight: 100;
  }
}
.brand-img{
  width: 100%;
  display: -webkit-flex;
}
.brand-left{
  width: 52%;
  a{
    display: block;
    width: 100%;
    img{
      width: 100%;
      display: block;
    }
  }
}
.brand-right{
  width: 48%;
  a{
    width: 100%;
    display: block;
    img{
      width: 100%;
      display: block;
    }
  }
}
</style>
