<template>
    <div class="jf-shop">
        <div class="js-shop-header">
            <i class="iconfont icon-jiantou"></i>
            <h2>我的积分</h2>
        </div>
        <div class="js-shop-sign">
            <p class="sign-explain"><i class="iconfont icon-icontishiwenhao"></i>如何获得积分<span>签到说明</span></p>
            <div class="sign-pie">
                <h3>已连续签到</h3>
                <p><span>2</span>天</p>
            </div>   
            <p class="preson-credit">我的积分&nbsp;<span>43</span></p>
            <p class="sign-tip">再签到<span>5</span>天可领取礼包</p>
            <div class="time-axis">
             <div class="erery-time" v-for='item in myIntergral.Rules'>
               <p class='timeDate'>{{item.Date}}<p>
               <p class='timeDian'><i></i></p>
               <p class="timeCount">+{{item.Num}}</p>
             </div>
           </div>
        </div>
        <ul class="clearfix">
            <router-link to="/zoomPage/viewJfshop/mallshop" class=navs active-class="on" ><li>积分商城</li></router-link>
            <router-link to="/zoomPage/viewJfshop/detailshop" class=navs active-class="on" ><li>积分明细</li></router-link>
            <router-link to="/zoomPage/viewJfshop/recordshop" class=navs active-class="on" ><li>兑换记录</li></router-link>
        </ul>
        <div class="clear"></div>
        <router-view></router-view>
    </div>
</template>

<script>
//http://m.haimi.com/api/user-sign/info
export default {
    name: 'jf-shop',
    data () {
        return {
            myIntergral: []
        }
    },
    components: {},
    mounted () {},
    created () {
    this.$http.jsonp( "http://m.haimi.com/api/user-sign/info",
      {
        jsonp: '_callback'
      }
    ).then(function(res){
      let data = res.data.data;
      this.myIntergral = data;
      console.log(this.myIntergral)
    },function(res){
      alert( res )
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jf-shop{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
}
.js-shop-header{
    height: 43px;
    position: relative;
    i{
        position: absolute;
        top:12px;
        left: 12px;
        font-size: 16px;
    }
    h2{
        font-size: 16px;
        font-weight: 100;
        text-align: center;
        line-height: 43px;
    }
}
.js-shop-sign{
    background: url("http://img.haimi.com/Fp0O_PX3hT3dA-xClon3uy1Sv4wA");
    .sign-explain{
        padding-left: 10px;
        padding-top: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        i{
            font-size: 16px;
        }
        span{
            float: right;
        }
    }
    .sign-pie{
        height: 105px;
        background: url('http://img.haimi.com/FihU9EoVWoTHbqxpu4VuUoGG5dVJ') no-repeat center center;
        background-position: 50% 50%;
        background-size: 104px;
        border-image-slice:100%;
        position: relative;
        h3{
            font-weight: 100;
            left:41%;
            position: absolute;
            top: 38%;
            color: #fff;
        }
        p{
            position: absolute;
            left: 46.5%;
            top: 55%;
            color: #fff;
            font-size: 16px;
        }
    }
    .preson-credit{
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
        text-align: center;
        span{
            color: #cbac81;
            font-weight: normal;
        }
    }
    .sign-tip{
        text-align: center;
        color: #999;
        padding-top: 2px;
        padding-bottom: 18px;
        box-sizing: border-box;
        span{
            color: #cbac81;
        }
    }
}
.clearfix{
    line-height: 36px;
    height: 36px;
    display: -webkit-flex;
    background: #fff;
    a{
        flex:1;
        text-align: center;
        position: relative;
        color: #000;
        display: block;
        line-height: 33px;
        &.on:after{
          content: "";
          display: block;
          width: 50%;
          height: 3px;
          position: absolute;
          left: 20%;
          bottom: 0;
          background: #000;
        }
    }
}
.time-axis{
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    .erery-time{
      width: 40px;
      font-size: 12px;
      .timeDian{
        width: 40px;
        border-bottom: 1px solid #ccc;
        position: relative;
        margin-top: 5px;
        margin-bottom: 5px;
        i{
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
          position: absolute;
          top: -1px;
          left: 50%;
        }
      }
    }
  }
.clear{
    clear: both;
}
</style>
