import { createStore } from 'vuex'
const store = createStore({
    state:{
        
        todos:[
            {id:1, text : 'todo 1', done:true},
            {id:2, text : 'todo 2', done:false},
        ]
        
    },
    getters: {
        doneTodos(state){
            console.log(state);
            return state.todos.filter(todo=>todo.done===true)
        }
    }
})

export default store