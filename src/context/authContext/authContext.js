import axios from 'axios';
import React,{createContext, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

const authContext= createContext(null);

const AuthProvider=({children})=>{
  const navigate=useNavigate();


    const signUp = async (e,newUser) => {
        e.preventDefault();
        
        try {
          const {data} = await axios.post(`/api/auth/signup`, {
             "firstName": newUser.fname,
             "lastName": newUser.lname,
             "email": newUser.email,
             "password": newUser.password,
           });
          // saving the encodedToken in the localStorage
          localStorage.setItem("token",data.encodedToken);
          // saving the user in the localStorage
          localStorage.setItem("user",JSON.stringify(data.createdUser));
          //navigate to home page
          navigate("/");
        } catch (error) {
          console.log("signup error",error);
        }
        
      };

    const login=async (email,password)=>{
      console.log(email,password)
        try {
            const { data } = await axios.post("/api/auth/login", {
                "email":email,
                "password":password,
              });
              
              // saving the encodedToken in the localStorage
              localStorage.setItem("token",data.encodedToken);
              // saving the user in the localStorage
              localStorage.setItem("user",JSON.stringify(data.foundUser));
              //navigate to home page
              navigate("/");
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

