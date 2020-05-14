<template>
  <div id="app">
    <h1>チュートリアルToDoリスト</h1>

    <!-- 絞り込みラジオボタン -->
    <!--<label v-for="(label, key) in options" :key="key">
      <input type="radio"
        v-model="current"
        v-bind:value="label.value">{{label.label}}

    </label>
    ({{ todos.length }} 件中 {{ computedTodos.length }} 件を表示中 )-->

    <table>
      <!-- テーブルヘッダー -->
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <!-- todos[]の配列の要素だけ繰り返し表示 -->
        <tr v-for="item in todos" v-bind:key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.comment }}</td>
          <td class="state">
            <!-- 状態変更ボタン-->
            <button v-on:click="doChangeState({ item })">
              {{ labels[item.state] }}
            </button>
          </td>
          <td class="button">
            <!-- 削除ボタン -->
            <button v-on:click.ctrl="doRemove(item)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>※削除ボタンはコントロールキーを押しながらクリックして下さい</p>

    <!-- 新規登録フォーム -->
    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="add">
      <!-- コメント入力フォーム -->
      コメント <input type="text" v-model="commentValue" ref="comment" />
      <!-- 追加ボタンのモック -->
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "ToDoList",
  data: () => {
    return {
      commentValue: "",
      options: [
        { value: -1, label: "すべて" },
        { value: 0, label: "作業中" },
        { value: 1, label: "完了" }
      ]
    };
  },

  computed: {
    ...mapState({
      todos: ({ todolist: { todos } }) => todos // => store.state.todosをthis.todosと記述できる
    }),

    labels() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
      // キーから見つけやすいように、次のように加工したデータを作成
      // {0: '作業中', 1: '完了', -1: 'すべて'}
    }
  },

  methods: {
    ...mapActions({
      doAdd: "todolist/doAdd", // => this.$store.commit('doAdd')をthis.doAdd()と記述できる
      doChangeState: "todolist/doChangeState",
      doRemove: "todolist/doRemove"
    }),
    add() {
      if (!this.commentValue) {
        return;
      }
      this.doAdd({ commentValue: this.commentValue });
      this.commentValue = "";
    },

    change() {
      this.doChangeState({ item: this.item });
    },

    delete() {
      this.doRemove({ item: this.item });
    }
  }
};
</script>
<style lang="scss" scoped></style>
