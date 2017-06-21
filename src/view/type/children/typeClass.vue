<template>
  <div id="typeClass">
    <div class="type-class-box" v-for="item in getClass">
        <div class="type-class-box-img" v-if="item.Records[0].PictureWebp.length!= 0">
          <img :src="item.Records[0].PictureWebp"/>
        </div>
        <ul v-else class="type-class-box-list">
          <li v-for="itemChild in item.Records">
            <router-link :to="{ name: 'searchDetail',params:{Keyword:itemChild.CastID} }">{{itemChild.SlideName}}
            </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typeClass',
  data () {
    return {
      getClass: []
    }
  },
  mounted (){
    this.getTypeClass()
  },
  methods: {
    getTypeClass () {
      this.$http.get('/api/typeClass').then(function(res){
        this.getClass=res.data.data
//        console.log(this.getClass)
      })
    }
  }
}
</script>

<style scoped lang="less">
.type-class-box-img{
  width: 100%;
  img{
    display: block;
    width: 100%;
  }
}
.type-class-box-list{
  padding: 5px 10px 15px 5px;
  box-sizing: border-box;
  display: -webkit-flex;
  flex-wrap: wrap;
  li{
    padding: 4px 10px;
    border: 1px solid #e5e5e5;
    margin-left: 10px;
    margin-top: 10px;
    color: #242424;
    a{
      color: #000;
    }
  }

}
</style>