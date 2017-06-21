<template>
    <div class="view-sc">
        <div class="view-sc-box">
            <router-link to="/homeIndex/RecommendPage/2">
                <img src="data:image/png;base64,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">
                <p><span>去首页逛逛</span></p>
            </router-link>
        </div> 
    </div>
</template>

<script>
    import footerNav from '@/components/footerNav'
    import headerNav from './viewOrder.vue'
    export default {
        name: 'view-sc',
        data () {
        return {}
    },
    components: {},
    mounted () {},
    methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.view-sc{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #f3f3f3;
    .view-sc-box{
        width: 100%;
        height: 100%;
        a{
            display: block;
            margin-top: 40%;
            color: #000;
            img{
                width: 30%;
                display: block;
                margin:0 auto;
            }
            p{
                margin-top: 15px;
                text-align: center;
                 span{
                    padding: 3px 5px;
                    border: 1px solid #000;
                }
            }
           
        }
    }
}
</style>
