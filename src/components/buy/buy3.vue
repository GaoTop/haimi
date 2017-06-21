<template>
  <div class="buy3" >
    <h2>积分换券</h2>
    <div class="we-buy3">
      <dl v-for="i in weBuy.Virtual">
        <a>
          <dt><p><img src="http://img.haimi.com/Fj-5xwCHiJsuflbgeqHQCYym6snl" alt=""><em>￥<span>{{i.Amount.substr(0,2)}}</span></em></p></dt>
          <dd>
            <h4>{{i.Subject}}</h4>
            <p>{{i.Credit}}积分</p>
            <p class="grey">￥{{i.Price}}</p>
          </dd>
          </a>
      </dl>
    </div>
     <h2>积分换购</h2>
    <div class="we-buy3">
      <dl v-for="j in weBuy.CreditDeduct">
        <a>
          <dt><img :src="j.Pictures" alt=""></dt>
          <dd>
            <h4>{{j.Subject}}</h4>
            <p>￥{{j.CreditDeductAmount}}+{{j.Credit}}积分</p>
            <p class="grey">￥{{j.Price}}</p>
          </dd>
          </a>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buying',
  props: ['weBuy'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.buy3{
  h2{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    font-weight: 100;
    margin-bottom: -8px;
  }
}
.we-buy3{
  display: -webkit-flex;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  dl{
    width: 48.8%;
    background: #fff;
    margin-top: 8px;
    a{
      display: block;
      width: 100%;
      height: 100%;
      dd{
        padding:10px;
        box-sizing: border-box;
        p{
          color: #991f33;
        }
        .grey{
          color: #ccc;
          text-decoration: line-through;
        }
        h4{
          font-weight: 100;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: normal;
        }
      }
      dt{
        width: 100%;
        height: 156px;
        img{
          display: block;
          width: 100%;
        }
        p{
            position: relative;
            em{
            font-style: normal;
            position: absolute;
            top: 35%;
            left: 40%;
            color: #fff;
            span{
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}

</style>
