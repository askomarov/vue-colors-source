<template>
  <SwiperSlide>
    <h2>slide 1</h2>
    <slot> name </slot>
  </SwiperSlide>
</template>

<script>
// Import Swiper Vue.js components
import { SwiperSlide } from "swiper/vue";
export default {
  name: "VSlide",
  components: {
    SwiperSlide,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
