<template>
    <div class="view-money">
        <nav>
            <span>
                <router-link to='/zoomPage/viewMoney/K' class=navs active-class="on" >可用</router-link>
            </span>
             <span>
                <router-link to='/zoomPage/viewMoney/Y' class=navs active-class="on" >已使用</router-link>
            </span>
             <span>
                <router-link to='/zoomPage/viewMoney/N' class=navs active-class="on" >已过期</router-link>
            </span>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import footerNav from '@/components/footerNav'
import headerNav from './viewOrder.vue'
export default {
    name: 'view-money',
    data () {
        return {}
    },
    components: {},
    mounted () {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.view-money{
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    position: absolute;
    overflow: hidden;
}
nav{
    width: 100%;
    height: 33px;
    line-height: 33px;
    display: -webkit-flex;
    border:1px solid #eee;
    background:#fff;
    span{
        flex: 1;
        text-align: center;
        .navs{
            display: block;
            line-height: 33px;
            position: relative;
            color:#000;
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
}
</style>
