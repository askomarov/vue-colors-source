<template>
  <li class="catalog-list__item product-card" id="product0">
    <div class="product-card__wrap">
      <div class="product-card__img-wrap">
        <img
          class="product-card__img-main"
          :src="imgURL"
          :srcset="imgURL2X"
          width="156"
          height="156"
          :alt="product.title"
        /><img
          class="product-card__img-hover"
          src="../assets/img/products/product-img-hover.png"
          srcset="../assets/img/products/product-img-hover@2x.png 2x"
          width="156"
          height="156"
          :alt="product.title"
        />
      </div>
      <h4 class="product-card__title">{{ product.title }}</h4>
      <p class="product-card__price">{{ product.price }} ₽</p>
      <button
        type="button"
        class="product-card__btn-add-tocart"
        @click="onClickBtnProductToCart(product)"
        aria-label="add product to card"
      >
        <svg width="16" height="16" aria-hidden="true">
          <use href="#icon-add"></use>
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export { mapActions } from "vuex";
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgURL: `img/products/${this.product.img}.png`,
      imgURL2X: `img/products/${this.product.img}@2x.png 2x`,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["addProductToCart"]),
    onClickBtnProductToCart(product) {
      this.addProductToCart(product);
    },
  },
};
</script>

<style></style>
