import { combineReducers } from 'redux';
// import { persistReducer as persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import user from './User';
import product from './Product';
import cart from './Cart';
import window from './window';
// const config = {
//     key: "primary",
//     storage,
// };

const state = combineReducers({
    user,
    product,
    cart,
    window
});

export default state;
// export default persistCombineReducers(config, state);
