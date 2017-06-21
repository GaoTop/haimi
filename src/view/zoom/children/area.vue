<template>
    <div class="area">
        <div class="area-box">
            <div class="area-box-top">
                <input type="text" class="name" v-model="name" placeholder='收货人姓名'>
                <input type="text" class="tel" v-model="tel" placeholder='手机号码'>
            </div>
            <div class="area-box-bot">
                <p><input v-model="live" placeholder="所在地区"> <i class="iconfont icon-fanhui" @click="showMark"></i></p>
                <input type="text" v-model="xx" placeholder='详细地址'>
                <p @click="clicked = !clicked">设为默认地址 <span :class="clicked? 'blues':'reds'"><i class="iconfont icon-duihao"></i></span></p>
            </div>
            <button @click="addArea">添加地址</button>
        </div>
        <div class="area-mark"  :style="{display:display}" @click="showMark">
             <div class="please-select">
                <div class="please-select-top">
                    <p>取消</p>
                    <p>请选择</p>
                    <p>确定</p>
                </div>
                <div class="please-select-bot">
                    <div class="ProvCityContentList">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>北京</p>
                        <p>天津</p>
                        <p>河北</p>
                        <p>河南</p>
                        <p>上海</p>
                        <p>深圳</p>
                        <p>山西</p>
                        <p>广州</p>
                        <p>湖北</p>
                        <p>湖南</p>
                    </div>
                    <div class="ProvCityContentList">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>直辖区</p>
                        <p>县</p>
                    </div>
                    <div class="ProvCityContentList">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>东城区</p>
                        <p>西城区</p>
                        <p>朝阳区</p>
                        <p>海淀区</p>
                        <p>丰台区</p>
                        <p>房山</p>                        
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import remindBar from './remind.vue'
export default {
    name: 'area',
    data () {
        return {
            reds: false,
            display: 'none',
            name: '',
            tel: '',
            live:'',
            xx:'',
            clicked: true
        }
    },
    components: {
    },
    methods: {
        defaultArea () {
            this.reds=true;
        },
        showMark () {
            if( this.display == 'none' ){
                this.display = '-webkit-box';
            }else{
                this.display = 'none';
            }
        },
        addArea () {
            if(this.name == "" || this.tel == "" || this.live == "" || this.xx == "" ){
                alert("请填写完整收货地址信息")
            }else{
                alert("添加成功")
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.area{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    .area-box{
        width: 100%;
        height: 100%;
        position: relative;
        button{
            width: 100%;
            height: 37px;
            line-height: 38px;
            text-align: center;
            color: #fff;
            border:none;
            background: #991f33;
            position: absolute;
            bottom: 1px;
            font-size: 14px;
        }
    }
}
.area-box-top{
    input{
        display: inline-block;
        width: 100%;
        height: 39px;
        line-height: 39px;
        border: none;
        border-bottom: 1px solid #eee;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing:border-box;
    }
}
.area-box-bot{
    margin-top:10px;
    background: #fff;
    p{
        height: 39px;
        line-height: 39px;
        padding-right: 10px;
        padding-left: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        i{
            float: right;
            font-size: 13px;
        }
        span{
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #fff;
            float: right;
            border: 1px solid #666;
            margin-top: 10px;
            position: relative;
            i{
                position: absolute;
                left: -1px;
                top: -11px;
                font-size: 15px;
                color: #fff;
            }
        }
        .reds{
            background: #991f33;
        }
        input{
            width: 80%;
            height: 38px;
            display: inline-block;
            padding: 0;
        }

    }
    input{
        display: inline-block;
        width: 100%;
        line-height: 39px;
        border: none;
        border-bottom: 1px solid #eee;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing:border-box;
    }
}
.area-mark{
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
}
.please-select{
    position:fixed;
    bottom: 0;
    left: 0;
    z-index: 102;
    background: #fff;
    width: 100%;
    .please-select-top{
        background: #eee;
        line-height: 44px;
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        p{
            flex:1;
            text-align: center;
            font-size: 15px;
            color: red;
            &:nth-child(2){
                color: #000;
            }
        }
    }
    .please-select-bot{
        display: -webkit-flex;
        height: 250px;
        overflow: auto;
        .ProvCityContentList{
            flex:1;
            p{
                line-height: 35px;
                height: 35px;
                text-align: center;
                font-size: 15px;
            }
        } 
    }
}
</style>
