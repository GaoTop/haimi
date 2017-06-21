<template>
    <div class="mine-index">
        <div class="bot">
            <div class="mine-index-top">
                <dl>
                    <dt><img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100"></dt>
                    <dd>
                       <h2>{{defaultName}}<i class="iconfont icon-xiugai" @click="updataName"></i></h2>
                    </dd>
                </dl>
            </div>
            <div class="mine-index-center">
                <p>我的订单
                    <router-link to="/zoomPage/viewOrder/all"><span>查看订单 <i class="iconfont icon-fanhui"></i></span></router-link>
                </p>
                <div class="mine-index-center-dl">
                    <dl v-for="item in dlData">
                        <router-link :to="'viewOrder/'+item.routes">
                            <dt><i :class="item.icon"></i></dt>
                            <dd>{{item.txt}}</dd>
                        </router-link>
                    </dl>
                </div>
            </div>
            <div class="mine-index-bottom">
                <ul>
                    <li v-for="itemList in liData">
                    <router-link :to='itemList.view'><p>
                        <b :class="itemList.icon"></b>
                        {{itemList.txt}}
                        <span><i :class="itemList.iconR"></i></span>
                    </p></router-link>
                    </li>
                </ul>
            </div>
            <div class="mine-closeLogin" @click="signOut">
                退出登录
            </div>
        </div>
        <div class="image-group-mark"  :style="{display:display}">
            <div class="big-mark">
                <div class="small-mark">
                    <p>请输入昵称</p>
                    <input type="text" v-model="name">
                    <div>
                        <span @click="updataName">取消</span>
                        <span @click="updataNames">确定</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dlData: [
                {
                    icon: 'iconfont icon-daifukuan',
                    txt: '待付款',
                    routes:'all'
                },
                {
                    icon: 'iconfont icon-daifahuo',
                    txt: '待发货',
                    routes:'wait_seller_ship'
                },
                {
                    icon: 'iconfont icon-daishouhuo',
                    txt: '待收货',
                    routes:'wait_buy_takeover'
                },
                {
                    icon: 'iconfont icon-daipingjia',
                    txt: '待评价',
                    routes:'/wait_comment'
                },
                {
                    icon: 'iconfont icon-daifukuan',
                    txt: '退款',
                    routes:'takeover_argue'
                }
            ],
            liData: [
                {
                    icon: 'iconfont icon-shoucang',
                    txt: '收藏宝贝',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewSc'
                },
                {
                    icon: 'iconfont icon-youhuiquan',
                    txt: '红包优惠券',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewMoney'
                },
                {
                    icon: 'iconfont icon-zuji',
                    txt: '足迹',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewZuji'
                },
                {
                    icon: 'iconfont icon-jifen',
                    txt: '积分商城',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewJfshop'
                },
                {
                    icon: 'iconfont icon-shouhuodizhi',
                    txt: '收货地址',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewArea'
                },
                {
                    icon: 'iconfont icon-bangdingshouji',
                    txt: '绑定手机',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewPhone'
                },
                {
                    icon: 'iconfont icon-icon052',
                    txt: '海密客服',
                    iconR: 'iconfont icon-fanhui',
                    view : 'viewKf'
                }
            ],
            display: 'none',
            name: '',
            defaultName: '海密_cdd25'
        }
    },
    methods: {
        signOut (){
            window.localStorage.removeItem("userInfor");
            location.reload(true);//刷新页面
        },
        updataName () {
            if( this.display == 'none' ){
                this.display = '-webkit-box';
            }else{
                this.display = 'none';
            }
        },
        updataNames () {
            this.defaultName=this.name;
            this.updataName ()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine-index{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .bot{
        margin-bottom: 50px;
    }
}
.mine-index-top{
    background: #fff;
    padding: 10px;
    dl{
        display: -webkit-flex;
        dt{
            width: 42px;
            margin-right: 10px;
            img{
                display: block;
                width: 42px;
            }
        }
        dd{
            flex: 1;
            h2{
              font-weight: 100;
              font-size: 13px;
              line-height: 42px;
             i{
                margin-left: 10px;
                color: #ccc;
             }
            }
        }
    }
}
.mine-index-center{
    background: #fff;
    margin-top: 8px;
    p{
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        line-height: 38px;
        border-bottom: 1px solid #eee;
        span{
            float: right;
            color: #ccc;
            i{
                font-size: 14px;
            }
        }
    }
}
.mine-index-center-dl{
    display: -webkit-flex;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    dl{
        flex: 1;
        a{
            display: block;
            width:100%;
            color: #000;
             dt{
                i{
                    font-size: 26px;
                    color: #ccc;
                }
            }
        }
    }
}
.mine-index-bottom{
    padding-left: 10px;
    box-sizing: border-box;
    margin-top: 8px;
    background: #fff;
    ul{
        li{
            height: 39px;
            line-height: 39px;
            padding-right: 10px;
            border-bottom: 1px solid #eee;
            a{
                color: #000;
                b{
                    color: #ccc;
                    margin-right: 5px;
                    font-size: 20px;
                }
                span{
                    float: right;
                    i{
                        font-size: 14px;
                        color: #ccc;
                    }
                }
            }            
        }
    }
}
.mine-closeLogin{
    height: 34px;
    line-height: 34px;
    background: #fff;
    margin-top: 8px;
    text-align: center;
    font-size: 13px;
}
.image-group-mark{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: none;
    .big-mark{
        width: 100%;
        height: 100%;
        position: relative;
        .small-mark{
            width: 70%;
            height: 30%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #fff;
            padding-left: 10px;
            padding-right: 10px;
            box-sizing:border-box;
            p{
                line-height: 54px;
                text-align: center;
                font-size: 14px;
            }
            input{
                display: inline-block;
                width: 100%;
                height: 30px;
                border: none;
                background: #f7f7f7;
            }
            div{
                width: 100%;
                border-top: 1px solid #eee;
                position: absolute;
                bottom:0;
                left: 0;
                line-height: 37px;
                span{
                    width: 49%;
                    display: inline-block;
                    text-align: center;
                    &:first-child{
                        border-right: 1px solid #eee;
                     }
                }
            }
        }
    }
}
</style>
