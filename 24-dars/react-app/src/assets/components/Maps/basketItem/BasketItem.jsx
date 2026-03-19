import { useContext } from "react"
import { Context } from "../../../data/StateContextProvider"

function BasketItem({ item }) {

    const { basket, miqdor, setBasket } = useContext(Context)

    const removeItem = (item) => {
        const filtered = basket.filter(element => element.id !== item.id)
        setBasket(filtered)
    }


    return (
        <div className=" bg-white2  w-80 h-130  flex items-center flex-col justify-between *:cursor-pointer p-7 pt-4 rounded cursor-pointer  " >
            <img src={item.image} className="w-[95%] h-50 rounded mb-5  " />
            <h2 className="mb-6" >{item.title}</h2>
            <h2>{item.count}ta</h2>
            <h2>{item.count * Number(item.price)}</h2>
            <button onClick={() => removeItem(item)} className="bg-red-500 w-full h-12 rounded-md flex items-center justify-center" >o'chirish</button>

        </div>
    )
}

export default BasketItem