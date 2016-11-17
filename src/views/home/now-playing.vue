<template>
  <ul>
    <film-item v-for="film in films" :film="film"></film-item>
    <router-link to='/film/nowPlaying'><more-button>更多热门电影</more-button></router-link>
  </ul>
</template>
<style>

</style>
<script lang="babel">
  import FilmItem from '../../components/film-item.vue'
  import MoreButton from '../../components/more-button.vue'
  export default{
    props:{
      films:{
        type:Array,
        required:true
      }
    },
    components:{
      MoreButton,FilmItem
    }
  }
</script>
