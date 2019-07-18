<template>
    <section class="tab">
        <ul class="choice">
            <li v-for="item in tabList" :key="item.id" :tabindex="item.id">
                {{item.value}}
                <i  v-if="item.id===0" class="fa fa-caret-down"></i>
                <em></em>
            </li>
        </ul>
    </section>
</template>

<script>
import {fetchTab} from '@/api/service'
export default {
    name: 'tab',
    data () {
        return {
            tabList: []
        }
    },

    components: {},

    computed: {},

    created () {
        fetchTab().then(res => {
            console.log(res)
            this.tabList = res
        })
    },

    mounted () {
        
    },

    methods: {
    },

    watch: {}
}

</script>

<style lang='scss' scoped>
 @import '../../../styles/mixin';
.tab {
    @include wh(100%,2.5rem);
    padding-top: 3.5rem;
    background-color: #fff;
}
.choice {
    li {
        display: inline-block;
        position: relative;
        line-height: 2.5rem;
        @include wh(25%,2.5rem);
        @include font(1rem,#6E7B8B);
    }
    li:focus{
        @include font(1rem,$black);
        em {
            animation: test 0.1s linear;
            border: 1px solid #515151;
            width: 25%;
        }
    }
    li>em{
        bottom: 0;
        @include align;
    }
    @keyframes test {
        from{
            width: 0;
        }
        to{
            width: 25%;
        }
    }
}
</style>
