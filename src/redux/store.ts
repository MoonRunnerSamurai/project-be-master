import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiService } from './../services/api.service'


// THE GLOBAL STORE SETUP
export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>