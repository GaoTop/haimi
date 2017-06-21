<template>
  <div class="buying">
    <div class="buying-img" v-if="ListTitle.img">
      <img :src="ListTitle.img">
    </div>
    <h2>{{ListTitle.name}}</h2>
    <div class="we-buy">
      <dl v-for="item in ListCont">
        <router-link  :to="{ name: 'shopDetail',params:{ProductID:item.ProductID}}">
          <dt><img :src="item.PicturesWebp" alt=""></dt>
          <dd>
            <h4>{{item.Subject}}</h4>
            <p>￥{{item.FinalPrice}}</p>
          </dd>
        </router-link>
      </dl>
    </div>

  </div>
</template>

<script>
  import weBuy from "@/components/buy"
  export default {
    name: 'juHome',
    data () {
    return {
      ListTitle: [],
      ListCont: []
    }
  },
  created () {
    this.getListTitle()
  },
  methods: {
    getListTitle () {
       var ind=this.$route.params.id;
      this.$http.get('/api/listData').then(function (response) {
        this.ListTitle = response.data[ind]
      })
      this.$http.get('/api/listData2').then(function (response) {
        this.ListCont = response.data[ind].data[0].Products
      })
    }
  },
  watch : {
    '$route':'getListTitle'
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .buying-img{
    width: 100%;
  img{
    width: 100%;
    display: block;
  }
  }
  h2{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
    margin-bottom: -8px;
  }
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
      display: inline-block;
      width: 100%;
      color: #000;
      dt{
        width: 100%;
        img{
          width: 100%;
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
        }
      }
    }
  }
  }

</style>

