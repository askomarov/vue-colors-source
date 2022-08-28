<template>
  <section class="catalog">
    <h2 class="visually-hidden">title for section</h2>
    <div class="catalog__wrapper container">
      <div class="catalog__catalog-content">
        <header class="catalog-content__catalog-header catalog-header">
          <h3 class="catalog-header__title">
            <span class="desktop-hidden">Краски</span>
            <span class="catalog-header__title-desktop"
              >{{ getFilteredProducts.length }} товаров</span
            >
          </h3>
          <button
            class="catalog-header__btn catalog-header__btn--filter"
            type="button"
            id="filter-btn"
            @click="onClickOpenFilters"
          >
            Фильтры
          </button>
          <!-- aria-expanded="true" - to opne dropdown-->
          <button
            class="catalog-header__btn catalog-header__btn--sort-select"
            type="button"
            :aria-expanded="selectOpened"
            @click="onBtnSortClick"
            id="sort-btn"
          >
            <span>Сначала недорогие</span>
            <svg width="8" height="5" aria-hidden="true">
              <use href="#icon-drop-arrow"></use>
            </svg>
          </button>
          <!-- hidden dropdown-->
          <form class="modal-menu sort-list-values open" id="sort-form">
            <div class="sort-list-values__item" v-for="input in getSortFilters" :key="input.id">
              <input
                class="visually-hidden sort-list-values__input"
                type="radio"
                name="sort-type"
                :id="input.id"
                :value="input.id"
                @change="onChangeSortForm(input)"
              />
              <label :for="input.id">
                <span>{{ input.label }}</span>
              </label>
            </div>
          </form>
        </header>
        <!-- catalog list-->
        <ul class="catalog-content__catalog-list catalog-list" v-if="getFilteredProducts.length">
          <ProductCard
            v-for="product in getFilteredProducts"
            :product="product"
            :key="product.id"
          />
        </ul>
        <div v-else class="catalog-content__empty-catalog">
          <p>..попробуй изменить параметры поиска</p>
          <h4>Ничего не найдено</h4>
        </div>
      </div>
      <!-- aside - bottom fixed on mobile-->
      <CatalogAside :isActive="this.isFilterOpened" @closeFilter="closeFilter" />
    </div>
  </section>
</template>

<script>
// const sortForm = (sortMetod) => {
//   switch (sortMetod) {
//     case "cheap":
//       break;
//     case "expansive":
//       break;
//     case "popular":
//       break;
//     case "newer":
//       break;
//   }
// };

import { mapGetters, mapActions } from "vuex";
import CatalogAside from "./CatalogAside";
import ProductCard from "./ProductCard";
export default {
  name: "VCatalog",
  components: {
    CatalogAside,
    ProductCard,
  },
  data() {
    return {
      selectOpened: false,
      products: [],
      isFilterOpened: false,
    };
  },
  computed: {
    ...mapGetters(["getFilteredProducts", "getIsModalOpen", "getSortFilters"]),
  },
  methods: {
    ...mapActions(["toggleModalOpen", "setSortType"]),
    onBtnSortClick() {
      this.selectOpened = !this.selectOpened;
      this.toggleModalOpen(!this.getIsModalOpen);
    },
    sortDropdwonMenu(evt) {
      const btnOpenSortModal = document.querySelector("#sort-btn");
      evt.preventDefault();
      let labelText = evt.target.textContent;
      btnOpenSortModal.querySelector("span").textContent = labelText;
      this.selectOpened = !this.selectOpened;
      this.toggleModalOpen(!this.getIsModalOpen);
    },
    onChangeSortForm(input) {
      const btnOpenSortModal = document.querySelector("#sort-btn");
      btnOpenSortModal.querySelector("span").textContent = input.label;
      this.setSortType(input.id);
      this.selectOpened = !this.selectOpened;
      this.toggleModalOpen(!this.getIsModalOpen);
    },
    onClickOpenFilters() {
      this.isFilterOpened = !this.isFilterOpened;
    },
    closeFilter() {
      this.isFilterOpened = !this.isFilterOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-content__empty-catalog {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 75%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  min-height: 170px;
  position: relative;
  
  &::after {
    content: "";
    width: 75px;
    height: 75px;
    display: block;
    background: url("../assets/img/smile-melt.svg") no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(0.3);
  }
}
</style>
