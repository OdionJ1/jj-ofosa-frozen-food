import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import adminReducer from './admin/admin.reducer'
import themeReducer from './theme/theme.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme']
}

const rootReducer = combineReducers({
    admin: adminReducer,
    theme: themeReducer
})

export default persistReducer(persistConfig, rootReducer)