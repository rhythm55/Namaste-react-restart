# Notes

advantages
- handling state of our application
- application becomes easier to debug using redux chrome extension


Redux store
- js object kept in global central place- any component can access it
- slice: logical sepration , ex: cart slice, user slice, theme slice
- when you hit add button - it dispatches the action that call reducer function - which updates the slice of our store
- selector - to read the data from store - known as `subscribing to the store`

# Redux toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cardSlice)
- dispatch action when clicked on add button
- Selector

- either mutate the existing state or return a new state

***

***

# Assignment

Q: useContext vs Redux

A:
useContext: 
- React hook that allows you to access the value of a context provider anywhere in your component tree without passing props down manually.
- is best suited for simpler state management needs within a component or a small subtree of components.

Redux
- state management library that provides a centralized store to manage the state of your entire application.
- useful for managing complex application state that needs to be accessed or updated by multiple components across the application.
- use it only when required
- where data is heavily used and application is very huge

***

Q: Advantages of using Redux toolkit over redux.

A:
- Simplified Code: encourages best practices and conventions for writing Redux code, such as using the createSlice 
- Slices for Reducers: "slices," which are functions that generate reducers and action creators for a specific part of the state.
- DevTools Integration: Redux Toolkit includes built-in support for the Redux DevTools Extension


***

Q: Explain Dispatcher

A: 
responsible for dispatching actions to the stores, which then update their state based on the actions they receive.
```
const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
```

***

Q: Explain Reducer

A:

- Reducers are responsible for handling actions and updating the state of the application accordingly.
```
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

***

Q: Explain slice

A:
- functions that generate reducers and action creators for a specific part of the state.
- Slices help organize your Redux code by grouping related reducer logic and actions together. 

```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

***

Q: Explain Selector

A:

- a function that takes the Redux state as an argument and returns a specific piece of data from that state
```
const cartItems = useSelector((store) => store.cart.items);
```


***
