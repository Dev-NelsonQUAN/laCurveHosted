import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux';
import ecommerceReducer from '../Global/Slice';
// import userSliceReducer from '../Global/Features';
import { thunk } from "redux-thunk";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// Combine your reducers into a rootReducer
// const rootReducer = combineReducers({
//   shophub: ecommerceReducer,
//   user: userSliceReducer
// });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ecommerceReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(thunk),
});

export const persistor = persistStore(store);
