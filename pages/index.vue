<template>
  <PageLayout :id="'home'" :showAnnouncementBar="true">
    <SlideshowCarouselWrapper :slides="page.slideshow" />
    <div style="height: 100vh; background: yellow" />
    <div style="height: 100vh; background: yellow" />
  </PageLayout>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  async asyncData({ $content }) {
    const page = await $content("home").fetch();

    return {
      page,
    };
  },
});
</script>
