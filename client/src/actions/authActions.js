import axios from 'axios';
import {SET_CURRENT_USER, GET_ERRORS} from './types';
import {toast} from 'react-toastify';
import jwt_decoded from 'jwt-decode';

import setAuthToken from "../utills/setAuthToken";
import {authenticate} from "../helpers/auth";


export const registerUser = (userData, history) => dispatch => {

    dispatch({
        type: SET_CURRENT_USER
    })
    axios
        .post("http://localhost:5000/account/register", userData)
        .then(res => {
            toast.success(res.data.message)
        })
        .catch(err => (
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        ))
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const loginUser = (userData) => dispatch => {
    dispatch({
        type: SET_CURRENT_USER
    })

    axios
        .post("http://localhost:5000/account/authenticate", userData)
        .then(res => {
            authenticate(res, () => {
                const {jwtToken} = res.data;

                localStorage.setItem("jwtToken", jwtToken)

                setAuthToken(jwtToken)

                const decoded = jwt_decoded(jwtToken)

                dispatch(setCurrentUser(decoded))
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            toast.error("Email or Password is incorrect")
        })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}
