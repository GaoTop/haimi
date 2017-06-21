<template>
    <div class="view-money">
        <div class="bonus-text">
            <p>提醒</p>
            <p>1、红包/优惠券每个订单只可使用一个</p>
            <p>2、红包/优惠券金额大于订单应付金额时，差额不予退回。</p>
            <p>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回（特殊未指定的除外）</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'view-money',
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
.bonus-text{
    padding: 10px 20px;
    background: #fff;
    margin-top: 10px;
    box-sizing: border-box;
    p{
        color: #666;
        line-height: 20px;
    }
}
</style>
