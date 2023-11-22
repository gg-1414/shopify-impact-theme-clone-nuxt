<template>
  <div style="height: 100vh; background: blue" ref="wrapper" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onIntersect } from "~/composables/onIntersect";

const observer = ref({});
const wrapper = ref({});

const onEnter = () => {
  console.log("Enter intersect");
};

const onExit = () => {
  console.log("Exit intersect");
};

onMounted(() => {
  observer.value = onIntersect(wrapper.value, onEnter, onExit, false, {
    threshold: 0.5,
  });
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>
