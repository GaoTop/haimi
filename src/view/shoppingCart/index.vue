<template>
  <div class="shopcar">
    <div class="shoppingNone">
      <div class="car-box">
         <a>
           <img src="data:image/png;base64,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"/>
           <router-link to="/homeIndex/RecommendPage/2"><span>去首页逛逛</span></router-link>
         </a>
      </div>
      <weBuy :shop-buy="weShop"></weBuy>
    </div>
    <div class="shopping">
      <div class="shopping-top">
        <label for="qx-all">
          <input type="checkbox" id="qx-all">
          <span v-bind:class='{ "redA" : isA,"redB":isB}' @click='toggle'><i class="iconfont icon-duihao"></i></span>
        </label> 
        <h2><i class="iconfont"></i>海密严选</h2>
      </div>
      <div class="shopping-bot" v-for="(item,index) in shop">
         <label for="dx-all">
          <input type="checkbox" id="dx-all">
          <span v-bind:class='{ "redA" : isA,"redB":isB}' @click='toggle'><i class="iconfont icon-duihao"></i></span>
        </label> 
        <a href="#"><img :src="item.prciureImg" alt=""></a>
        <div class="shopping-bot-center">
          <p class="tit">{{item.name}}</p>
          <p class="cont"><span v-if="item.getY">颜色分类:{{item.getY}};尺码大小:{{item.getC}}</span></p>
          <p class="price">￥{{item.price}}</p>
        </div>
        <div class="shopping-bot-right">
          <p class="del" @click="delShop(index)">删除</p>
          <p class="num">X  <span>{{item.num}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weBuy from "@/components/shopBuy"
export default {
  name: 'weShop',
  data () {
    return {
      weShop: [],
      shop:[],
      isA:false,
      isB:""
    }
  },
  components:{
    weBuy
  },
  mounted () {
    this.getweShop()
    this.getBought()
  },
  methods: {
    getweShop () {
      this.$http.get('/api/weShopData').then(function (response) {
        this.weShop = response.data.extra.Suggest
      })
    },
    getBought() {
      var arr = [];
      arr = JSON.parse(window.localStorage.getItem('main'))
      for( var i=0;i<arr.length;i++){
        this.shop.push(JSON.parse(window.localStorage.getItem('product'+arr[i])))
      }
      // console.log(this.shop)
    },
    delShop (index) {
      let id=window.localStorage.getItem("main");
      let idTxt=JSON.parse(id);
      // let product=window.localStorage.removeItem("product"+idTxt[index]);
      location.reload(true);
    },
    toggle () {
       this.isA = !this.isA;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopcar{
  background: #f3f3f3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
}
.car-box{
  padding-bottom: 56px;
  padding-top: 116px;
  box-sizing: border-box;
  a{
    img{
      width: 30%;
      display: block;
      margin: 0 auto;
    }
    span{
      display: block;
      margin: 15px auto;
      width: 22%;
      line-height: 22px;
      border: 1px solid #000;
      text-align: center;
    }
  }
}
.shoppingNone{
  display: none;
}
.shopping-top{
  height: 38px;
  line-height: 38px;
  background: #fff;
  display: -webkit-flex;
  border-bottom: 1px solid #eee;
  label{
    display: block;
    width: 10%;
    margin-left: 2%;
    input{
      display: none;
    }
    span{
      border-radius: 50%;
      border: 1px solid #666;
    }
    .redA{
      background: #991f33;
      border: none;
      i{
        color: #fff;
      }
    }
  }
  h2{
    flex:1;
    font-weight: 100;
    font-size: 13px;
  }
}
.shopping-bot{
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  padding: 10px 5px;
  box-sizing: border-box;
  background: #fff;
  label{
    display: block;
    width: 10%;
    margin-top: 25px;
    input{
      display: none;
    }
    span{
      border-radius: 50%;
      border: 1px solid #666;
    }
    .redA{
      background: #991f33;
      border: none;
      i{
        color: #fff;
      }
    }
  }
  a{
    width: 59px;
    height: 59px;
    display: block;
    border: 1px solid #E0D8D8;
    margin-right: 6px;
    img{
      display: block;
      width: 100%;
    }
  }
  .shopping-bot-center{
    width: 60%;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
    p{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: normal;
    }
    .tit{
      
    }
    .cont{
      color: #999;
      height: 25px;
    }
    .price{
      margin-top: 5px;
    }
  }
  .shopping-bot-right{
    width: 15%;
    text-align: right;
    .num{
      margin-top: 20px;
      color: #999;
    }
    .del{
      color: #999;
    }
  }
}
</style>

