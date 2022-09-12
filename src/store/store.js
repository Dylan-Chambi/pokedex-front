import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counter/counterSlices'
import pokemonReducer from './pokeSlice/pokemonSlices'
import authReducer from './auth/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
 
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, authReducer)
 

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        pokemonReducer,
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)