<template>
    <div class="homeIndex">
      <div class="message" id="message">
          <span class="history">历史消息</span>
          <div id="xiaox"></div>
      </div>  
      <div class="send">
          <span><i class="iconfont icon-tupian"></i></span>
          <input v-model="msg" type="text" placeholder='输入新消息'>
          <p @click="sendMsg">发送</p>
      </div> 
    </div>
</template>

<script>
    import footerNav from '@/components/footerNav'
    import headerNav from './viewOrder.vue'
    export default {
        name: 'homeIndex',
        data () {
        return {
            msg:''
        }
    },
    components: {},
    mounted () {},
    methods: {
        sendMsg () {
            let sendBox=document.createElement("p");
            sendBox.className="sendMsg";
            let str="<span class='you'><i iconfont icon-tupian></i>"+this.msg+"</span>";
            sendBox.innerHTML=str;
            document.getElementById("xiaox").appendChild(sendBox); 
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.message{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #f3f3f3;
    .history{
        padding: 0 10px;
        background: #ccc;
        color: #fff;
        border-radius: 8px;
        position: fixed;
        top: 5px;
        left: 40%;
    }
}
.send{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
    box-sizing: border-box;
    background: #fff;
    display: -webkit-flex;
    span{
        display: block;
        width: 8%;
        height: 27px;
        line-height: 27px;
        text-align: center;
        margin-right: 10px;
        margin-left: 10px;
        i{
            font-size: 20px;
        }
    }
    input{
        flex:1;
        display: block;
        height: 25px;
        border: none;
        background: #f7f7f7;
    }
    p{
        width: 15%;
        height: 27px;
        line-height: 27px;
        background: #991f33;
        color: #fff;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>
