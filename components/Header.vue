<template>
  <div class="header" :class="[isSticky ? 'header-sticky' : 'relative']">
    <div class="main-nav">
      <button class="mobile-menu-btn lg:hidden">
        <IconsHamburger />
      </button>
      <button class="search-btn sm:hidden">
        <IconsSearch />
      </button>
      <nav class="hidden lg:block">
        <ul>
          <li class="font-bold">Shop</li>
          <li class="font-bold">Blog</li>
          <li class="font-bold">About</li>
        </ul>
      </nav>
    </div>

    <h1 class="logo-wrapper">
      <img
        src="/impact-190x41.webp"
        alt=""
        srcset="/impact-190x41.webp 190w, /impact-280x61.png 280w"
        width="280"
        height="61"
        sizes="95px"
        class="logo-image"
      />
      <img
        src="/impact_white-190x41.webp"
        alt=""
        srcset="/impact_white-190x41.webp 190w, /impact_white-280x61.png 280w"
        width="280"
        height="61"
        sizes="95px"
        class="logo-image logo-image--transparent"
      />
    </h1>

    <div class="secondary-nav">
      <button class="search-btn hidden sm:block">
        <IconsSearch />
      </button>
      <a href="#" class="profile-btn hidden sm:block">
        <IconsProfile />
      </a>
      <button class="cart-btn">
        <IconsCart />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isSticky: Boolean,
  },
});
</script>

<style scoped lang="scss">
.header {
  z-index: 10;
  top: 0;
  display: grid;
  grid-template: "main-nav logo secondary-nav" / 1fr auto 1fr;
  align-items: center;
  color: white;
  transition: background 0.5s, color 0.5s, transform 0.5s;
  height: $header-height;
  padding: 0 20px;

  @media (min-width: $sm) {
    height: $header-height-sm;
    padding: 0 32px;
  }

  @media (min-width: $md) {
    padding: 0 48px;
  }

  @media (min-width: $lg) {
    height: $header-height-lg;
    grid-template: "logo main-nav secondary-nav" / 1fr fit-content(100%) 1fr;
  }

  @media (min-width: $xl) {
    padding: 0 max(48px, calc((100% - $container-max-width) / 2));
  }
}
.main-nav {
  grid-area: main-nav;
  display: flex;
  gap: 1rem;

  nav ul {
    display: flex;

    @media screen and (min-width: $lg) {
      gap: 1.5rem;
    }
  }
}
.logo-wrapper {
  grid-area: logo;
  position: relative;

  img {
    height: 20px;
    width: auto;
  }

  .logo-image--transparent {
    position: absolute;
    top: 0;
  }
}
.secondary-nav {
  grid-area: secondary-nav;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: $sm) {
    display: flex;
    gap: 1.5rem;
  }
}
.header-sticky {
  position: sticky;
  color: rgb(26, 26, 26);
  background: rgb(240, 240, 240);
  animation: slide-down 1s both;

  .logo-image--transparent {
    opacity: 0;
    transition: 1s;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(calc(-1 * $header-height));
  }
  to {
    transform: translateY(0);
  }
}
</style>
