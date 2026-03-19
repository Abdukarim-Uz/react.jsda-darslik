import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { State } from "../../data/Context"

function Navbar() {
    const { basket } = useContext(State)
    const [basketCount, setBasketCount] = useState()
    function count() {
        const totalCount = basket.reduce((a, b) => a + b.count, 0)
        setBasketCount(totalCount)
    }

    useEffect(() => {
        count()
    })

    return (
        <div className="mx-auto w-full h-20 flex items-center gap-3 text-white p-7 bg-blue-700 rounded-2xl" >
            <NavLink to={'/'} >
                Home
            </NavLink>
            <NavLink to={'/basket'} >
                basket {
                    basketCount == 0 ? null  : `[   ${basketCount}  ]`
                }
            </NavLink>
        </div>
    )
}

export default Navbar