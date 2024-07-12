import { combineReducers, configureStore } from '@reduxjs/toolkit';
import connectionReducer from './connector/reducer';
import configsReducer from './configs/reduce';
import logger from 'redux-logger';
import {
  persistReducer,
  persistStore,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import scrollReducer from './scroll/reducer';

const middlewares = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducers = combineReducers({
  connection: connectionReducer,
  scroll: scrollReducer,
  configs: configsReducer,
});

const persistConfig: PersistConfig<any, any, any> = {
  key: 'root',
  storage,
  whitelist: ['conection', 'configs'],
};

const _persistReducer = persistReducer(
  persistConfig,
  rootReducers,
) as typeof rootReducers;

const makeConfiguredStore = () =>
  configureStore({
    reducer: _persistReducer,
    middleware: middlewares,
  });

const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side
    const persistConfig = {
      key: 'root',
      whitelist: ['connection'], // make sure it does not clash with server keys
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducers);
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: middlewares,
    });
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};

const tempStore = configureStore({
  reducer: _persistReducer,
  middleware: middlewares,
});

// export const store = configureStore({
//   reducer: _persistReducer,
//   middleware: middlewares,
// });
// export const persistor = persistStore(store, {}, () => {
//   persistor.persist();
// });
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof tempStore.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
