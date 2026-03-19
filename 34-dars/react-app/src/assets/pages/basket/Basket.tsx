import { useState, type MouseEvent } from "react"

interface ITypes {
    friends: string[],
    isLogged: boolean,
    user: string,
    paid: boolean
}

type Role = "Admin" | "Operator" | "Seller"

function Basket({ friends, isLogged, user, paid }: ITypes) {

    const [matn, setMatn] = useState<Role>()

    const ClickHandler = (item: Role | string) => {
        // setMatn(item)
        if (item) {
            alert(`salom ${item}`)
        }
        else {
            alert(`sizga role berilmagan`)

        }
    }


    return (
        <div className="w-full min-h-auto h-full text-black py-10 flex-col text-2xl gap-10   flex  mx-auto rounded  px-10 "  >
            <h1> array: {friends}</h1>
            <h1> boolean: {isLogged}</h1>
            <h1> string:  {user}</h1>
            <h1> boolean: {paid}</h1>
            {
                ["Admin", "Operator", "Seller"].map(item => (
                    <button onClick={() => ClickHandler(item)}  >{item}</button>
                ))
            }

        </div >
    )
}

export default Basket