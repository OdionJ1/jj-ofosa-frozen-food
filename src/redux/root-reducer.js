import { combineReducers } from 'redux'

import adminReducer from './admin/admin.reducer'

export default combineReducers({
    admin: adminReducer
})