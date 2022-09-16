import { combineReducers } from "redux"
import adminReducer from './admin.reducer.ts'
import basicReducer from './basic.reducer.ts'
import boardReducer from './board.reducer.ts'
import gameReducer from './game.reducer.ts'
import todoReducer from './todo.reducer.ts'
import userReducer from './userReducer.ts'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    boardReducer,
    gameReducer,
    todoReducer,
    userReducer 
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>