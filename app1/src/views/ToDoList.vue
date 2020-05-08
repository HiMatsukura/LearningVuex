<template>
  <div id="app">
    <h1>チュートリアルToDoリスト</h1>

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
            <!-- 状態変更ボタンのモック -->
            <button>{{ item.state }}</button>
            </td>
            <td class="button">
            <!-- 削除ボタンのモック -->
            <button>削除</button>
            </td>
        </tr>
    </tbody>
  </table>
  

  <p>※削除ボタンはコントロールキーを押しながらクリックして下さい</p>

    <!-- 新規登録フォーム -->
    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
    <!-- コメント入力フォーム -->
    コメント <input type="text" ref="comment">
    <!-- 追加ボタンのモック -->
      <button type="submit">追加</button>
    </form>
    
    
  </div>
</template>

<script>

//import store from '../store'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex' 

export default {
    name: "ToDoList",
    computed: {
        /*todos () {
            return store.state.todos
        }*/
        ...mapState([
            "todos" // => store.state.todosをthis.todosと記述できる
        ]),
    },

    methods:{
        ...mapMutations({
            doAdd: "todolist/doAdd" // => this.$store.commit('doAdd')をthis.doAdd()と記述できる
            
        }),
        add(){
            this.doAdd();
        }
    }
};
    
</script>

<style lang="scss" scoped>

</style>