<template>
  <section class="site-cart">
    <!-- cart header -->
    <header class="site-cart__header">
      <h2 class="site-cart__title">Корзина</h2>
      <button
        class="site-cart__close-cart"
        @click="onCartCloseBtnClick"
        type="button"
        aria-label="close cart"
      >
        <svg width="48" height="48" aria-hidden="true">
          <use href="#icon-close-big"></use>
        </svg>
      </button>
    </header>
    <!--  -->
    <div v-if="getCartListLength" class="site-cart__cart-actions">
      <span class="site-cart__items-count">{{ getCartListLength }} товара</span>
      <button class="site-cart__remove-all" type="button" @click="onClickResetcart">
        Очистить список
      </button>
    </div>
    <div v-else class="site-cart__empty">
      <h4>Добавьте товары в корзину</h4>
      <img src="../assets/img/products/product-img-1.png" width="150" height="150" alt="" />
    </div>
    <!-- cart list -->
    <div class="site-cart__list cart-list">
      <CartItem v-for="product in getCartList" :product="product" :key="product.id" />
    </div>
    <!-- cart footer-->
    <footer class="site-cart__footer">
      <span class="site-cart__total"
        >Итого<span class="site-cart__total-numbers">{{ getTotalCartPrice }}₽</span></span
      ><a class="site-cart__make-order" :class="{ disabled: !this.getCartListLength }"
        >Оформить заказ</a
      >
    </footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CartItem from "./CartItem";
export default {
  name: "SiteCart",
  components: { CartItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIsCartOpened", "getCartList", "getCartListLength", "getTotalCartPrice"]),
  },
  methods: {
    ...mapActions(["toggleCartMenu", "resetCart"]),
    onCartCloseBtnClick() {
      this.toggleCartMenu(!this.getIsCartOpened);
    },
    onClickResetcart() {
      this.resetCart();
    },
  },
};
</script>

<style lang="scss" scoped>
.site-cart__empty {
  text-align: center;
  img {
    filter: grayscale(0.75);
  }
}
</style>
