<template>
  <VSwiper></VSwiper>
</template>

<script>
import VSwiper from "./VSwiper.vue";
export default {
  name: "VHero",
  components: {
    VSwiper,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero__swiper {
  display: none;
  @media (min-width: $width-tablet-h) {
    width: 100%;
    display: block;
    height: 560px;
    background-color: #3a4b46;
  }
}
.hero__slide-1 {
  background-image: url("@/assets/img/slider/slider-colors-img-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  // background-size: 2500px 1042px;
  @media (min-width: 1700px) {
    background-size: 100% auto;
    background-position: 0 -150px;
  }
}
.hero__content {
  display: inline-block;
  vertical-align: middle;
  color: $color-white;
  text-align: center;
  max-width: 472px;
  margin: 0 auto;
}
.hero__title {
  font-size: 4.8rem;
  margin-bottom: 24px;
  line-height: 88%;
}
.hero__text-feature {
  font-size: 1.06rem;
  line-height: 130%;
}
.swiper-slide {
  display: grid;
  align-items: center;
}
.swiper-pagination {
  display: inline-flex;
  gap: 8px;
  width: auto !important;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 13px 24px;
}
.swiper .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba($color: #fff, $alpha: 0.2);
  cursor: pointer;

  &:hover:not(.swiper-pagination-bullet-active) {
    background: rgba($color: #fff, $alpha: 0.7);
  }
}

.swiper .swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25%;
  z-index: 10;
  color: rgba($color: #fff, $alpha: 0.7);

  &:hover:not(.swiper-button-disabled) {
    color: #fff;
  }
}

.swiper-button-prev {
  left: 5%;
}
.swiper-button-next {
  right: 5%;
}
</style>
