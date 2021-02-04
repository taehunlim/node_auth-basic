import axios from 'axios';
import {SET_CURRENT_USER, GET_ERRORS} from './types';
import {toast} from 'react-toastify';


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
