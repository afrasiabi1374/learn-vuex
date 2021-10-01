import { createStore } from 'vuex'
import moduleA  from './modules/moduleA'
  
const moduleB = {
    namespaced:true,
    state:{
        count:90
    },
    getters: {
        doubleCount(state){
            return state.count*2
        }
    },
    mutations: {
        increment(state,number){
            if (number) {
                state.count+=number
            }else{
                state.count+=1
            }
        }
    },
    actions:{
        incrementAction(contex,number){
            contex.commit('increment',number);
        }
    }
}
const store = createStore({
    // state:{
    //     count:1,
    //     todos:[
    //         {id:1, text : 'todo 1', done:true},
    //         {id:2, text : 'todo 2', done:false},
    //     ]
        
    // },
    // getters: {
    //     doneTodos(state){
    //         console.log(state);
    //         return state.todos.filter(todo=>todo.done===true)
    //     },
    //     getTodoById : (state) => (id) => {
    //         console.log('filter todo',state.todos.find(todo => todo.id === id));
    //         return state.todos.filter(todo => todo.id == id)
    //     }
    // },
    // mutations: {
    //     increment(state,number){
    //         if (number) {
    //             state.count+=number
    //         }else{
    //             state.count+=1
    //         }
    //     }
    // },
    // actions:{
    //     incrementAction(contex,number){
    //         contex.commit('increment',number);
    //     }
    // }

    modules: {
        moduleA,
        moduleB
    }
})
export default store