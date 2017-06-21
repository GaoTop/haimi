<template>
    <div class="detail-mark">
        <div class="detail-mark-top">
            <dl>
                <dt><img :src="haimiData.PicturesWebp"></dt>
                <dd>
                    <p class="price">￥{{haimiData.FinalPrice}}</p>
                    <p class="kuc">(库存{{haimiData.Stock}}件)</p>
                    <p class="select" v-if="haimiData.AttrInfoArray!=''">请选择:颜色分类</p>
                </dd>
            </dl>
        </div>
        <div class="detail-mark-center" v-if="haimiData.AttrInfo">
            <p>分类</p>
            <ul class="cenetr-list" id="cenetr-list">
                <li v-for="(i,index) in haimiData.SkuInfo" v-on:click.stop="gets(index,i)">{{i.SkuName}}</li>
            </ul>
        </div>
        <div class="detail-mark-bottom">
            <p>购买数量</p>
            <p><span class="suan del" v-on:click.stop="del">-</span><input class="num" v-model="num"><span class="suan add" v-on:click.stop="add">+</span></p>
        </div>
       <div class="detail-mark-sure" @click="sure">确定</div>
    </div>
</template>

<script>
export default {
    name: 'detail-mark',
    props: ['haimiData'],
    data () {
        return {
            num: 1,
            getY:''
        }
    },
    methods: {
        del (){
            this.num--;
        },
        add () {
            this.num++;
        },
        sure () {
             var obj = {
               idTxt: this.haimiData.ProductID,
               price : this.haimiData.FinalPrice,
               name: this.haimiData.Subject,
               prciureImg: this.haimiData.Pictures,
               num: this.num,
               getY: this.getY
            }
              var arr = window.localStorage['main'];
              var brr = arr? JSON.parse(arr):[];
              brr.push(this.haimiData.ProductID)
              window.localStorage.setItem('main',JSON.stringify(brr))
              window.localStorage.setItem('product'+this.haimiData.ProductID,JSON.stringify(obj))
        },
        gets (index,i) {
           this.getY=this.haimiData.SkuInfo[index].SkuName;
        }
    }
}
</script>
<style scoped lang="less">
.detail-mark{
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    .detail-mark-sure{
        line-height: 37px;
        background: #801a2a;
        text-align: center;
        color: #fff;
    }
    .detail-mark-top{
        padding: 13px 10px;
        border-bottom: 1px solid #eee;
        dl{
            display: -webkit-flex;
            dt{
                width: 51px;
                margin-right: 10px;
                img{
                    display: block;
                    width: 100%;
                }
            }
            dd{
                flex: 1;
                .price{
                    color: #991f33;
                }
                .kuc{
                    color: #ccc;
                }
                .select{
                    color: #666;
                }
            }
        }
    }
    .detail-mark-center{
        padding: 10px;
        ul{
            margin-top: 3px;
            overflow:hidden;
            padding-right: 10px;
            padding-bottom: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #ccc;
            li{
                padding: 3px 6px;
                border: 1px solid #000;
                float: left;
                margin-right: 10px;
                margin-top: 3px;
                margin-bottom: 5px;
            }
        }
    }
    .detail-mark-bottom{
        padding: 10px;
        background: #fff;
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        p{
            text-align: center;
            line-height: 25px;
            .suan{
                display: inline-block;
                width: 25px;
                height: 25px;
                border: 1px solid #eee;
            }
            .num{
                display: inline-block;
                width: 48px;
                height: 25px;
                border: 1px solid #eee;
                text-align: center;
            }
        }
    }
}
.cenetr-list{
    height: 140px;
    margin-bottom: 10px;
    overflow: auto;
}
</style>
