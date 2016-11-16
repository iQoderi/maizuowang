<template>
  <section class="content">
    <section class="content">
      <swiper class="my-swipe" :options="swiperOption">
        <swiper-slide class="silde" v-for="billboard in [{url:'www.baidu.com',imageUrl:'https://vuefe.cn/images/logo.png'}]">
          <a v-bind:href="billboard.url">
            <image-placeholder :src='billboard.imageUrl'
                               placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
          </a>
        </swiper-slide>
      </swiper>
      <div class="movie">
      </div>
    </section>
</template>

<style lang="less">

  .my-swipe {
    height: 9rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }

  .silde img {
    width: 100%;
  }

  .movie ul {
    padding-top: 18px;
  }
</style>
<script lang="babel">
  import ImagePlaceholder from '../../components/image-placeholder'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {matchGetters} from 'vuex';
  export default{
    computed: {
      swiperOption: {
        autoplay: 3000,
        autoHeight: true
      },
    },
    components: {
      swiper, swiperSlide,ImagePlaceholder
    }
  }


</script>
