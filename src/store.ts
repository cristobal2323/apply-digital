import { combineReducers, configureStore } from "@reduxjs/toolkit";

import type { PreloadedState } from "@reduxjs/toolkit";

//Service
import { newsApi } from "./services/news";

console.debug(newsApi.reducer);

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
