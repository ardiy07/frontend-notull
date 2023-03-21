import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { SET_LOADING, SIGN_IN_FAILED, SIGN_IN_SUCCES, SIGN_UP_FAILED, SIGN_UP_SUCCES } from "../actions/AuthAction";
import { AuthReducer, initialState } from "../reducers/AuthReducer";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const SignIn = async (data, password) => {
        // loading
        console.log('Loading')
        dispatch({ type: SET_LOADING })

        const form = {
            data: data,
            password: password
        }

        try {
            // get api
            await axios.post('http://localhost:5000/api/v1/auth/login', form, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
            }).then((response) => {
                // succes signin
                console.log('berhasil login')
                dispatch({
                    type: SIGN_IN_SUCCES,
                    payload: { data: response.data }
                })
            })

        } catch (error) {
            console.log(error.response.data.message)
            
            dispatch({
                type: SIGN_IN_FAILED,
                payload: { errorMessage: error.response.data.message }
            })
        }
    }

    const SignUp = async(name, username, email, password, confpass, role_id) => {
        dispatch({type: SET_LOADING})

        const form = {
            name: name,
            username: username,
            email: email,
            password: password,
            confpass: confpass,
            role_id: role_id
        }

        await axios.post('http://localhost:5000/api/v1/auth/register', form, {
            headers: {
                'Content-type': 'application/json'
            },
            withCredentials: true,
            timeout: 120000
        }).then((response) =>{
            console.log('Succes')
            dispatch({
                type: SIGN_UP_SUCCES,
                payload: {
                    succesMessage: response.data
                }
            })
        }).catch((error) => {
            dispatch({
                type: SIGN_UP_FAILED,
                payload:{
                    errorMessage: error.response.data.message
                }
            })
        })
    }

    return (
        <AuthContext.Provider value={{ ...state, SignIn, SignUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider