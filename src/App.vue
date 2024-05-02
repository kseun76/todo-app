<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:add-todo="addTodoItem"></todo-input>
    <todo-list v-bind:todolist="todoItems" v-on:remove-todo="removeTodoItem"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter,
  },

  data() {
    return {
      todoItems: [],
    };
  },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created: function() {
    this.fetchTodoItems();
  },
  methods: {
    addTodoItem: function(value) {
      // 배열에 추가
      this.todoItems.push(value);
      // 저장소에 저장
      localStorage.setItem(value, value);
    },
    removeTodoItem: function(todo, index) {
      // 배열에서 삭제
      this.todoItems.splice(index, 1);
      // 저장소에서 삭제
      localStorage.removeItem(todo);
    },
    fetchTodoItems: function() {
      for (var i = 0; i < localStorage.length; i++) {
        var item = localStorage.key(i);
        this.todoItems.push(item);
      }
    },
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}
</style>