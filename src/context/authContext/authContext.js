import React,{createContext, useContext, useState} from 'react';

const authContext= createContext(null);

const AuthProvider=({children})=>{

    const signUp=(newUser)=>{
      console.log("user signed up",newUser);
    }

    const login=(email,password)=>{
        console.log("user logged in",email,password);
    }

    return(
        <authContext.Provider value={{signUp,login}}>
            {children}
        </authContext.Provider>
    )

}
const useAuthContext = () => useContext(authContext);

export {useAuthContext,AuthProvider}

