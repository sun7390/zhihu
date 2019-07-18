<template>
    <section class="funny-tab">
      <span class="text">发现更多感兴趣的人</span>
      <div class='image'>
        <img v-for="(item,key) in imageList" :src="item.url" :key="key" class="circle-square">
        <i class="fa fa-chevron-right"> </i>
      </div>
    </section>
</template>

<script>
import {fetchImage} from '@/api/service'
export default {
  data () {
    return {
      imageList: null
    }
  },

  components: {},

  computed: {},

  created () {
    fetchImage().then((res) => {
      console.log(res)
      this.imageList = res
    })
  },

  mounted () {},

  methods: {
  
  },

  watch: {}
}

</script>

<style lang='scss' scoped>
 @import '../../styles/mixin';
 .funny-tab {
    margin-top: 7rem;
    border-width: 0.5rem 0;
    border-style: solid;
    border-color: $gray;
    @include wh(100%,2.5rem);
    @include flex(space-between);
 }
 .text {
   display: inline-block;
   margin-left: 1rem;
   @include hl(2.5rem,2.5rem)
 }
 .image {
    padding-right: 0.5rem;
    @include hl(2.5rem,2.5rem)
 }
 .circle-square {
   border-radius:50%;
   position: relative;
   top: -0.1rem;
   overflow: hidden;
   vertical-align: middle;
   margin-left: -0.85rem;
   @include wh(2rem,2rem)
 }
 .fa {
   margin: 0 0.5rem;
 }
 </style>
