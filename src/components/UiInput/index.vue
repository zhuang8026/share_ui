<template>
  <input type="text" :value="msg" />
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    msg: {
      type: String,
      default: '人生漫漫, 喜樂無常',
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: auto;
  height: 40px;
  border-radius: 3px;
  margin: 0 10px;
  padding: 0 10px;
  border: 2px solid rgb(0, 123, 146);
}
</style>
