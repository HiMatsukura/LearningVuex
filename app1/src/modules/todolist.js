export const todolist = {
  namespaced: true,

  state: {
    currentId: 0,
    todos: []
  },
  mutations: {
    doAdd(state, { commentValue }) {
      // { 新しいID, コメント, 作業状態 }
      // というオブジェクトを現在の todos リストへ push
      // 作業状態「state」はデフォルト「作業中=0」で作成
      state.todos.push({
        id: state.currentId + 1, //todoStorage.uid++,
        comment: commentValue,
        state: 0
      });
      state.currentId = state.currentId + 1;
    },

    // 状態変更の処理
    doChangeState(state, { item }) {
      state.todos = state.todos.map(_item => {
        if (_item.id === item.id)
          return { ...item, state: item.state === 0 ? 1 : 0 };
        return _item;
      });
    },

    // 削除の処理
    doRemove(state, item) {
      var index = state.todos.indexOf(item);
      state.todos.splice(index, 1);
    }
  },

  actions: {
    doAdd({ commit }, { commentValue }) {
      commit("doAdd", { commentValue });
    },

    doChangeState({ commit }, { item }) {
      commit("doChangeState", { item });
    },

    doRemove({ commit }, { item }) {
      commit("doRemove", { item });
    }
  }
};
