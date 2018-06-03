<template>
  <div id="GetPw">
    <div class="mes">
      <p>拆开红包获取空投密码</p>
      
      
    </div>
    <div class="btn" @click='handelGetPw()'></div>
    <div id="tutorial">
      <a href="https://www.jianshu.com/p/65b12a44ad53">点击查看mixin下载注册教程</a>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'GetPw',
  data () {
    return {
     
    }
  },
  mounted(){
    
  },
  methods : {
    handelGetPw(){
      alert(1)    
      this.$store.dispatch('action_pw',1);
      
      this.$router.push('/info');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#GetPw{height: 100%;width: 100%}
.mes{position: absolute;top: 55%;left: 0;right: 0;width: 60%;margin: auto;overflow: hidden;}
p{font-size: 16px;color: white;line-height: 20px ; text-align: center;}
#tutorial{ color: #ccc;text-decoration: none ;position: absolute; text-align: center;bottom: 20%;width: 100%}
body{background-image: url(../assets/imgs/3.png); background-size: 100% 100%; position: relative;}
.btn{width: 24%;position: absolute;bottom: 49%;left: 0;right: 0;margin:auto;height: 14%;border-radius: 50%}
</style>
