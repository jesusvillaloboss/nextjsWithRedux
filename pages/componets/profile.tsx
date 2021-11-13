import { useDispatch, useSelector } from "react-redux";



export  const Profile = () =>{

    const dispatch = useDispatch();
    const {auth} = useSelector(state =>state.auth);

        return(
            <div>
               
               <div>
                <h2>perfil</h2>
                    <p>
                        <b>nombre:</b>
                        {auth.user_name}
                    </p>
                    <p>
                        <b>mi token:</b>
                        {auth.token}
                    </p>
               </div>
               
            </div>
        )
}
