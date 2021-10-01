<template>
    <div>
        <h2>
            home component
        </h2>
        <h4>
            count : {{count}}
            <br>
             double count : {{doubleCount}}
        </h4>
        <button @click="increment">increment</button>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {

    setup(){
        const store = useStore();
        const count = computed(()=>store.state.moduleA.count)
        const doubleCount = computed(()=>store.getters['moduleA/doubleCount'])
        function increment(){
            //store.commit('moduleA/increment',2)
            store.dispatch('moduleA/incrementAction',2)
        }

        return{
            store,
            count,
            doubleCount,
            increment
        }
    }
}
</script>
<style>
</style>