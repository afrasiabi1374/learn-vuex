<template>
  <h1>todos</h1>
  <h5 v-for="todo in todos" :key="todo.id">
      {{todo.text}}
  </h5>
  <hr>
    <h2>done todos</h2>
  <h5 v-for="todo in doneTodos" :key="todo.id">
      {{todo.text}}
  </h5>

</template>

<script>
// import {mapState} from 'vuex'
// import { computed } from '@vue/reactivity'
// import {useStore} from 'vuex'
export default {
    //ravesh mamooli
    computed:{
        todos(){
            return this.$store.state.todos.filter(todo =>{
                    return todo
            })
        },
        doneTodos(){
            return this.$store.getters.doneTodos
        }
    }

    // computed:{
    //     //ravesh1
    //     // ...mapState(['count']),
    //     //ravesh2
    //     // ...mapState({
    //     //     count:'count'
    //     // }),
    //     //ravesh3
    //     // ...mapState(['count']),
    //     //ravesh4
    //     ...mapState({
    //         count : (state) => state.count
    //     }),
    //     name(){
    //         return 'ali'
    //     }
    // }


    //raveshe composition
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