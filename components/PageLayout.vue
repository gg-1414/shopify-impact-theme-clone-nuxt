<template>
  <main :id="id">
    <AnnouncementBar v-if="showAnnouncementBar" />
    <Header :isSticky="isHeaderSticky" />
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive, watch, onMounted } from "vue";
import { useScroll, ScrollPosition } from "~/composables/scroll";

const scrollPosition = reactive({ x: 0, y: 0 });
const vh = ref(0);
const isHeaderSticky = ref(false);

const onScroll = ({ x, y }: ScrollPosition) => {
  scrollPosition.x = x;
  scrollPosition.y = y;
};

useScroll(onScroll, 500);

watch(scrollPosition, function () {
  if (scrollPosition.y === 0) {
    isHeaderSticky.value = false;
  }

  if (scrollPosition.y > vh.value / 2) {
    isHeaderSticky.value = true;
  }
});

defineProps({
  id: {
    type: String,
    default: "",
  },
  showAnnouncementBar: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  vh.value = window.innerHeight;
});
</script>
