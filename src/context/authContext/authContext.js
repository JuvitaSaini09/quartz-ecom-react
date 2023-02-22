import React,{createContext, useContext, useState} from 'react';

const authContext= createContext(null);

const AuthProvider=({children})=>{

    return(
        <authContext.Provider value={{}}>
            {children}
        </authContext.Provider>
    )

}
const useAuthContext = () => useContext(authContext);

export {useAuthContext,AuthProvider}

