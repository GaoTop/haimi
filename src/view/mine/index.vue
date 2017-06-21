<template>
  <div id="mine">
    <div class="mine-box">
       <div class="mine-box-title">请输入手机号码验证码直接登录</div>
       <div class="mine-box-bottom">
          <div class="mine-box-phone">
              <span>手机号:</span><input type="text" v-model="txt" id="txt" @keyup="keyUp"/><span class="close" v-show="isShow" @click="del">&times;</span>
          </div>
          <div class="mine-box-code">
             <span>验证码:</span>
             <input type="text" v-model="code"/>
             <span class="code" v-if="senMsn" @click="sends">获取验证码</span>
            <span class="code" v-else>重新获取({{sendTime}})</span>
          </div>
          <div class="login" @click="login">登录</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt: [],
      code: '',
      isShow: false,
      sendTime: 60,
      senMsn: true,
      codeArr: ''
    }
  },
  methods:{
    //键盘事件
    keyUp () {
      if(this.txt.length != ""){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    },
    //点击删除
    del () {
      this.txt="";
      document.getElementById("txt").focus();
    },
    //验证手机号//验证码
    sends (){
      let testPhone=/^1[3|4|5|8][0-9]\d{4,8}$/;
      if(!(testPhone.test(this.txt))){
        alert("不是完整的11位手机号或者正确的手机号前七位");
        this.txt="";
        document.getElementById("txt").focus();
        return false;
      }else{
        this.senMsn = false;
        let codeArr=[];
        for(var i=0;i<4;i++){
          codeArr.push(this.randoms(0,9));
        }
        codeArr = codeArr.join("");
        console.log("%c"+codeArr,"font-size:24px");
        this.codeArr = codeArr;
        var that=this;
        let time=setInterval(function(){
          if (--that.sendTime == 0){
            clearInterval(time);
            that.sendTime= 60;
            that.senMsn = true;
          }
        },1000)
      }
    },
    //生成验证码随机数
    randoms (min,max){
      var random = Math.random();
      return Math.floor( ( max-min+1 )*random+min );
    },
    //点击登录
    login () {
      if(this.txt == "" && this.code == ""){
        alert("用户名或验证码不能为空")
      }else if(this.code != this.codeArr){
        alert("验证码不正确")
      }else{
        //ajax请求
        var userData={
          userName:"张三",
          userPhone:this.txt,
          userPhoto: "sss.jpg"
        }
        //本地存储
        var url = this.$route.query.to;
        window.localStorage.setItem("userInfor",JSON.stringify(userData))
        this.$router.push({name:url})
      }
    }
  }
}
</script>

<style scoped lang="less">
.mine-box{
  position: absolute;
  background: #fff;
  bottom: 0;
  top: 0;
  width: 100%;
}
.mine-box-title{
  line-height: 32px;
  background: #fff9f3;
  text-align: center;
  color: #991f33;
  font-size: 13px;
}
.mine-box-bottom{
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.mine-box-phone{
  width: 100%;
  height: 29px;
  line-height: 29px;
  display: -webkit-flex;
  border-bottom: 1px solid #ccc;
  margin-top: 15px;
  input{
    border:none;
    flex: 1;
    display: inline-block;
  }
  span{
      font-size:13px;
  }
}
.mine-box-code{
  width: 100%;
  height: 29px;
  line-height: 29px;
  display: -webkit-flex;
  border-bottom: 1px solid #ccc;
  margin-top: 15px;
  input{
    border:none;
    flex: 1;
    display: inline-block;
  }
  span{
    font-size:13px;
  }
  .code{
    color: #991f33;
    font-size: 12px;
  }
}
.login{
  width: 100%;
  text-align: center;
  line-height: 32px;
  background: #991f33;
  margin-top: 20px;
  color: #fff;
  font-size: 13px;
}
  .close{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ccc;
    text-align: center;
    line-height: 20px;
    color: #fff;
  }
</style>