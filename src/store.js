import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import OperationSlice from "./OperationSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, OperationSlice);

export const store = configureStore({
  reducer: persistedReducer, // Or your reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export const persistor = persistStore(store);
