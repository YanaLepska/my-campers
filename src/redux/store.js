import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { globalReducer } from "./global/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { campersReducer } from "./campers/slice";
import  favoritesReducer from "./favorites/slice";


const campersPersistConfig = {
  key: "campers",
  storage,
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
    favorites: favoritesReducer,
    campers: persistReducer(campersPersistConfig, campersReducer),
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);