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

    // 状態変更の処理
    doChangeState(item) {
      item.state = item.state ? 0 : 1
    },

    // 削除の処理
    doRemove(state, item) {
      var index = state.todos.indexOf(item)
      state.todos.splice(index, 1)
    }

  },

  actions: {
    doAdd ({commit} , {commentValue}) {
      commit("doAdd",{commentValue})
    },

    doChangeState ({commit} , {item}) {
      commit("doChangeState",{item})
    },

    doRemove ({commit} , {item}) {
      commit("doRemove",{item})
    }

  },


  
}