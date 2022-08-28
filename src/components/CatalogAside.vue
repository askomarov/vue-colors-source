<template>
  <form
    class="catalog__aside filter-wrap"
    :class="{ active: isActive }"
    @change="onChangeFilterForm"
  >
    <button
      type="button"
      class="filter-wrap__mobile-close-filter"
      arial-label="close-filter"
      @click="this.$emit('closeFilter', this.isActive)"
    />

    <div class="filter-wrap__item">
      <label class="rt-switch" for="new">
        <input
          class="rt-switch__input"
          type="checkbox"
          id="new"
          name="new"
          value="new"
          role="switch"
          checked
        />
      </label>
      <label class="filter-wrap__item-text-label" for="new">Новинки</label>
    </div>
    <div class="filter-wrap__item">
      <label class="rt-switch" for="availability">
        <input
          class="rt-switch__input"
          type="checkbox"
          id="availability"
          name="availability"
          value="availability"
          role="switch"
        />
      </label>
      <label class="filter-wrap__item-text-label" for="availability">Есть в наличии</label>
    </div>
    <div class="filter-wrap__item">
      <label class="rt-switch" for="contract">
        <input
          class="rt-switch__input"
          type="checkbox"
          id="contract"
          name="contract"
          value="contract"
          role="switch"
        />
      </label>
      <label class="filter-wrap__item-text-label" for="contract">Контрактные</label>
    </div>
    <div class="filter-wrap__item">
      <label class="rt-switch" for="exclusive">
        <input
          class="rt-switch__input"
          type="checkbox"
          id="exclusive"
          name="exclusive"
          value="exclusive"
          role="switch"
        />
      </label>
      <label class="filter-wrap__item-text-label" for="exclusive">Эксклюзивные</label>
    </div>
    <div class="filter-wrap__item">
      <label class="rt-switch" for="sale">
        <input
          class="rt-switch__input"
          type="checkbox"
          id="sale"
          name="sale"
          value="sale"
          role="switch"
        />
      </label>
      <label class="filter-wrap__item-text-label" for="sale">Распродажа</label>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CatalogAside",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["getSelectedFilters"]),
  },
  methods: {
    ...mapActions(["setFilters"]),
    onChangeFilterForm() {
      const filtersForm = document.querySelector(".filter-wrap");
      const checkedValues = [...filtersForm.querySelectorAll("input")]
        .filter((input) => input.checked)
        .map((input) => input.value);
      console.log(checkedValues);
      this.setFilters(checkedValues);
    },
  },
};
</script>

<style></style>
