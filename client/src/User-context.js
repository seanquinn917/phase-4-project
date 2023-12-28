import { createContext, useState, useEffect } from "react";



const UserContext = createContext(null);

export const UserProvider = ({children}) =>{
    const [user, setUser]= useState(null);

  
    
  useEffect(() => {
    console.log("hello from context")
    const fetchData = async () => {
      try {
        const response = await fetch("/me");
        if (response.ok) {
          const user = await response.json();
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
console.log(user)
    fetchData();
  }, []);




    return(
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;