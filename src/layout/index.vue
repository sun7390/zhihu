<template>
    <section id="layout">
        <head-top>
            <span slot="search" class="search" v-if="!toggle"> <i class="fa fa-search fa-2x"></i></span>
            <span slot="search" class="search" v-else> <i class="fa fa-arrow-left fa-2x"></i></span>
            <span slot="file" class="file"> <i class="fa fa-file-text-o fa-2x"></i></span>
        </head-top>
    </section>
</template>
<script>
import headTop from './components/head/head'
export default {
    name: 'layout',
    data () {
        return {
            toggle: false
        }
    },

    components: {
        headTop
    },

    computed: {},

    created () {},

    mounted () {},

    methods: {},

    watch: {}
}
</script>

<style lang='scss' scoped>
@import '../styles/mixin';
.search {
    @include left-icon(0.75rem)
}
.file {
    @include right-icon(0.3rem);
}
</style>
