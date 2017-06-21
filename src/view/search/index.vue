<template>
    <div class="searchPage">
        <headerBar></headerBar>
        <div class="searchCont">
            <h2>热搜宝贝</h2>
            <ul>
                <li v-for="i in searchData">
                    <router-link :to="{ name: 'searchDetail',params:{Keyword:i.Keyword} }">
                        {{i.Keyword}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerBar from '@/view/home/component/header2.vue'
export default {
    name: 'search',
    data ()
    {
        return {
            searchData: []
        }
    },
    components: {
        headerBar
    },
    mounted()
    {
        this.getsearchData()
    },
    methods: {
        getsearchData(){
            this.$http.get('/api/searchData').then(function (response) {
                let data = response.data
                this.searchData = data.extra.Hotwords
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.searchPage{
    width: 100%;
    height: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    .search-bar{
        background: #fff;
        .text{
            background: #f7f7f7;
        }
    }
}
.searchCont{
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    h2{
        font-size: 13px;
        font-weight: 100;
    }
    ul{
        display: -webkit-flex;
        flex-wrap: wrap;
        li{
            padding: 3px 6px;
            border: 1px solid #e5e5e5;
            margin-right: 10px;
            margin-top: 10px;
            a{
                color: #000;
            }
        }
    }
}
</style>
