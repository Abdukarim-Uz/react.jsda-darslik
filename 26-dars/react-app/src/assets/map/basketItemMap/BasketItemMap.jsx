import { useContext, useState } from "react"
import { FaTrash } from "react-icons/fa"
import { State } from "../../data/Context"

function BasketItemMap({ item }) {
    const { basket, setBasket,} = useContext(State)


    

    const removeItem = (item) => {
        const filtered = basket.filter(element => element.id !== item.id)
        setBasket(filtered)
    }

    const addCount = () => {

        const check = basket.some((element) => element.id === item.id)

        if (check) {
            const addBasket = basket.map((elem) => {
                return elem.id === item.id ? {
                    ...elem,
                    count: elem.count + 1,
                } : elem;
            });
            setBasket(addBasket)
        }



    }

    const removeCount = () => {
        const check = basket.some((element) => element.id === item.id)

        if (check) {
            const addBasket = basket.map((elem) => {
                console.log("ishladi")
                return (elem.id === item.id) ? {
                    ...elem,
                    count: (elem.count <= 1) ?
                        elem.count = 1 : elem.count - 1

                } : elem;
            });
            setBasket(addBasket)

        }
    }

    return (
        <div className="w-80 flex bg-white1 items-center flex-col justify-around cursor-pointer rounded-2xl *:cursor-pointer h-140 pt-5" >
            <img src={item.image} className="w-[90%] rounded-xl h-70 " />
            <h4 className=" w-[90%] text-white  text-center " >{item.title}</h4>
            <h4 className=" w-[90%] text-white  text-center" >jami narhi {item.price * item.count} $ </h4>

            <div className="flex  items-center  cursor-pointer *:cursor-pointer text-white gap-12  " >
                <button onClick={removeCount} className="bg-white2 w-10 rounded-xs " >-</button>
                <h2>{item.count}</h2>
                <button onClick={addCount} className="bg-white2 w-10 rounded-xs " >+</button>
            </div>
            <button onClick={() => removeItem(item)} className=" w-[90%] rounded-xl flex justify-center items-center gap-2 hover:bg-red-600 bg-red-700 text-white text-[20px] h-15"> <FaTrash /> o'chirish</button>
        </div>
    )
}

export default BasketItemMap