import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserAuthContext from "../context/UserAuthContext";

const PrivateRoute = (props) => {

    const {isLoggedIn} = useContext(UserAuthContext)
    
    return ( 
    <>

    {isLoggedIn ? (
        <>{props.children}</>
    ) : (
        <> 
        <Navigate to={"/login"} />
        </>
    )}
    </>
    );
}
 
export default PrivateRoute;