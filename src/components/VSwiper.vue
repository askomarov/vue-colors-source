<template>
  <swiper
    class="hero__swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :navigation="true"
    :pagination="{
      dynamicBullets: true,
      clickable: true,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide class="hero__slide-1">
      <div class="hero__content">
        <p class="hero__title">Краски</p>
        <p class="hero__text-feature">
          Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide class="hero__slide-1">
      <div class="hero__content">
        <p class="hero__title">Краски 2</p>
        <p class="hero__text-feature">
          Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide class="hero__slide-1">
      <div class="hero__content">
        <p class="hero__title">Краски 3</p>
        <p class="hero__text-feature">
          Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!
        </p>
      </div>
    </SwiperSlide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// Import Swiper styles
export default {
  name: "VSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>
<style lang="scss"></style>
