<template>
  <div id="PwInfo">
    <div>
      <p>{{password}}</p>
      <p>请牢记您的空投密码</p>
    </div>
    
    <div>
      <p>下载安装mixin，对机器人说出密码即可领取空投</p>

      <a href="https://www.jianshu.com/p/65b12a44ad53">点击查看mixin下载注册教程</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PwInfo',
  data () {
    return {
     
    }
  },
  computed : {
    ...mapState(['password'])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#PwInfo{height: 100%}
#PwInfo div:nth-child(1){ position: absolute;left: 0;right: 0;top: 25%;margin: auto ;width: 50%;text-align: center;}
#PwInfo div:nth-child(1) p:nth-child(1){ color: #ce2f1c ;font-size: 34px;font-weight: bold}
#PwInfo div:nth-child(1) p:nth-child(2){ color: #ce2f1c ;font-size: 20px;}
#PwInfo div:nth-child(2){ position: absolute;left: 0;right: 0;top: 65%;margin: auto ;width: 50%;text-align: center;}

body{background-image: url(../assets/imgs/2.png); background-size: 100% 100%; position: relative;}

</style>
