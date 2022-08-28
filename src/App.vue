<template>
  <SvgSprite />
  <div class="wrapper" :class="{ 'modal-open': this.getIsModalOpen }">
    <VHeader :class="{ active: this.getIsHeaderMenuOpened }" />
    <SiteCart :class="{ active: this.getIsCartOpened }" />
    <main class="main">
      <VBreadCrumbs />
      <VHero />
      <VCatalog />
    </main>

    <VFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SvgSprite from "./components/SvgSprite.vue";
import VHeader from "./components/VHeader.vue";
import SiteCart from "./components/SiteCart.vue";
import VBreadCrumbs from "./components/VBreadCrumbs.vue";
import VHero from "./components/VHero.vue";
import VFooter from "./components/VFooter.vue";
import VCatalog from "./components/VCatalog.vue";

export default {
  name: "App",
  components: {
    VHeader,
    SiteCart,
    VHero,
    SvgSprite,
    VBreadCrumbs,
    VCatalog,
    VFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIsCartOpened", "getIsHeaderMenuOpened", "getIsModalOpen"]),
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
}
</style>
