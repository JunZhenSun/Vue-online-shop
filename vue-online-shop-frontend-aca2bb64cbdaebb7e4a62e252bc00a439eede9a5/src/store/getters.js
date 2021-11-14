export const productGetters = {
  allProducts(state) {
    return state.products;
  },
  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      // eslint-disable-next-line no-underscore-dangle
      return getters.allProducts.filter(product => product._id === id)[0];
    } else {
      return state.product;
    }
  },
};

export const manufacturerGetters = {
  allManufacturers(state) {
    return state.manufacturers;
  },
  manufacturerById: (state, getters) => (id) => {
    if (getters.allManufacturers.length > 0) {
      // eslint-disable-next-line no-underscore-dangle
      return getters.allManufacturers.filter(manufacturer => manufacturer._id === id)[0];
    } else {
      return state.manufacturer;
    }
  },
};
