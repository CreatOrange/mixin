<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from 'axios'
import GetPw from '@/components/getPw'
import PwInfo from '@/components/pwInfo'

export default {
  name: 'App',
  components : {
    [GetPw.name] : GetPw,
    [PwInfo.name] : PwInfo
  },
}
</script>

<style>
*{ margin:0; padding:0; }
html,body{ height: 100%; font-size:14px; background: #ebebeb; }
li{ list-style:none; }
img{ display:block; }
#main{position: relative;height: 100%}

</style>
