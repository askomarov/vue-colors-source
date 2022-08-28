import { createStore } from "vuex";
import {
  normalizeData,
  sortByDescendingPrice,
  sortByAscendingPrice,
  arraysContainSame,
  getNubmerFromPrice,
} from "../common/utils.js";
import mutations from "@/store/mutations";
const {
  IS_CART_OPENED,
  IS_HEADER_MENU_OPENED,
  IS_MODAL_OPENED,
  SET_FILTERS,
  SET_SORT_TYPE,
  ADD_TO_CART,
  RESET_CART,
  REMOVE_FROM_CART,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} = mutations;

const data = [
  {
    img: "product-img-1",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3300 ₽",
    type: ["new", "availability", "contract"],
    disabled: true,
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3400 ₽",
    type: ["availability", "sale"],
  },
  {
    img: "product-img-1",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3500 ₽",
    type: ["contract", "new"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3700 ₽",
    type: ["exclusive", "new"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3600 ₽",
    type: ["sale", "availability"],
  },
  {
    img: "product-img-1",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3800 ₽",
    type: ["new", "availability", "exclusive"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4000 ₽",
    type: ["availability"],
  },
  {
    img: "product-img-1",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "3900 ₽",
    type: ["contract"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4200 ₽",
    type: ["exclusive"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4100 ₽",
    type: ["sale"],
  },
  {
    img: "product-img-1",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4400 ₽",
    type: ["new"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4500 ₽",
    type: ["availability"],
  },
  {
    img: "product-img-1",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4300 ₽",
    type: ["contract"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4600 ₽",
    type: ["exclusive"],
  },
  {
    img: "product-img-2",
    title: "Краска Wallquest, Brownsone MS90102",
    price: "4700 ₽",
    type: ["sale"],
  },
];

export default createStore({
  state: {
    isModalOpen: false,
    isCartOpened: false,
    isHeaderMenuOpened: false,
    products: normalizeData(data),
    selectedFilters: ["new"],
    sortFilters: [
      {
        id: "cheap",
        label: "Сначала недорогие",
      },
      {
        id: "expansive",
        label: "Сначала дорогие",
      },
      {
        id: "popular",
        label: "Сначала популярные",
      },
      {
        id: "newer",
        label: "Сначала новые",
      },
    ],
    sortType: "cheap",
    cartList: [],
  },
  getters: {
    getSortType: ({ sortType }) => sortType,
    getSortFilters: ({ sortFilters }) => sortFilters,
    getSelectedFilters: ({ selectedFilters }) => selectedFilters,
    getProducts: ({ products }) => products,
    getIsModalOpen: ({ isModalOpen }) => isModalOpen,
    getIsCartOpened: ({ isCartOpened }) => isCartOpened,
    getIsHeaderMenuOpened: ({ isHeaderMenuOpened }) => isHeaderMenuOpened,
    getFilteredProducts(state) {
      if (state.selectedFilters.length === 0) {
        if (state.sortType === "cheap") {
          return sortByDescendingPrice(state.products);
        } else {
          return sortByAscendingPrice(state.products);
        }
      } else {
        const filteredProducts = state.products.filter(({ type }) => {
          return arraysContainSame(state.selectedFilters, type);
        });
        if (state.sortType === "cheap") {
          return sortByDescendingPrice(filteredProducts);
        } else {
          return sortByAscendingPrice(filteredProducts);
        }
      }
    },
    getCartList: ({ cartList }) => cartList,
    getCartListLength: ({ cartList }) => cartList.length,
    getTotalCartPrice({ cartList }) {
      return cartList.reduce((acc, product) => {
        return acc + getNubmerFromPrice(product.price) * product.count;
      }, 0);
    },
  },
  mutations: {
    [IS_CART_OPENED](state, bool) {
      state.isCartOpened = bool;
    },
    [IS_MODAL_OPENED](state, bool) {
      state.isModalOpen = bool;
    },
    [IS_HEADER_MENU_OPENED](state, bool) {
      state.isHeaderMenuOpened = bool;
    },
    [SET_FILTERS](state, value) {
      state.selectedFilters = value;
    },
    [SET_SORT_TYPE](state, value) {
      state.sortType = value;
    },
    [ADD_TO_CART](state, payload) {
      let addedProductNew = state.cartList.find((product) => product.id === payload.id);
      if (!state.cartList.length || !addedProductNew) {
        payload["count"] = 1;
        state.cartList.push(payload);
      } else {
        addedProductNew.count += 1;
      }
    },
    [REMOVE_FROM_CART](state, payload) {
      state.cartList.map((item) => {
        if (item.id === payload.id) {
          state.cartList.splice(state.cartList.indexOf(item), 1);
        }
      });
    },
    [RESET_CART](state) {
      state.cartList = [];
    },
    [INCREASE_COUNTER](state, payload) {
      state.cartList.map((item) => {
        if (item.id === payload.id) {
          item.count++;
        }
      });
    },
    [DECREASE_COUNTER](state, payload) {
      state.cartList.map((item) => {
        if (item.id === payload.id) {
          item.count -= 1;
          if (item.count === 0) {
            state.cartList.splice(state.cartList.indexOf(item), 1);
          }
        }
      });
    },
  },
  actions: {
    toggleModalOpen({ commit }, bool) {
      commit(IS_MODAL_OPENED, bool);
    },
    toggleCartMenu({ commit, dispatch }, bool) {
      dispatch("toggleModalOpen", bool, { root: true });
      commit(IS_CART_OPENED, bool);
    },
    toggleHeaderMenu({ commit }, bool) {
      commit(IS_HEADER_MENU_OPENED, bool);
    },
    setFilters({ commit }, data) {
      commit(SET_FILTERS, data);
    },
    setSortType({ commit }, data) {
      commit(SET_SORT_TYPE, data);
    },
    addProductToCart({ commit }, payload) {
      commit(ADD_TO_CART, payload);
    },
    removeFromCart({ commit }, payload) {
      commit(REMOVE_FROM_CART, payload);
    },
    increaseCounter({ commit }, payload) {
      commit(INCREASE_COUNTER, payload);
    },
    decreaseCounter({ commit }, payload) {
      commit(DECREASE_COUNTER, payload);
    },
    resetCart({ commit }) {
      commit(RESET_CART);
    },
  },

  modules: {},
});
