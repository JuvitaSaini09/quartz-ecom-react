import axios from 'axios';
import React,{createContext, useContext} from 'react';

const authContext= createContext(null);

const AuthProvider=({children})=>{


    const signUp = async (e,newUser) => {
        e.preventDefault();
        
        try {
          const response = await axios.post(`/api/auth/signup`, {
             "firstName": newUser.fname,
             "lastName": newUser.lname,
             "email": newUser.email,
             "password": newUser.password,
           });
          console.log(response.data.createdUser,response.data.encodedToken)
          // saving the encodedToken in the localStorage
          localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
          console.log(error);
        }
        
      };

    const login=async (email,password)=>{
        try {
            const { data } = await axios.post(`/api/auth/login`, {
                "email":email,
                "password":password,
              });
              console.log(data)
              // saving the encodedToken in the localStorage
              localStorage.setItem("token",data.encodedToken);
            } catch (error) {
              console.log("login error",error);
            }
        
    }

    return(
        <authContext.Provider value={{signUp,login}}>
            {children}
        </authContext.Provider>
    )

}
const useAuthContext = () => useContext(authContext);

export {useAuthContext,AuthProvider}

