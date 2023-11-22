<template>
  <div class="slideshow">
    <div class="slideshow_carousel relative" ref="wrapper">
      <SlideshowCarouselSlide
        v-for="(slide, index) in props.slides"
        :key="`slide-${index}`"
        :isSelected="currentSlide === slide.id"
        :imgSrc="slide.imgSrc"
        :kicker="slide.kicker"
        :title="slide.title"
        :buttonText="slide.buttonText"
        :buttonHref="slide.buttonHref"
        :buttonBgColor="slide.buttonBgColor"
        :buttonTextColor="slide.buttonTextColor"
        :contentAlignment="slide.contentAlignment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

interface Slide {
  id: number;
  imgSrc: string;
  kicker: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  buttonBgColor: string;
  buttonTextColor: string;
  contentAlignment: "left" | "right";
}

interface Props {
  slides: Slide[];
}

const props = defineProps<Props>();

let intervalId: ReturnType<typeof setInterval>;
let currentSlide = ref(0);
let slidesLength = props.slides.length;

onMounted(() => {
  intervalId = setInterval(() => {
    if (currentSlide.value >= slidesLength - 1) {
      currentSlide.value = 0;
    } else {
      currentSlide.value++;
    }
  }, 7000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.slideshow {
  // --slideshow-controls-color: 255 255 255;
  --slideshow-item-1-background: linear-gradient(
    127deg,
    rgba(66, 74, 48, 1) 11%,
    rgba(138, 157, 123, 1) 100%
  );
  --slideshow-item-2-background: linear-gradient(
    60deg,
    rgba(60, 65, 68, 1),
    rgba(23, 29, 33, 1) 98%
  );
  --slideshow-item-3-background: linear-gradient(
    90deg,
    rgba(49, 66, 105, 1) 20%,
    rgba(136, 159, 185, 1) 45%,
    rgba(183, 148, 131, 1) 98%
  );

  background: var(--slideshow-item-1-background);
  margin-block-start: calc(-1 * $header-height);
  padding: {
    top: $header-height;
    bottom: 2.5rem;
    left: max($container-gutter, (100% - $container-max-width) / 2);
    right: max($container-gutter, (100% - $container-max-width) / 2);
  }
  position: relative;

  @media (min-width: $sm) {
    margin-block-start: calc(-1 * $header-height-sm);
    padding: {
      top: $header-height-sm;
      bottom: 3rem;
      left: max($container-gutter-sm, (100% - $container-max-width) / 2);
      right: max($container-gutter-sm, (100% - $container-max-width) / 2);
    }
  }

  @media (min-width: $md) {
    padding: {
      bottom: 4rem;
      left: max($container-gutter-md, (100% - $container-max-width) / 2);
      right: max($container-gutter-md, (100% - $container-max-width) / 2);
    }
  }

  @media (min-width: $lg) {
    margin-block-start: calc(-1 * $header-height-lg);
    padding-top: $header-height-lg;
  }
}
.slideshow_carousel {
  position: relative;
}
</style>
