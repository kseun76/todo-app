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
    <customModal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3>경고</h3>
      </template>
      <template #footer>
          <span @click="showModal = false">할 일을 입력하세요.
            <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
          </span>
      </template>
    </customModal>
  </div>
</template>
<script>
import CustomModal from "@/components/common/CustomModal.vue";

export default {
  components: {
    customModal: CustomModal
  },
  data() {
    return {
      inputText: '',
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.inputText !== '') {
        const item = this.inputText;
        this.$store.commit('addOneItem', item);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
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