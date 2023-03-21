import { SET_LOADING, SIGN_IN_FAILED, SIGN_IN_SUCCES, SIGN_UP_FAILED, SIGN_UP_SUCCES } from "../../actions/AuthAction"

export const initialState = {
    isLoading: false,
    isLogin: false,
    data: {},
    isError: false,
    messageErr: {},
    messageSucces: {}
}

export const AuthReducer = (state , action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_IN_FAILED:
            return {
                ...state,
                isError: true,
                isLoading: false,
                isLogin: false,
                messageErr: action.payload.errorMessage
            }
        case SIGN_IN_SUCCES:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                isError: false,
                data: action.payload.data
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                messageErr: action.payload.errorMessage
            }
        case SIGN_UP_SUCCES:
            return {
                ...state,
                isLoading: false,
                isError: false,
                messageSucces: action.payload.succesMessage
            }
        default:
            break
    }
}