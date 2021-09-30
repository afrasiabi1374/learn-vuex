import { createStore } from 'vuex'
import {INCREMENT} from "./mutationType";
const store = createStore({
    state:{
        count:1,
        todos:[
            {id:1, text : 'todo 1', done:true},
            {id:2, text : 'todo 2', done:false},
        ]
        
    },
    getters: {
        doneTodos(state){
            console.log(state);
            return state.todos.filter(todo=>todo.done===true)
        },
        getTodoById : (state) => (id) => {
            console.log('filter todo',state.todos.find(todo => todo.id === id));
            return state.todos.filter(todo => todo.id == id)
        }
    },
    mutations: {
        [INCREMENT](state,number){
            state.count+=number
        }
    }
})

export default store