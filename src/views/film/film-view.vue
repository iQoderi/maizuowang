<template>
  <section class="film-view">
    <div class="film-list-wrap">
      <div class="film-list-nav">
        <router-link
          class="now-playing"
          activeClass="choosing"
          :to="{path:'/film/nowPlaying'}">
          正在热映
        </router-link>
        <router-link
          class="coming-soon"
          activeClass="choosing"
          :to="{path:'/film/comingSoon'}">即将上映
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="less">
  .film-view {
    .film-list-wrap {
      padding-left: 15px;
      padding-right: 15px;
      background-color: #f9f9f9;
      width: 100%;
      position: absolute;
      min-height: 100%;
    }
    .film-list-nav {
      height: 46px;
      margin: 0 auto;
      border-bottom: solid #fe6e00 1px;
      .now-playing, .coming-soon {
        float: left;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #6a6a6a;
        cursor: pointer;
      }
      .choosing {
        color: #fe6e00;
        border-bottom: solid;
      }
    }
  }
</style>

<script>

</script>
