<template>
  <div>
    <h4>Store textMessage 값 : {{$store.state.textMessage}}</h4>

    <todo-header></todo-header>
    <todo-input v-on:add-todo="addTodoItem"></todo-input>
    <todo-list v-bind:todolist="todoItems" v-on:remove-todo="removeTodoItem"></todo-list>
    <todo-footer v-on:removeAll="clearAll"></todo-footer>
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
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>