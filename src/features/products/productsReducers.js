export const changeFilterReducer = (state, action) => {
  state.filter = action.payload;
};

export const changeSearchReducer = (state, action) => {
  state.search = action.payload;
};

export const addCartReducer = (state, action) => {
  state.cart.push(action.payload);
};

export const updateCartReducer = (state, action) => {
  const [id, count] = action.payload;
  let findedProduct = state.cart.find((pr) => pr.id == id);
  findedProduct.qnt = count;
};

export const removeCartReducer = (state, action) => {
  state.cart = state.cart.filter((obj) => obj.id !== action.payload);
};

export const CleanCartReducer = (state, action) => {
  state.cart = action.payload;
};

export const addFavoriteReducer = (state, action) => {
  state.favorites.push(action.payload);
};

export const removeFavoriteReducer = (state, action) => {
  state.favorites = state.favorites.filter((obj) => obj.id !== action.payload);
};
