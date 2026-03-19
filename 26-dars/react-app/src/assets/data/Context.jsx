import { createContext, useEffect, useState } from "react"

export const State = createContext()

function Context({ children }) {
    const [basketItemCount, setBasketItemCount] = useState(1)
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])


    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])

    return (
        <State.Provider value={{ basket, setBasket, setBasketItemCount, basketItemCount }} >
            {children}
        </State.Provider>
    )
}

export default Context