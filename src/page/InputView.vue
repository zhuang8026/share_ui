<template>
  <div class="home">
    <ui-input type="0"/>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput/index.vue'; // @ is an alias to /src

export default {
  name: 'ButtonView',
  components: {
    UiInput,
  },
  data() {
    return {
      radius: true,
    };
  },
};
</script>
