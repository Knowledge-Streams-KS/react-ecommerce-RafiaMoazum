import { useContext } from "react";
import UserAuthContext from "../context/UserAuthContext";

const Home = () => {
const {email} = useContext(UserAuthContext)

    return ( 
        <>
        <h1>Hello {email}</h1>
        </>
     );
}
 
export default Home;