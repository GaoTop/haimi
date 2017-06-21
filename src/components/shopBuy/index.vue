<template>
  <div class="shopBuy" >
    <div>
      <h2>商品推荐</h2>
      <div class="we-buy">
        <dl v-for="item in shopBuy">
          <router-link :to="{ name: 'shopDetail',params:{ProductID:item.ProductID} }">
            <dt><img v-lazy="item.PicturesWebp"/></dt>
            <dd>
              <h4>{{item.Subject}}</h4>
              <p>￥{{item.FinalPrice}}</p>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopBuy',
  props: ['shopBuy'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .shopBuy{
    background: #f3f3f3;
    h2{
      height: 40px;
      background: #fff;
      line-height: 40px;
      text-align: center;
      font-size: 13px;
      font-weight: 100;
      margin-bottom: -8px;
      border-bottom: 1px solid #eee;
    }
  }

.we-buy{
  display: -webkit-flex;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  dl{
    width: 48.8%;
    background: #fff;
    margin-top: 8px;
    padding-bottom: 10px;
    box-sizing: border-box;
    a{
      display: inline-block;
      width: 100%;
      color: #000;
      dt{
        width: 100%;
        img{
          width: 100%;
        }
      }
      dd{
        padding-left: 5px;
        padding-right: 5px;
        box-sizing: border-box;
        h4{
          margin-top: 10px;
          width: 90%;
          overflow:hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 100;
          color: #ccc;
          font-size: 13px;
        }
        p{
          margin-top: 3px;
          text-align: center;
        }
      }
    }
  }
}
.buying-img{
   width: 100%;
   img{
     width: 100%;
     display: block;
   }
 }
</style>
