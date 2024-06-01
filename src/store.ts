import { PreloadedStateShapeFromReducersMapObject, configureStore } from "@reduxjs/toolkit";

import { combinedReducers } from "./redux/reducers";

function setupStore(preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) {
    return configureStore({
        reducer: combinedReducers,
        preloadedState
    })
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof combinedReducers>;

export const store = configureStore({
    reducer: combinedReducers
});

export type ReduxState = ReturnType<typeof store.getState>;