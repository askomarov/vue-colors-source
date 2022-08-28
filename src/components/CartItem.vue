<template>
  <!-- cart-item--disabled -->
  <div class="cart-list__item cart-item" :class="{ 'cart-item--disabled': product.disabled }">
    <div class="cart-item__img-wrap">
      <img
        class="cart-item__img"
        :src="`img/products/${this.product.img}.png`"
        :srcset="`img/products/${this.product.img}@2x.png 2x`"
        width="96"
        height="96"
        :alt="product.title"
      />
    </div>
    <div class="cart-item__info">
      <h3 class="cart-item__name">{{ product.title }}</h3>
      <p class="cart-item__price">{{ product.price }} ₽</p>
    </div>
    <div class="cart-item__actions">
      <button
        class="cart-item__btn cart-item__btn--decrease"
        type="button"
        @click="onBtnDecreaseCounter"
      >
        <svg width="16" height="16" aria-hidden="true">
          <use href="#icon-minus"></use>
        </svg>
      </button>
      <div class="cart-item__quantity">{{ product.count }}</div>
      <button
        class="cart-item__btn cart-item__btn--increase"
        type="button"
        @click="onBtnIncreaseCounter"
      >
        <svg width="16" height="16" aria-hidden="true">
          <use href="#icon-add"></use>
        </svg>
      </button>
    </div>
    <button
      v-if="!product.disabled"
      class="cart-item__delete"
      type="button"
      @click="onClickDeleteProduct"
    >
      <svg width="24" height="24" aria-hidden="true">
        <use href="#icon-x"></use>
      </svg>
    </button>
    <button v-else class="cart-item__btn-repeat" type="button">
      <svg width="24" height="24" aria-hidden="true">
        <use href="#icon-repeat"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["increaseCounter", "decreaseCounter", "removeFromCart"]),
    onBtnDecreaseCounter() {
      this.decreaseCounter(this.product);
    },
    onBtnIncreaseCounter() {
      this.increaseCounter(this.product);
    },
    onClickDeleteProduct() {
      this.removeFromCart(this.product);
    },
  },
};
</script>

<style></style>
