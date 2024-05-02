<template>
  <ul>
    <li v-for="(todoItem, index) in todolist"
        v-bind:key="index">
      <span>{{ todoItem }}</span>
      <button
          v-on:click="removeTodoItem(todoItem, index)">remove
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['todolist'],
  data() {
    return {
      todoItems: [],
    }
  },
  methods: {
    removeTodoItem: function (todo, index) {
      console.log('deleted', todo, index);
      this.$emit('remove-todo', todo, index);
    }
  }
}
</script>
<style>
.todo-enter-active,
.todo-leave-active {
  transition: all 1s;
}

.todo-enter, .todo-leave-to /* .list-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}
</style>