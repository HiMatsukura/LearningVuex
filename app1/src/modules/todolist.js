export const todolist = {

  namespaced: true,

  state: {
    todos:[],
    options: [
      { value: -1, label: 'すべて' },
      { value: 0,  label: '作業中' },
      { value: 1,  label: '完了' }
    ],
    // 選択している options の value を記憶するためのデータ
    // 初期値を「-1」つまり「すべて」にする
    current: -1 
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
    },

    labels(state) {
      return state.options.reduce(function(a, b) {
      return Object.assign(a, { [b.value]: b.label })
      }, {})
      // キーから見つけやすいように、次のように加工したデータを作成
      // {0: '作業中', 1: '完了', -1: 'すべて'}
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
    },

    labels ({commit}) {
      commit("labels")
    }


  },


  
}