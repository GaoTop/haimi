<template>
  <div class="homeIndex">
    <bannerBar :swiper-slide="swiperSlide"></bannerBar>
    <menuList :menu-list="menuList"></menuList>
    <navImg :nav-img="navImg" :nav-imgs="navImgs"></navImg>
    <brandSection :brand-section="brandSection"></brandSection>
    <goodThing :good-thing="goodThing"></goodThing>
    <hottestBrands :hottest-brands="hottestBrands" :hottest-text="hottestText"></hottestBrands/>
    <hottestBrands :hottest-brands="hottestBrands2" :hottest-text="hottestText2"></hottestBrands/>
    <hottestBrands :hottest-brands="hottestBrands3" :hottest-text="hottestText3"></hottestBrands/>
    <buy :we-buy="weBuy"></buy>
  </div>
</template>

<script>
import headerBar from '../../home/component/header.vue'
import navBar from '../../home/component/navlist.vue'
import bannerBar from '@/components/swiper'
import menuList from '../../home/component/menuList.vue'
import navImg from '../../home/component/navImg.vue'
import brandSection from '../../home/component/brandSection.vue'
import goodThing from '../../home/component/goodThing.vue'
import hottestBrands from '@/components/hottestBrands'
import buy from '@/components/buy'
export default {
  name: 'homeIndex',
  data () {
    return {
      swiperSlide: [],
      menuList: [],
      navImg: [],
      navImgs: [],
      brandSection: [],
      goodThing: [],
      hottestBrands: [],
      hottestText: [],
      hottestBrands2: [],
      hottestText2: [],
      hottestBrands3: [],
      hottestText3: [],
      weBuy: []
    }
  },
  components: {
    headerBar,
    navBar,
    bannerBar,
    menuList,
    navImg,
    brandSection,
    goodThing,
    hottestBrands,
    buy
  },
  mounted () {
    this.getBanner()
    this.getBuy()
  },
  methods: {
    getBanner () {
      this.$http.get('/api/indexData').then(function (response) {
        this.swiperSlide = response.data.data[0].Records
        this.menuList = response.data.data[1].Records
        this.navImg = response.data.data[2].Records
        this.navImgs = response.data.data[3].Records
        this.brandSection = response.data.data[4]
        this.goodThing = response.data.data[5]
        this.hottestBrands = response.data.data[6]
        this.hottestText = response.data.data[7].Records
        this.hottestBrands2 = response.data.data[8]
        this.hottestText2 = response.data.data[9].Records
        this.hottestBrands3 = response.data.data[10]
        this.hottestText3 = response.data.data[11].Records
      })
    },
    getBuy () {
      this.$http.get('/api/buyData').then(function (response) {
        this.weBuy = response.data.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  font-size: 16px;
}
.homeIndex{
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  margin-bottom: 45px;
}
</style>
