import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState ={
    logged:false,
}

export const AuthProvider =({children})=>{

    const [ state, dispath ]=useReducer(authReducer,initialState);

    const login =(name = '')=>{
        const action={
            types:types.login,
            id:'ABC',
            payload:name,
        }
        dispatch(action);
    }
   
   <AuthContext.Provider value={ {} }>
        {children}
    </AuthContext.Provider>
}