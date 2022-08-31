const initialStore = {
  products: [],
  cart: [],
  isLoggedIn: false,
  loggedInUser: {
    userId: "",
    name: "",
    mobileNumber: "",
    email: "",
  },
  authorisation: "",
};

function rootReducer(store = initialStore, action) {
  if (action.type === "addProduct") {
    return {
      ...store,
      products: [...action.payload],
    };
  } else if (action.type === "login") {
    return {
      ...store,
      authorisation: action.payload.authorisation,
      isLoggedIn: true,
      loggedInUser: action.payload.loggedInUser,
    };
  } else if (action.type === "logout") {
    return {
      ...store,
      authorisation: "",
      isLoggedIn: false,
      cart: [],
      loggedInUser: {
        userId: "",
        name: "",
        mobileNumber: "",
        email: "",
      },
    };
  } else if (action.type === "addtocart") {
    return {
      ...store,
      cart: [...store.cart, action.payload],
    };
  } else {
    return { ...store };
  }
}
export default rootReducer;
