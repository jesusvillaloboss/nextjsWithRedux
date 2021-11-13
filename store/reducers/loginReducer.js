import * as types from "../types";

const initialState = {
    auth: {},
    loading: false,
    error: null
}
export const loginReducer =(state= initialState,action)=> {
  switch(action.type){
    case types.POST_LOGIN:
      return { 
        ...state,
        auth: action.payload,
        loading: false,
        error: null
      }
    default:
      return state;
    }
}

