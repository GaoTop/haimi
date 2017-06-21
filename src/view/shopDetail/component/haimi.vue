<template>
    <div class="haimi">
        <div class="haimi-top">
            <dl>
                <dt v-if="haimiData.Mall"><img :src="haimiData.Mall.LogoSrc"></dt>
                <dd v-if="haimiData.Mall">
                    <h3>{{haimiData.Mall.MallName}}</h3>
                    <p>{{haimiData.Mall.Introduction}}</p>
                </dd>
            </dl>
        </div>
        <div class="haimi-center">
            <p>发现更多 <a href="#">{{haimiData.BrandName}}</a>良品 <i class="iconfont icon-fanhui"></i></p>
        </div>
        <div class="haimi-bottom">
            <h2>商品详情</h2>
            <div class="haimi-bottom-picture">
                <img src="http://img.haimi.com/Fpf_7URcK8ypvJq3cz3JySMSN6MI" alt="">
            </div>
            <div class="haimi-bottom-detail" v-html="haimiData.Descriptioin"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'haimi',
        props: ['haimiData'],
        data () {
        return {}
    },
    components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.haimi-top{
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 10px;
    dl{
            display: -webkit-flex;
        dt{
            width: 42px;
            img{
                display: block;
                width: 42px;
            }
        }
        dd{
            margin-left: 10px;
            flex:1;
            h3{
                font-size: 14px;
                font-weight: 100;
            }
            p{
                margin-top: 3px;
                color: #666;
            }
        }
    }
}
.haimi-center{
    margin-top: 10px;
    font-size: 12px;
    background: #fff;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    height: 38px;
    line-height: 38px;
    p{
        i{
            float: right;
            font-size: 12px;
        }
        a{
            color: #991f33;
        }
    }
}
.haimi-bottom{
    background: #fff;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    h2{
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        font-weight: 100;
    }
    .haimi-bottom-picture{
        width: 100%;
        img{
            width: 100%;
            display: block;
        }
    }
}
.haimi-bottom-detail{
    margin-top: 10px;
    p{
        width: 100%;
        img{
            display: block;
            width: 100%;
            padding-bottom: 10px !important;
        }
    }
}
</style>
