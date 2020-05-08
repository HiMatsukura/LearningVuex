export const todolist = {

  namespaced: true,

  state: {
    todos:[],
  },
  mutations: {
    doAdd(state,{commentValue}){
        // { 新しいID, コメント, 作業状態 }
        // というオブジェクトを現在の todos リストへ push
        // 作業状態「state」はデフォルト「作業中=0」で作成
        state.todos.push({
            id: 1,//todoStorage.uid++,
            comment: commentValue,
            state: 0
        })
    },

  },
  actions: {
    doAdd ({commit} , {commentValue}) {
      commit("doAdd",{commentValue})
    }
  }
}