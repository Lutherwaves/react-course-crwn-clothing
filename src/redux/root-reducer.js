import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // import sessionstorage ALTERNATIVELY

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root', // At what point in our reducer do we want to start to persist storage
  storage, // the session we want to use sessionStorage alternatively for example
  whitelist: ['cart'] // The reducers we want to persist (from combineReducers); we don't want to persist user as it is handled by Firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
