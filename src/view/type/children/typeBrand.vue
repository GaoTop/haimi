<template>
  <div id="typeBrand">
    <div class="typeBrand-main">
        <dl v-for="item in getBrand">
          <router-link :to="{ name: 'searchDetail',params:{Keyword:item.CastID} }">
          <dt><img :src="item.PictureWebp"/></dt>
          <dd>
            <h2>{{item.SlideName}}</h2>
            <p>{{item.Description}}</p>
          </dd>
          </router-link>
        </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typeBrand',
  data () {
    return {
      getBrand: []
    }
  },
  mounted (){
    this.getTypeBrand()
  },
  methods: {
    getTypeBrand () {
      this.$http.get('/api/typeBrand').then(function(res){
        this.getBrand=res.data.data[0].Records
      })
    }
  }
}
</script>

<style scoped lang="less">
.typeBrand-main{
  width: 100%;
  display: -webkit-flex;
  flex-wrap: wrap;
  dl{
    width: 33.333%;
    a{
      color: #000;
      dt{
        width: 100%;
        img{
          width: 100%;
          display: block;
        }
      }
      dd{
        padding: 5px;
        h2{
          font-size: 12px;
          font-weight: 100;
          text-align: center;
        }
        p{
          padding-left: 5px;
          padding-right: 5px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
