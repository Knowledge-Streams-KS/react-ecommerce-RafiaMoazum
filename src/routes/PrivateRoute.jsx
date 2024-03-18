import { Navigate } from "react-router-dom";


const PrivateRoute = (props) => {

    const isLoggedIn =false;
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