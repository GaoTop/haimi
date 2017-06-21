<template>
    <div class="mall-shop">
        <weBuy :we-buy="weBuy"></weBuy>
    </div>
</template>

<script>
import weBuy from '@/components/buy/buy3.vue'
export default {
    name: 'mall-shop',
    data () {
        return {
          weBuy:[]
        }
    },
    components: {
       weBuy
    },
 created () {
    this.$http.jsonp( "http://m.haimi.com/api/credit/split-product-list",
      {
        jsonp: '_callback'
      }
    ).then(function(res){
      let data = res.data.data.Products;
      this.weBuy = data;
      console.log(this.weBuy)
    },function(res){
      alert( res )
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mall-shop{
  background: #f3f3f3;
}
</style>
