import *as UserType from '../types'

export const addUser = user => {
    return {
        type: UserType.USER_ADD_REQUESTED,
        payload: user
    }
}
export const fetchUsers = () => {
    return {
        type: UserType.USER_FETCH_REQUESTED,
    }
}

export const updateUser = user => {
    return {
        type: UserType.USER_UPDATE_REQUESTED,
        payload: user
    }
}
export const delUser = user => {
    return {
        type: UserType.USER_DELETE_REQUESTED,
        payload: userid
    }
}

