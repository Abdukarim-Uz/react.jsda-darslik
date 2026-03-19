import axios from "axios"
import { createContext, useEffect, useState } from "react"


export const Context = createContext()

function StateContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [userNumber, setUserNumber] = useState(null)
    const [show, setShow] = useState(false)
    const [basket, setBasket] = useState([])
    const [miqdor, setMiqdor] = useState(0)


    return (
        <Context.Provider value={{ setShow, setBasket, setMiqdor, miqdor, basket, show, user, userNumber, setUser, setUserNumber }} >
            {children}

        </Context.Provider>
    )
}

export default StateContextProvider