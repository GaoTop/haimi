<template>
    <div class="comment">
        <h2>宝贝评分
            <i class="iconfont icon-xingxing1"></i>
            <i class="iconfont icon-xingxing1"></i>
            <i class="iconfont icon-xingxing1"></i>
            <i class="iconfont icon-xingxing1"></i>
            <i class="iconfont icon-xingxing1"></i>
            <i>{{commentScore.substr(0,3)}}分</i>
        </h2>
        <div class="comment-box" v-for="item in commentData">
            <div class="comment-box-child">
                <div class="comment-picture"><img :src="item.Buyer.Avatar" alt=""></div>
                <div class="comment-name">{{item.Buyer.NickName}}</div>
                <div class="comment-time">{{item.CreateTime.substr(5,11)}}</div>
            </div>
            <div class="comment-box-childs">
                <div class="comment-content">{{item.BuyerNote}}</div>
                <div class="comment-pictures" v-if="item.BuyerPictures">
                    <img v-for="(v,index) in item.BuyerPictures.split(',')"  ref='img' :src="v" @click="lookImage(index)">
                </div>
            </div>
        </div>
        <h3>全部评价({{commentScore.substr(3,5)}})</h3>
        <div class="image-group-mark"  :style="{display:display}" @click="lookImages()">
           <Swiper ref="swiper" :swiper-slide="SwiperSlide" zoom="true"></Swiper>
        </div>
    </div>
</template>

<script>
import Swiper from '@/components/swiper'
export default {
    name: 'hello',
    props: ['commentData','commentScore'],
    data () {
        return {
         'SwiperSlide' : [],
         'display' : 'none'
        }
    },
    components: {
        Swiper
    },
    updated () {
        if( this.display != 'none' ){
            this.$refs.swiper.swiperObj.update();
        }
    },
    methods: {
        lookImage (index) {
            this.SwiperSlide=[];
            let that = this;
            this.commentData.forEach(function(item,index){
                that.SwiperSlide.push({
                    PictureWebp: item.BuyerPictures.split(',')
                })
            })
            this.$refs.swiper.swiperObj.slideTo(index,0,false);
            if( this.display == 'none' ){
                this.display = '-webkit-box';
            }else{
                this.display = 'none';
            }
        },
        lookImages () {
            this.SwiperSlide=[];
            if( this.display == 'none' ){
                this.display = '-webkit-box';
            }else{
                this.display = 'none';
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.comment{
    margin-top: 10px;
    background: #fff;
    h2{
        padding: 13px 10px;
        font-size: 12px;
        font-weight: 100;
        border-bottom: 1px solid #eee;
        i{
            font-style: normal;
            color: #B7233B;
        }
    }
    h3{
        text-align: center;
        padding: 13px 10px;
        font-size: 12px;
        font-weight: 100;
        border-bottom: 1px solid #eee;
    }
}
.comment-box{
    padding: 10px;
    border-bottom: 1px solid #eee;
    .comment-box-child{
        display: -webkit-flex;
        .comment-picture{
            width: 22px;
            height: 100%;
            img{
                width: 22px;
                display: block;
            }
        }
        .comment-name{
            margin-left: 8px;
            flex: 1;
        }
        .comment-time{
            color: #ccc;
        }
    }
    .comment-content{
        padding-left: 15px;
        margin-top: 10px;
    }
    .comment-pictures{
        margin-top: 10px;
        width: 100%;
        img{
            width: 40px;
            height: 40px;
            display: inline-block;
            margin-right: 10px;
        }
    }
}
.swiper-container{
    width:100%;
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
    .hh{
        width: 100%;
        height: 50%;
        img{
            display: block;
            width: 100%;
        }
    }
  }

</style>
