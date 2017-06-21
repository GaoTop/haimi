<template>
    <div class="view-money">
        <remindBar></remindBar>
        <div class="coupon" v-for="item in couponData">
           <div class="coupon-top">
               <div class="coupon-top-left">
                   <p>￥ <span>{{item.AmountLeft.substr(0,2)}}</span></p>
                   <p>满{{item.LimitAmout.substr(0,2)}}使用</p>
               </div>
               <div class="coupon-top-right">
                   <h4>{{item.Title}}</h4>
                   <p>{{item.StartTime.substr(0,10)}}—{{item.ExpiryTime.substr(0,10)}}</p>
               </div>
           </div>
           <div class="coupon-bottom">
               <p>使用说明 <i class="iconfont icon-arrowDown" @click="isShow"></i></p>
               <span v-show="shows">该优惠券仅适用于全平台指定商品，特殊活动除外</span>
           </div>
        </div>
    </div>
</template>

<script>
import remindBar from './remind.vue'
export default {
    name: 'view-money',
    data () {
        return {
           couponData:[],
           shows: false
        }
    },
    components: {
        remindBar
    },
    methods: {
        isShow  () {
            if(this.shows == false){
                this.shows=true;
            }else{
                 this.shows=false;
            }
        }
    },
    created () {
        let ProductID = this.$route.params.ProductID;
        this.$http.jsonp( "http://m.haimi.com/api/bonus/all-list?page=1&pageSize=20&IsActivated=Y&current=Y&IsUsed=N&platform=WAP",
          {
            jsonp: '_callback'
          }
        ).then(function(res){
          let data = res.data.data;
          this.couponData=data;
          console.log(this.couponData)
        },function(res){
          alert( res )
        })
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.coupon{
    background: #fff;
    width: 95%;
    margin: 10px auto;
    .coupon-top{
        height: 60px;
        border-bottom: 1px solid #eee;
        display: -webkit-flex;
        .coupon-top-left{
            width: 30%;
            border-right: 1px solid #eee;
            padding-left: 15px;
            padding-top: 10px;
            box-sizing: border-box;
            p{
                color: #991f33;
                span{
                    font-size: 16px;
                }
            }
        }
        .coupon-top-right{
            flex:1;
            padding-left: 15px;
            padding-top: 10px;
            box-sizing: border-box;
            h4{
                font-size: 13px;
                font-weight: 100;
            }
            p{
                color: #ccc;
            }
        }
    }
    .coupon-bottom{
        padding: 10px;
        box-sizing:border-box;
        p{
            color: #999;
            i{
                margin-left: 5px;
                font-size: 12px;
            }
        }
        span{
            display: inline-block;
            padding-top: 5px;
            box-sizing:border-box;
        }
    }
}
</style>
