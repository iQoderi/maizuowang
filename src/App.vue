<template>
  <div class="main">
    <div class="application-view">
      <router-view></router-view>
    </div>
    <div id="nprogress">
      <div class="spinner" role="spinner" v-show="loading">
        <div class="spinner-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}

</script>

<style lang="less">
  @import "assets/styles/icon.css";
  @import "assets/styles/reset.css";  .application-view{
    padding: 50px 0 0;
  }
  body{
    background-color: #ebebeb;
  }
  *{
    box-sizing: border-box;
  }
  img{
    width: 100%; transition: all 1.2s ease; opacity: 1;
  }
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
