import { combineReducers } from "redux"
import userReducer from './user'

const rootReudcer = combineReducers({
    user: userReducer
})

export default rootReudcer