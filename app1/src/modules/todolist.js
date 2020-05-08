export const todolist = {

  namespaced: true,

  state: {
    todos:[],
  },
  mutations: {
    doAdd(state){
        //ref で名前を付けておいた要素を参照
        var comment = this.$refs.comment
        //入力がなければ何もしないでreturn
        if(!comment.value.length){
            return
        }
        // { 新しいID, コメント, 作業状態 }
        // というオブジェクトを現在の todos リストへ push
        // 作業状態「state」はデフォルト「作業中=0」で作成
        state.todos.push({
            id: 1,//todoStorage.uid++,
            comment: comment.value,
            state: 0
        })
        //フォーム要素を空にする
        comment.value = ''
        
    },

  },
  actions: {}
}