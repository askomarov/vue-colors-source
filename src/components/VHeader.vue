<template>
  <header class="header">
    <div class="header__wrapper container">
      <div class="header__start">
        <a class="header__logo" href="#"
          ><img src="@/assets/img/icon-logo.svg" width="99" height="21" alt="logo colors"
        /></a>
      </div>
      <div class="header__middle">
        <nav class="header__nav nav">
          <button
            class="nav__toggle"
            @click="onHeaderOpenBtnClick"
            type="button"
            :aria-expanded="this.getIsHeaderMenuOpened"
          >
            <span class="nav__toggle-icon"></span>
          </button>
          <div class="header__menu" :class="{ active: this.getIsHeaderMenuOpened }">
            <ul class="nav__wrapper">
              <li class="nav__item">
                <a class="nav__item-link nav__item-link--active link">Продукты</a>
              </li>
              <li class="nav__item"><a class="nav__item-link nav__item-link" href="#">Цвета</a></li>
              <li class="nav__item">
                <a class="nav__item-link nav__item-link" href="#">Вдохновение</a>
              </li>
              <li class="nav__item">
                <a class="nav__item-link nav__item-link" href="#">Советы</a>
              </li>
              <li class="nav__item">
                <a class="nav__item-link nav__item-link" href="#">Найти магазин</a>
              </li>
            </ul>
            <a class="header-actions__tel" href="tel:+74952217769"
              ><span>+7 (495) 221-77-69</span>
              <p class="hint-text">Заказать звонок</p></a
            >
            <div class="header-actions__menu header-actions-menu">
              <a class="header-actions-menu__link--search header-actions-menu__link" href="">
                <svg width="20" height="20" aria-hidden="true">
                  <use href="#icon-search"></use></svg></a
              ><a class="header-actions-menu__link--user header-actions-menu__link" href="">
                <svg width="22" height="22" aria-hidden="true">
                  <use href="#icon-user"></use></svg></a
              ><a class="header-actions-menu__link--favorites header-actions-menu__link" href="">
                <svg width="22" height="22" aria-hidden="true">
                  <use href="#icon-heart"></use></svg
              ></a>
            </div>
          </div>
        </nav>
      </div>
      <a
        class="header-actions__cart-link"
        :class="{ 'not-empty': getCartListLength }"
        @click.prevent="onCartOpenBtnClick"
      >
        <svg v-if="!getCartListLength" width="20" height="20"><use href="#icon-cart"></use></svg>
        <span v-else>{{ getCartListLength }}</span>
      </a>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "VHeader",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIsCartOpened", "getIsHeaderMenuOpened", "getCartListLength"]),
  },
  methods: {
    ...mapActions(["toggleCartMenu", "toggleHeaderMenu"]),
    onCartOpenBtnClick() {
      this.toggleCartMenu(!this.getIsCartOpened);
    },
    onHeaderOpenBtnClick() {
      this.toggleHeaderMenu(!this.getIsHeaderMenuOpened);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 5;
  background-color: transparent;

  @media (min-width: $width-tablet) {
    padding-top: 26px;
    padding-bottom: 30px;
  }
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;

  @media (min-width: $width-tablet-h) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 24px;
  }

  @media (min-width: $width-desktop) {
    grid-template-columns: minmax(130px, 279px) 1fr auto;
  }
}

@media (min-width: $width-tablet-h) {
  .header__wrapper {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.header__middle {
  order: -1;

  @media (min-width: $width-tablet-h) {
    order: initial;
  }
}

@media (max-width: $width-tablet-h) {
  .header__end {
    padding-right: 4rem;
  }
}
.header__logo {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: $width-desktop) {
    img {
      width: 131px;
      height: 26px;
    }
  }
}
.header__logo-text {
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
  color: #2d2d2d;
}

@media (min-width: $width-tablet-h) {
  .nav__wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

@media (max-width: $width-tablet-h) {
  .header__menu {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 5;
    background-color: rgba($color: #ecf7f3, $alpha: 0.7);
    backdrop-filter: blur(4px);
    visibility: hidden;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform $transition, opacity $transition, visibility $transition;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    &.active {
      padding: 1.5rem 0;
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }
  .nav__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.header__menu {
  @media (min-width: $width-tablet-h) {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 24px;
  }
}
.nav__item {
}

.nav__item-link {
  font-size: 1rem;
  padding: 5px 18px;
  display: block;
  line-height: 24px;

  &:hover {
    color: #000;
  }
  @media (min-width: $width-tablet-h) {
    font-size: 1rem;
  }
}

.nav__item-link--active {
  &::after {
    width: 21px;
  }
}
.nav__toggle {
  display: none;
}
.nav__toggle-icon {
  width: 24px;
  height: 2px;
  background-color: #000;
}
.nav__toggle[aria-expanded="true"] {
  gap: 4px;

  &::after,
  &::before {
    width: 50%;
  }
}

@media (max-width: $width-tablet-h) {
  .nav__toggle {
    display: grid;
    justify-content: stretch;
    gap: 4px;
    align-items: center;
    width: 24px;
    position: relative;
    background-color: transparent;
    transition: gap 0.3s ease 0s;

    &::after,
    &::before {
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: width 0.3s ease 0s;
    }
    &::after {
      justify-self: end;
    }
  }
}

.menu-button[aria-expanded="true"] {
}

.header__left {
}
.header-actions-menu__link {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-actions {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 24px;
  align-items: center;
}
.header-actions__tel {
  text-align: center;
  white-space: nowrap;
  &:hover {
    span {
      text-decoration: underline;
    }
  }
  @media (min-width: $width-tablet-h) {
    text-align: left;
  }
  @media (min-width: $width-desktop) {
    margin-right: 92px;
  }
}
.header-actions__menu {
}
.header-actions-menu {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
}

.header-actions__cart-link {
  font-weight: 500;
  font-size: 0.86rem;
  line-height: 1rem;
  border-radius: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  min-width: 25px;
  position: relative;

  svg {
    position: absolute;
  }
  
  &.not-empty {
    background-color: $primary-color;
  }
}
</style>
