<template>
  <div>
    <div style="height: 100vh; background: blue" />
    <div style="height: 100vh; background: blue" />
    <h1>{{ show }}</h1>
    <div style="position: fixed; top: 0; right: 0; z-index: 100; color: red">
      <h1>{{ state.x }}</h1>
      <h1>{{ state.y }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useScroll, ScrollPosition } from "~/composables/scroll";

export default defineComponent({
  props: {
    show: Boolean,
  },

  setup() {
    // props.show;
    const state = reactive({ x: 0, y: 0 });

    function onScroll({ x, y }: ScrollPosition) {
      console.log("testing this scroll thing");
      state.x = x;
      state.y = y;
    }

    useScroll(onScroll, 500);

    return {
      state,
    };
  },
});
</script>
