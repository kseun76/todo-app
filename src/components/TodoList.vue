<template>
  <section>
    <transition-group name="list" tag="ul">
    <li v-for="(todoItem, index) in storedTodoItems"
        v-bind:key="index">
      <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
      <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
      <span class="removeBtn" type="button" @click="removeTodoItem(todoItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
      </span>
    </li>
    </transition-group>
  </section>
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
    removeTodoItem: function (todoItem, index) {
      //this.$emit('remove-todo', todo, index);
      this.$store.commit('removeOneItem', {todoItem, index});
    },
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index});
    }
  },
  computed: {
    storedTodoItems() {
      // return this.$store.state.todoItems;
      return this.$store.getters.getTodoItems;
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>