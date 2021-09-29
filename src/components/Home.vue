<template>
  <h4>Home component</h4>
  <h5>{{ count }}</h5>
  <h5>{{name}}</h5>
</template>

<script>
import {mapState} from 'vuex'
// import { computed } from '@vue/reactivity'
// import {useStore} from 'vuex'
export default {
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // }

    computed:{
        // ...mapState(['count']),

        // ...mapState({
        //     count:'count'
        // }),

        // ...mapState(['count']),
        ...mapState({
            count : (state) => state.count
        }),
        name(){
            return 'ali'
        }
    }

    // setup(){
    //     const store = useStore()
    //     const count = computed(()=>store.state.count)
    //     return{
    //         store,
    //         count
    //     }
    // }
}
</script>

<style>

</style>