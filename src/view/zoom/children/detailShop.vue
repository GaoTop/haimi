<template>
    <div class="datail-shop">
        <ul class="detail-shop-list">
            <li v-for="item in detailShop">
                <i class="iconfont icon-jifen"></i>
                <div>
                    <h4>{{item.Remark}}</h4>
                    <p>{{item.CreateTime.substr(0,10)}}</p>
                </div>
                <span>+{{item.Amount}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'datail-shop',
    data () {
        return {
          detailShop:[]
        }
    },
    created () {
        this.$http.jsonp( "http://m.haimi.com/api/me/get-credit-detail",
          {
            jsonp: '_callback'
          }
        ).then(function(res){
          let data = res.data.data;
          this.detailShop = data;
          console.log(this.detailShop)
        },function(res){
          alert( res )
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detail-shop-list{
    background: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    li{
        padding-top: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        display: -webkit-flex;
        div{
            flex:1;
            h4{
                font-size: 12px;
                font-weight: 100;
            }
            p{
                color: #ccc;
            }
        }
        i{
            font-size: 24px;
            color: #ccc;
            margin-right: 10px;
        }
        span{
            color: #991f33;
            font-size: 14px;
        }
    }
}
</style>
