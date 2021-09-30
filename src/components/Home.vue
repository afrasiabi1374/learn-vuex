<template>
    <div>
        <h2>
            home component
        </h2>
        <h4>
            {{count}}
        </h4>
        <button @click="increment">increment</button>
    </div>
</template>

<script>
// import {mapState} from 'vuex'
// import { computed } from '@vue/reactivity'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    //ravesh mamooli
    computed:{
        todos(){
            return this.$store.state.todos.filter(todo =>{
                    return todo.text
            })
        },

    },

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
    setup(){
        const store = useStore();
        const doneTodos = computed(() => store.getters.doneTodos)
        const getTodoById = computed(() => store.getters.getTodoById(2))
        const count = computed(()=>store.state.count)
        function increment(){
            store.commit('INCREMENT',2)
        }


        return{
            doneTodos,
            getTodoById,
            count,
            increment
        }
    }


}
</script>

<style>

</style>