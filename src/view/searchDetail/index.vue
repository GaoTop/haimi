<template>
    <div class="m-wrapper homePage">
        <headerBar></headerBar>
        <ul class='detail-list'>
            <li>综合排序</li>
            <li>销量优先</li>
            <li>价格排序</li>
        </ul>
        <buys :we-buys="weBuys"></buys>
    </div>
</template>

<script>
    import headerBar from '@/view/home/component/header2.vue'
    import buys from '@/components/buy/buy2.vue'
    export default {
        name: 'hello',
        data () {
        return {
            weBuys: []
        }
    },
    components: {
        headerBar,
        buys
    },
    created () {
      let Keyword = this.$route.params.Keyword;
      let that = this;
      this.$http.jsonp( "http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject="+Keyword+"&Sort=&BrandID=&platform=WAP",
       {
           jsonp: '_callback'
        }
        ).then(function(res){
           let data = res.data.data;
           this.weBuys=data;
        },function(res){
            alert( res )
     })
     this.$http.jsonp("http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=&Sort=&BrandID="+Keyword+"&platform=WAP",
       {
           jsonp: '_callback'
        }
        ).then(function(res){
           let data2 = res.data.data;
           that.weBuys=that.weBuys.concat( data2 );
        },function(res){
            alert( res )
     })
    }     
}
</script>

<style scoped lang="less">
.detail-list{
    height: 34px;
    line-height: 34px;
    display:-webkit-flex;
    border:1px solid #eee;
    li{
        flex:1;
        text-align: center;
    }
}
</style>
