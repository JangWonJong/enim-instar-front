import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin, watchLogout} from "./user.saga.ts";
import { watchTodo } from './todo.saga.ts';
import { watchBoard } from './board.saga.ts';

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo(), watchLogin(), watchLogout(), watchBoard()]);
}
