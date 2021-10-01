const moduleA = {
    namespaced:true,
    state:{
        count:1,
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
export default moduleA