import axios from 'axios'
import * as types from '../types'

export const login = (credential= {email, password}) => async dispatch =>{
    let url= "https://5127-2806-2f0-9020-8bfc-fc81-154a-9a68-9182.ngrok.io/auth/login";
    let login = await axios.post(url,credential);
    console.log(login);
    dispatch({
        type: types.POST_LOGIN,
        payload: login.data
    })
}