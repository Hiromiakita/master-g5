import {useContext} from 'react'
import {AuthContext} from './ContextProvider'

const UseContextProvider = () => {
    return (
       useContext(AuthContext) 
    )
}

export default UseContextProvider
