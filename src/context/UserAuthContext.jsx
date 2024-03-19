import { createContext, useState } from "react";

const UserAuthContext = createContext();



const UserAuthContextProvider = ({children}) => {
    const [email,setEmail] =useState("rafiamoazum@gmail.com");
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return( 
    <UserAuthContext.Provider value={{email, setEmail, isLoggedIn, setIsLoggedIn}}>
        {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContext;
export {UserAuthContextProvider};