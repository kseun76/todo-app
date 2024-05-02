<template>
  <input
      type="text"
      v-model="inputText"
      v-on:keyup.enter="addTodo">
  <button v-on:click="addTodo">add</button>
</template>
<script>
export default {
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    addTodo: function () {
      var value = this.inputText;
      // localStorage.setItem(value, value);
      this.$emit('add-todo', value);
      this.clearInput();
    },
    clearInput: function () {
      this.inputText = '';
    },
  },
};

</script>
<style>
</style>