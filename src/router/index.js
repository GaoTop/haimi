import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import RecommendPage from '@/view/home/children'
import HomeIndex from '@/view/home'
import homePage from '@/view/home/children/home.vue'
import typePage from '@/view/type'
import minePage from '@/view/mine'
import shoppingCartPage from '@/view/shoppingCart'
import classPage from '@/view/type/children/typeClass.vue'
import brandPage from '@/view/type/children/typeBrand.vue'
import zoomPage from '@/view/zoom'
import shopDetail from '@/view/shopDetail'
import searchPage from '@/view/search'
import searchDetail from '@/view/searchDetail'
import viewOrder from '@/view/zoom/children/viewOrder'
import viewUser from '@/view/zoom/children/user'
import viewSc from '@/view/zoom/children/sc'
import viewArea from '@/view/zoom/children/viewArea'
import area from '@/view/zoom/children/area'
import viewJfshop from '@/view/zoom/children/viewJfshop'
import mallshop from '@/view/zoom/children/mallshop'
import detailshop from '@/view/zoom/children/detailshop'
import recordshop from '@/view/zoom/children/recordshop'
import viewPhone from '@/view/zoom/children/viewPhone'
import viewZuji from '@/view/zoom/children/viewZuji'
import viewKf from '@/view/zoom/children/viewKf'
import viewMoney from '@/view/zoom/children/viewMoney'
import Y from '@/view/zoom/children/Y'
import N from '@/view/zoom/children/N'
import K from '@/view/zoom/children/K'
import changePhone from '@/view/zoom/children/changePhone'





Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
},
routes: [
  {
    path: '/',
    name: 'Hello',
    redirect: "homeIndex",
    component: Hello,
    children:[
      {
        path: 'typePage',
        name: 'typePage',
        redirect: 'typePage/classPage',
        component: typePage,
        children: [
          {
            path: 'classPage',
            name: 'classPage',
            component: classPage
          },
          {
            path: 'brandPage',
            name: 'brandPage',
            component: brandPage
          }
        ]
      },
      {
        path: 'shoppingCartPage',
        name: 'shoppingCartPage',
        component: shoppingCartPage
      },
      {
        path: 'homeIndex',
        name: 'homeIndex',
        redirect: "homeIndex/RecommendPage/2",
        component: HomeIndex,
        children: [
          {
            path: 'RecommendPage/:id',
            name: 'RecommendPage',
            component: RecommendPage
          },
          {
            path: 'homePage/:id',
            name: 'homePage',
            component: homePage
          }
        ]
      }
    ]
  },
  {
    path: '/zoomPage',
    name: 'zoomPage',
    redirect: "zoomPage/viewUser",
    component: zoomPage,
    beforeEnter : ( to, from, next) => {
      var user = window.localStorage["userInfor"];
      if( !user ){
        next({ path: '/minePage', query:{"to":to.name} })
      }else{
        next()
      }
    },
  children: [
      {
        path:"viewUser",
        name:"viewUser",
        component: viewUser
      },
      {
        path:"viewOrder/:id", 
        name:"viewOrder",
        component: viewOrder
      },
      {
        path:"viewSc", 
        name:"viewSc",
        component: viewSc
      },
      {
        path:"viewArea", 
        name:"viewArea",
        component: viewArea
      },
      {
        path:"area", 
        name:"area",
        component: area
      },
      {
        path:"viewJfshop", 
        name:"viewJfshop",
        redirect: 'viewJfshop/mallshop',
        component: viewJfshop,
        children: [
         {
            path:"mallshop", 
            name:"mallshop",
            component: mallshop
          },
          {
            path:"detailshop", 
            name:"detailshop",
            component: detailshop
          },
          {
            path:"recordshop", 
            name:"recordshop",
            component: recordshop
          }
        ]
      },
      {
        path:"viewPhone", 
        name:"viewPhone",
        component: viewPhone
      },
      {
        path:"viewKf", 
        name:"viewKf",
        component: viewKf
      },
      {
        path:"viewZuji", 
        name:"viewZuji",
        component: viewZuji
      },
      {
        path:"viewMoney", 
        name:"viewMoney",
        redirect: 'viewMoney/Y',
        component: viewMoney,
        children: [
          {
            path:'Y',
            name: 'Y',
            component:Y
          },
          {
            path:'K',
            name: 'K',
            component:K
          },
          {
            path:'N',
            name: 'N',
            component:N
          }
        ]
      },
      {
        path:'changePhone',
        name: 'changePhone',
        component:changePhone
      }
    ]
  },
         
  {
    path: '/minePage',
    component: minePage
  },
  {
    path: '/shopDetail/:ProductID',
    name: 'shopDetail',
    component: shopDetail
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: searchPage
  },
  {
    path: '/searchDetail/:Keyword',
    name: 'searchDetail',
    component: searchDetail
  }
]
})
