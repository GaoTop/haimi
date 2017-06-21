<template>
  <div class="buying" >
        <div class="we-buy">
          <dl v-for="i in weBuys">
             <router-link :to="{ name: 'shopDetail',params:{ProductID:i.ProductID} }">
                <dt><img v-lazy="i.PicturesWebp"/></dt> 
                <dd>
                  <h4>{{i.Subject}}</h4>
                  <p>￥{{i.FinalPrice}} <span><i @click="gouwuc" class="iconfont icon-gouwuche"></i></span></p>
                </dd>
                </router-link>
          </dl>
        </div>
        <div class="add-cars"  :style="{display:display}" @click='removeCar()'>
        </div>
        <detailmark v-show="cao" :haimi-data="weBuys"></detailmark>
    </div>
</template>

<script>
import detailmark from '@/view/shopDetail/component/detailMark.vue'
export default {
  name: 'buying',
  props: ['weBuys'],
  data () {
    return {
      display: 'none',
      cao:false
    }
  },
  methods: {
     gouwuc (ev) {
             if( this.display == 'none' ){
                this.display = '-webkit-box';
                 this.cao=true;
              }else{
                this.display = 'none';
                this.cao=false;
            }
        },
        removeCar () {
            if( this.display == 'none' ){
                this.display = '-webkit-box';
                this.cao=true;
              }else{
                this.display = 'none';
                this.cao=false;
            }
        }
  },
  components: {
    detailmark
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.we-buy{
  display: -webkit-flex;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  dl{
    width: 48.8%;
    background: #fff;
    margin-top: 8px;
    padding-bottom: 10px;
    box-sizing: border-box;
    a{
      color: #000;
      dt{
        width: 100%;
        height: 156px;
        img{
          width: 100%;
          display: block;
        }
      }
    }
      dd{
        padding-left: 5px;
        padding-right: 5px;
        box-sizing: border-box;
        h4{
          margin-top: 10px;
          width: 90%;
          overflow:hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 100;
          font-size: 13px;
        }
        p{
          margin-top: 3px;
          span{
            float: right;
            i{
              margin-right: 10px;
              font-size: 18px;
            }
          }
        }
      }
  }
}
.add-cars{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 102;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: none;
}
</style>
