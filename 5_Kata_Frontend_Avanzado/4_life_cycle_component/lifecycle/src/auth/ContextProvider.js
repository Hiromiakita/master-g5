import { createContext, useState} from 'react'

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const contextValues = {
        user,

        login(){
            setUser({id:15, name:'Pablo'})
        },

        logout(){
            setUser(null)
        }
    }
    return (
       <AuthContext.Provider value={contextValues}>
            {children}
       </AuthContext.Provider>
    )
}



export const AuthContext = createContext()
export default ContextProvider


