import { useDispatch, useSelector } from "react-redux";
import {login} from '../store/actions/loginAction'
import { Profile } from "./componets/profile";


const LoginPage = ()=>{
    const dispatch = useDispatch();
    const {auth} = useSelector(state =>state.auth);

const authenticate = ()=>{
    
    dispatch(login({email:"dev@delogy.mx", password: "123456"}));
}

return(
    <div>
        
        <button onClick= {authenticate}>
            autentificarme
        </button>
        <Profile />
    </div>
)
}

export default LoginPage;