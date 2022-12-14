import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeLatest } from 'redux-saga/effects'
import { userActions} from '../reducers/userReducer.ts'

import { postUser, loginApi, logoutApi } from '../api/userApi.ts'


interface UserJoinType{
    type: string;
    payload: {
        userid:string, password: string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password: string
        
    }
}
interface UserLogoutType{
    type: string
    payload: {
        userid: string
    }
}
interface UserJoinSuccessType{
    type: string
    payload: {
        userid: string
    }
}

interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}

function* join(user: UserJoinType){
    try{
        alert('*** 진행 3: saga내부 join 성공 ***' + JSON.stringify(user))
        const response: UserJoinSuccessType = yield postUser(user.payload)       
        yield put(userActions.joinSuccess(response))
        window.location.href = '/user/login'
    }catch(error){
        alert('*** 진행 3: saga내부 join 실패 ***')
        yield put(userActions.joinFailure(error))

    }
}
function* login(login: UserLoginType){
    try{
        alert('*** 진행 3: saga내부 login 요청 ***' + JSON.stringify(login))
        const response: UserLoginSuccessType = yield loginApi(login.payload)       
        yield put(userActions.loginSuccess(response))
        //window.location.href = '/'
    }catch(error){
        alert('*** 진행 3: saga내부 login 실패 ***')
        yield put(userActions.loginFailure(error))
        window.location.href = '/user/login'

    }
}
function* logout(logout: UserLogoutType){
    try{
        const response: UserLoginSuccessType = yield logoutApi()
        yield put(userActions.logoutSuccess(response))
    }catch(error){

    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}
export function* watchLogout(){
    yield takeLatest(userActions.logoutRequest, logout)
}