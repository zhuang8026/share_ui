<template>
  <button @click="clickBtn" :class="'type-' + type">
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    msg: {
      type: String,
      default: '人生漫漫, 喜樂無常',
    },
    radius: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    clickBtn() {
      alert('click, thx!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: auto;
  height: 40px;
  background: linear-gradient(to left, rgb(0, 166, 166), rgb(0, 128, 153));
  border-radius: 3px;
  margin: 0 10px;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  border: 2px solid rgb(0, 123, 146);
  transition: all 0.6s ease 0s;
}
button:hover {
  box-shadow: 0px 8px 12px 0 rgba(0, 0, 0, 0.4);
}
.type-0 {
}
.type-1 {
  background: #fff;
  color: rgb(0, 166, 166);
}
.type-2 {
  border-radius: 20px;
}
</style>
