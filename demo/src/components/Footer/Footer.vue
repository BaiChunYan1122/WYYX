<template>
  <footer class="footer_box">
    <ul class="footer_nav">
      <li  class="item" :class="{on:$route.path === '/home'}" @click="$router.replace('/')">
        <i class="icon" :class="$route.path === '/home'?'icon-home-on':'icon-home'"></i>
        <span class="text">首页</span>
      </li>
      <li  class="item" :class="{on:$route.path === '/categroy'}" @click="$router.replace('/categroy')">
        <i class="icon" :class="$route.path === '/categroy'?'icon-categroy-on':'icon-categroy'"></i>
        <span class="text">分类</span>
      </li>
      <li  class="item" :class="{on:$route.path === '/things'}" @click="$router.replace('/things')">
        <i class="icon" :class="$route.path === '/things'?'icon-things-on':'icon-things'"></i>
        <span class="text">识物</span>
      </li>
      <li  class="item" :class="{on:$route.path === '/shopcar'}" @click="$router.replace('/shopcar')">
        <i class="icon" :class="$route.path === '/shopcar'?'icon-shopcar':'icon-shopcar-on'"></i>
        <span class="text">购物车</span>
      </li>
      <li  class="item" :class="{on:$route.path === '/personal'}" @click="$router.replace('/personal')">
        <i class="icon" :class="$route.path === '/personal'?'icon-personal-on':'icon-personal'"></i>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_box
    position fixed
    bottom 0
    left 0
    width 100%
    border-top 1px solid red
    .footer_nav
      display flex
      height: 100px
      width 100%
      align-items center
      .item
        flex 1
        text-align center
        &.on
          color red
        .icon
          display inline-block
          vertical-align middle
          width 50px
          height 50px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png")
          background-size 49px 490px
          background-repeat no-repeat
        .icon-home
          background-position 0 -250px
        .icon-home-on
          background-position 0 -200px
        .icon-categroy
          background-position 0 -150px
        .icon-categroy-on
          background-position 0 -100px
        .icon-things
          background-position 0 -350px
        .icon-things-on
          background-position 0 -300px
        .icon-shopcar
          background-position 0 0
        .icon-shopcar-on
          background-position 0 -50px
        .icon-personal
          background-position 0 -450px
        .icon-personal-on
          background-position 0 -400px
        .text
          display block
          font-size 16px
          margin-top -3px
</style>
