<template>
    <div class="view-order">
        <nav>
            <span v-for="nav in navData">
                <router-link :to="nav.routes" active-class="on" class="nav2">
                    {{nav.txt}}
                </router-link>
            </span>
        </nav>
        <childrenOrder></childrenOrder>
        <footerNav></footerNav>
    </div>
</template>

<script>
import footerNav from '@/components/footerNav'
import childrenOrder from './sc.vue'
export default {
    name:'view-order',
    data () {
        return {
            navData:[
                {
                    txt:'全部',
                    routes:'all'
                },
                 {
                     txt:'待付款',
                     routes:'wait-pay'
                 },
                 {
                     txt:'待发货',
                     routes:'wait_seller_ship'
                 },
                 {
                     txt:'待收货',
                     routes:'wait_buy_takeover'
                 },
                 {
                     txt:'退款',
                     routes:'takeover_argue'
                 }
            ]
        }
    },
    components: {
        footerNav,
        childrenOrder
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.view-order{
    overflow: hidden;
}
nav{
    width: 100%;
    height: 33px;
    display: -webkit-flex;
    border-bottom:1px solid #eee;
    background:#fff;
    span{
        flex: 1;
        text-align: center;
       .nav2{
            display: block;
            line-height: 33px;
            position: relative;
            color:#000;
            &.on:after{
              content: "";
              display: block;
              width: 60%;
              height: 3px;
              position: absolute;
              left: 20%;
              bottom: 0;
              background: #000;
            }
        }
    }
}
</style>
