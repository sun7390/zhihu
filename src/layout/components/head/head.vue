<template>
    <header class="head-top">
        <section class="left">
            <slot name="search"></slot>
            <slot name="go-back"></slot>
                <input type="text" class="input" v-model="content">
        </section>
        <section class="right">
            <slot name="file"></slot>
        </section>
        <tab/>
    </header>
</template>

<script>
import tab from '../tab/tab'
export default {
    data () {
        return {
            content: ''
        }
    },

    components: {
        tab
    },

    computed: {},

    created () {},

    mounted () {},

    methods: {},

    watch: {}
}
</script>

<style lang='scss' scoped>
    @import '../../../styles/mixin';
    .head-top{
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 0.5rem;
        background-color: $white;
        z-index: 100;
        @include wh(100%,2.75rem);
    }
    .left {
        position: absolute;
        left: 0.75rem;
        border-radius: 0.6rem;
        background-color: $gray;
        justify-content: space-around;
        @include wh(85%,2.75rem);
        @include vertical;
    }
    .right {
        position: absolute;
        right: 0rem;
        @include wh(10%,2.75rem);
        @include vertical;
    }
    .input {
        background-color: $gray;
        border: none;
        outline: none;
        @include left-icon(3.5rem);
        @include wh(80%,2.65rem);
        @include font(1.5rem,$black);
    }
   
</style>
