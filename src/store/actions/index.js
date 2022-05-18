import { LOGIN_REQUEST, } from '../types';
import  {httpLogin}  from '../../hooks/requests';


export const login = (credentials) => async dispatch => {
    const response  = await httpLogin(credentials)
    const res = await response.json()
    // console.log(res)
    
    dispatch({type: LOGIN_REQUEST, payload: res })
} 

