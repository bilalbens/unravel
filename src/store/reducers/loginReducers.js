import { LOGIN_REQUEST, LOGOUT } from '../types';
import  {httpLogin}  from '../../hooks/requests';


const initialState = {
      loading: true,
      data:[]
};

const reducer =    (state = initialState, action) =>{
  switch(action.type){
      case LOGIN_REQUEST: 
        return {
                   ...state,
                   loading: false,
                   data:action.payload
                 }
      case LOGOUT:
          return "Logout";
      default:
          return state
  }

};
    
export default reducer;





// const reducer =  (state = initialState, action) =>{
//   switch(action.type){
//       case LOGIN_REQUEST: 
//         return {
//           ...state,
//           loading: true,
//           data:null
//         }

//         case LOGIN_SUCCESS: 
//         return {
//           ...state,
//           loading: false,
//           data:action.payload
//         }

//         case LOGIN_FAIL: 
//         return {
//           ...state,
//           loading: false,
//           data:action.payload
//         }
//         // return await httpLogin(action.payload);
//         // // return   action.payload
//       // case LOGOUT:
//       //     return "Logout";
//       default:
//           return state
//   }

// };
    