import { LOGIN_REQUEST, } from '../types';
import  {httpLogin}  from '../../hooks/requests';




/**  the login function that execute the login action. */

export const login = (credentials) => async dispatch => {

    /**  make a http request to the server with the credentials of the user to login. */
    const response  = await httpLogin(credentials)
    const res = await response.json()
    
    /**  dispatch  type and the result of http request  to loginreducer*/
    dispatch({type: LOGIN_REQUEST, payload: res })
} 

