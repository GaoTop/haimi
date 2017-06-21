<template>
  <div class="hottest-things">
    <div class="hottest-title"  v-if="hottestBrands.length!=0">
      <img :src="hottestBrands.Records[0].PictureWebp">
    </div>
    <div class="hottest-image">
      <dl v-for="hottest in hottestText">
        <router-link  :to="{ name: 'shopDetail',params:{ProductID:hottest.CastID}}">
          <dt><img v-lazy="hottest.PictureWebp"/></dt>
          <dd>
            <h3>{{hottest.SlideName}}</h3>
            <p>{{hottest.Description}}</p>
          </dd>
          </router-link>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hottest-things',
  props: ['hottestBrands','hottestText'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hottest-things{
  margin-top: 8px;
  background: #fff;
  .hottest-title{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.hottest-image{
  width: 100%;
  overflow:hidden;
  overflow-x: auto;
  display:flex;
  padding-bottom: 6px;
  box-sizing: border-box;
  white-space:nowrap;
  dl{
    width: 30%;
    a{
      display: inline-block;
      width: 100%;
      color: #000;
      dt{
        width: 90px;
        img{
          width: 100%;
          height: auto;
        }
      }
      dd{
        padding-left: 10px;
        bix-sizing: border-box;
        h3{
          font-size: 12px;
          font-weight: 100;
          width: 90%;
          overflow:hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p{
          font-size: 10px;
          color: #ccc;
          text-align: center;
        }
      }
    }
  }
}

</style>
