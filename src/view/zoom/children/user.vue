<template>
    <div class="view-user">
        <mineIndex></mineIndex>
        <footerNav></footerNav>
    </div>
</template>

<script>
import mineIndex from '../component'
import footerNav from '@/components/footerNav'
export default {
    name:'view-user',
    data () {
    return {}
    },
    components: {
        mineIndex,
        footerNav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
