<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn" :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swipe',
    props: {
      lists: {
        type: Array,
        required: true
      }
    },
    mounted() {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay:true
      })
    },
  }
</script>

<style>
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>

