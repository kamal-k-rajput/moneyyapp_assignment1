const initialStore = {
  products: [{}],
  cartItems: [{}],
};

function rootReducer(store = initialStore, action) {
  return { ...store };
}
export default rootReducer;
