<template>
  <div class="inputBox shadow">
    <input
        type="text"
        v-model="inputText"
        placeholder="할일을 입력해 주세요"
        v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
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
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

</style>