<template>
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
        <!--点击加入购物车或立即购买弹出遮罩层-->
         <div class="add-car"  :style="{display:display}" @click='removeCar()'>
            <detailmark></detailmark>

        </div>
    </div>
</template>

<script>
import detailmark from '@/view/shopDetail/component/detailMark.vue'
export default {
    name: 'detailfooter',
    props: ['haimiData'],
    data () {
        return {
            'display' : 'none'
        }
    },
    components: {
        detailmark
    },
    methods: {
        addCar () {
             if( this.display == 'none' ){
                this.display = '-webkit-box';
              }else{
                this.display = 'none';
            }
        },
        removeCar () {
            if( this.display == 'none' ){
                this.display = '-webkit-box';
              }else{
                this.display = 'none';
            }
        }
    }
}
</script>
<style scoped lang="less">
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
.add-car{
    position:fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: none;
}

</style>
