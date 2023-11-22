<template>
  <span></span>
</template>

<script setup>
const props = defineProps(["text"]);
// const splitTextByWord = props.text.split(" ");
const splitTextByWord = [];
// splitTextByWord.push()
const foundDash = props.text.indexOf("-");

console.log({ splitTextByWord });
console.log({ foundDash });
</script>
