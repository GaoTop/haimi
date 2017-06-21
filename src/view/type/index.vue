<template>
  <div id="type" class="type">
    <typeList></typeList>
    <router-view></router-view>
  </div>
</template>

<script>
import typeList from './component/typeList.vue'
export default {
  name: 'type',
  data () {
    return {}
  },
  components:{
    typeList
  }
}
</script>

<style scoped lang="less">
.type{
  margin-bottom: 50px;
}
</style>
