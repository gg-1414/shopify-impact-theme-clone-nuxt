<template>
  <div class="slideshow_slide" :class="isSelected && 'is-selected'">
    <div
      :class="`content rounded-xl overflow-hidden align-${contentAlignment}`"
    >
      <img :src="imgSrc" class="absolute" />
      <div :class="`text_block text-white text-center`">
        <p>{{ kicker }}</p>
        <h1>
          <span>{{ title }}</span>
        </h1>
        <a :href="buttonHref" class="button">{{ buttonText }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isSelected: boolean;
  imgSrc: string;
  kicker: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  buttonBgColor: string;
  buttonTextColor: string;
  contentAlignment: "left" | "right";
}

const props = defineProps<Props>();

const theme = {
  buttonBgColor: props.buttonBgColor,
  buttonTextColor: props.buttonTextColor,
};
</script>

<style lang="scss" scoped>
.slideshow_slide {
  position: relative;

  &:not(.is-selected) {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &.is-selected {
    z-index: 1;
    opacity: 1;
    visibility: visible;

    .content {
      img {
        animation: image 3s;
      }
      h1 {
        span {
          animation: heading 0.75s both;
        }
      }
      p {
        animation: buttonSmallText 2s;
      }
      .button {
        animation: buttonSmallText 2s;
      }
    }
  }
}

.content {
  $gap: 1.25rem;

  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
  gap: $gap;
  grid-template: 0 1fr 0 / 0 calc(100% - $gap * 2) 0;

  @media screen and (min-width: $sm) {
    $gap: 3rem;

    gap: $gap;
    grid-template: 0 1fr 0 / 0 calc(100% - $gap * 2) 0;
  }

  @media screen and (min-width: $md) {
    $gap: 4rem;

    gap: $gap;
    grid-template: 0 1fr 0 / 0 calc(100% - $gap * 2) 0;

    &.align-left {
      place-items: center end;

      .text_block {
        @media screen and (min-width: $sm) {
          text-align: start;
          place-self: center start;
        }
      }
    }
    &.align-right {
      place-items: center start;

      .text_block {
        @media screen and (min-width: $sm) {
          text-align: end;
          place-self: center end;
        }
      }
    }
  }

  @media screen and (min-width: $xl) {
    min-height: 640px;
  }

  .text_block {
    grid-area: 2 / 2 / auto / span 1;
    z-index: 5;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: 500;
    margin-top: 1rem;
    letter-spacing: -0.025em;
    clip-path: inset(0 0 0 0);

    span {
      display: inline-block;
      transform: translateY(150%) rotate(15deg);
      opacity: 0;
    }

    @media screen and (min-width: $sm) {
      font-size: 3rem;
      text-align: right;
      margin-top: 1.5rem;
    }

    @media screen and (min-width: $lg) {
      margin-top: 2rem;
    }
  }

  p {
    font-weight: 700;
  }

  .button {
    opacity: 1;
    background: v-bind("theme.buttonBgColor");
    color: v-bind("theme.buttonTextColor");
    border-radius: 3.75rem;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    font-weight: 700;
    line-height: 1.6;
    margin-top: 1.5rem;
    display: inline-block;

    @media screen and (min-width: $sm) {
      font-size: 1rem;
      padding: 1.075rem 2.5rem;
      margin-top: 1.5rem;
    }

    @media screen and (min-width: $lg) {
      margin-top: 2rem;
    }
  }
}

@keyframes image {
  0% {
    transform: scale(1.1);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes buttonSmallText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes heading {
  0% {
    transform: translateY(150%) rotate(15deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) rotate(0deg);
    opacity: 1;
  }
}
</style>
