<template>
  <div class="buying" >
      <div  v-for="item in weBuy">
        <h2>{{item.Title}}</h2>
        <div class="we-buy">
          <dl v-for="i in item.Products">
            <router-link :to="{ name: 'shopDetail',params:{ProductID:i.ProductID} }">
              <dt><img v-lazy="i.PicturesWebp"/></dt>
              <dd>
                <h4>{{i.Subject}}</h4>
                <p>￥{{i.FinalPrice}}</p>
              </dd>
              </router-link>
          </dl>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'buying',
  props: ['weBuy','weBuys'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.buying{
  h2{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
    margin-bottom: -8px;
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
      display: block;
      width: 100%;
      height: 100%;
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
        font-size: 13px;
      }
      p{
        margin-top: 3px;
      }
      }
    }

  }
}

</style>
