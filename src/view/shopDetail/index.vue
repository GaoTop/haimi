<template>
  <div class="m-wrapper homePage">
    <div class="detailBox">
      <Swiper :swiper-slide="swiperSlide"></Swiper>
      <div class="detail-content">
        <h2>{{name}}</h2>
        <output><i>￥{{price}}</i><span>月销{{num}}件</span></output>
        <aside>邮费{{limitBuy}}元</aside>
      </div>
      <div class="detail-content2">
        <ul>
          <li v-for="i in promises"><i class="iconfont icon-duihao"></i>{{i}}</li>
        </ul>
      </div>
      <div class="detail-content2 nomar" v-if="promotions" v-for="j in promotions">
        <p>{{j.Subject}} <i class="iconfont icon-fanhui"></i></p>
      </div>
      <div class="detail-content2">
        <p>请选择: <i class="iconfont icon-fanhui"></i></p>
      </div>
      <comment :comment-data="commentData" :comment-score="commentScore"></comment>
      <div class="clear"></div>
      <haimi :haimi-data="haimiData"></haimi>
      <weBuy :shop-buy="weShop"></weBuy>
      <div class="detail-last">
        <h2>由海密提供技术支持</h2>
      </div>
      <div class="detailfooter">
        <div class="footers">
            <router-link to="/homeIndex/RecommendPage/2">
                <p><i class="iconfont icon-fangzi"></i></p>
            </router-link>
            <p><i class="iconfont icon-star-outline"></i></p>
            <router-link to="/shoppingCartPage">
                <p><i class="iconfont icon-gouwuche"></i></p>
            </router-link>
        </div>
        <button class="addCar" @click="addCar">加入购物车</button>
        <button class="carBuy" @click="addCar">立即购买</button>
    </div>
     <!--点击加入购物车或立即购买弹出遮罩层-->
         <div class="add-cars"  :style="{display:display}" @click='removeCar()'>
          <detailmark v-show="cao" :haimi-data="haimiData"></detailmark>
        </div>
        
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import comment from './component/comment.vue'
import haimi from './component/haimi.vue'
import weBuy from "@/components/shopBuy"
import detailmark from './component/detailMark.vue'
export default {
  name: 'hello',
  data () {
    return {
      swiperSlide: [],
      name : '',
      price: '',
      num: '',
      limitBuy: '',
      promises: '',
      commentData: '',
      promotions: '',
      commentScore: '',
      haimiData: [],
      weShop: [],
      display: 'none',
      cao:false
    }
  },
  components: {
    Swiper,
    comment,
    haimi,
    weBuy,
    detailmark
  },
  created () {
    let ProductID = this.$route.params.ProductID;
    this.$http.jsonp( "http://m.haimi.com/api/product/detail-cdn?ProductID="+ProductID+"&platform=WAP",
      {
        jsonp: '_callback'
      }
    ).then(function(res){
      let data = res.data.data;
      this.name = data.Subject;
      this.price = data.FinalPrice;
      this.num = data.MonthSalesNum;
      this.limitBuy = data.LimitBuy;
      this.promises = data.Promises;
      this.commentData = data.TopReviews;
      this.promotions = data.Promotions;
      this.commentScore = data.ProductScore + data.ReviewCount;
      this.swiperSlide = JSON.parse( data.ProductPictures );
      this.haimiData = data;
      this.weShop = data.Recommend
    },function(res){
      alert( res )
    })
  },
  methods: {
        addCar () {
             if( this.display == 'none' ){
                this.display = '-webkit-box';
                 this.cao=true;
              }else{
                this.display = 'none';
                this.cao=false;
            }
        },
        removeCar () {
            if( this.display == 'none' ){
                this.display = '-webkit-box';
                this.cao=true;
              }else{
                this.display = 'none';
                this.cao=false;
            }
        }
    }
}
</script>

<style scoped lang="less">
.m-wrapper{
  margin-bottom: 40px;
}
.detailBox{
  background: #f3f3f3;
}
.detail-content{
  background: #fff;
  h2{
    font-weight: 100;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  output{
    padding: 12px;
    box-sizing: border-box;
    display: inline-block;
    border-bottom: 1px solid #eee;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    i{
      color: #B7233B;
      font-style: normal;
    }
    span{
      color: #999;
    }
  }
  aside{
    display: inline-block;
    padding: 12px;
    color: #999;
  }
}
.detail-content2{
  margin-top: 10px;
  font-size: 12px;
  background: #fff;
  padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  height: 38px;
  line-height: 38px;
  ul li{
    float: left;
    margin-right: 8px;
    i{
      margin-right: 5px;
      font-size: 14px;
      color: #B7233B;
      font-style: normal;
    }
  }
  p{
    i{
      float: right;
      font-size: 12px;
    }
  }
}
.nomar{
  margin-top: 1px;
}
.detail-last{
  h2{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
    color: #ccc;
  }
}
.clear{
  clear: both;
}
.detailfooter{
    background: #fff;
    font-size:14px;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    height:40px;
    border-top:1px solid #ccc;
    display:-webkit-flex;
    .footers{
        flex: 2;
        padding-top: 5px;
        padding-bottom: 5px;
        box-sizing: border-box;
        display:-webkit-flex;
        p{
            flex: 1;
            text-align: center;
            line-height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            box-sizing: border-box;
            border-right: 1px solid #ccc;
            i{
                font-size: 20px;
            }
        }
    }
    button{
        flex: 2;
        border: none;
        width: 100%;
        height: 100%;
    }
    .addCar{
        background: #fff;
    }
    .carBuy{
        background: #801a2a;
        color: #fff;
    }
}
.add-cars{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 102;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: none;
}
</style>
