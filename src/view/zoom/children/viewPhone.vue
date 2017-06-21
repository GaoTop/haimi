<template>
    <div class="viewPhone">
       <div class="view-phone">
           <img src="//m.haimi.com/static/images/web/default-avatar-square.png" alt="">
           <p>您的手机号码是:+86&nbsp;{{phone}}</p>
           <router-link to="changePhone">
             <button>确认更换</button>
           </router-link>  
       </div>
    </div>
</template>

<script>
export default {
    name: 'viewPhone',
    data () {
        return {
            phone:''
        }
    },
    created () {
        this.getPhone()
    },
    methods: {
        getPhone () {
            this.phone=JSON.parse(window.localStorage.getItem("userInfor")).userPhone;
            //console.log(this.phone.userPhone);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.view-phone{
    margin-top: 20px;
    img{
        display: block;
        width: 42px;
        height: 42px;
        margin: 0 auto;
    }
    p{
        text-align: center;
        font-size: 14px;
        margin-top: 20px;
    }
    button{
        display: block;
        margin: 20px auto;
        width: 95%;
        height: 34px;
        background: #991f33;
        color: #fff;
        border: none;
        font-size: 14px;
    }
}
</style>
