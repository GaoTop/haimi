<template>
  <div id="nav">
    <div class="nav-list">
      <span v-for="item in navList.data">
        <router-link :to="item.Link+'/'+item.NavID" active-class="on" class="navs">
          {{item.Title}}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navList',
  data () {
    return {
      navList: []
    }
  },
  mounted () {
    this.getNav()
},
  methods: {
    getNav () {
      this.$http.get('/api/navList').then(function (response) {
        this.navList = response.data
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#nav{
  font-size: 14px;
  background: #fff;
  .nav-list{
      overflow-x: auto;
      display: inline-flex;
      display: -webkit-box;
      width: 100%;
      height: 30px;
      border-bottom: solid #ccc 1px;
    span{
      display: block;
      line-height: 30px;
      text-align: center;
      &:first-child{
        padding-left: 5px;
      };
      .navs{
        border-bottom: 4px solid #fff;
        padding-left: 10px;
        padding-right: 10px;
        display: block;
        height: 30px;
        color: #242424;
        font-size: 13px;
        position: relative;
        &.on:after{
          content: "";
          display: block;
          width: 80%;
          height: 3px;
          position: absolute;
          left: 10%;
          bottom: 0;
          background: #000;
        }
      }
    }
  }
}

</style>
