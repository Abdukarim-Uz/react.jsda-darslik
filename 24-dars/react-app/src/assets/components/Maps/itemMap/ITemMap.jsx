import { useContext, useState } from "react"
import { Context } from "../../../data/StateContextProvider"
import { toast } from "react-toastify"

function ITemMap({ item }) {
    const { basket, setBasket} = useContext(Context)
    // const checkTwo = basket.some(element => element.id === item.id)

    function setItem(item) {
        const check = basket.some(element => element.id === item.id)
        if (check) {
            const addedBasket = basket.map((elem) => {
                return elem.id === item.id
                    ? {
                        ...elem,
                        count: elem.count + 1,
                    } : elem;
            })

            setBasket(addedBasket)
            toast.success("savatga qo'shildi!")
        } else {

            setBasket([...basket, { ...item, count: 1 }])
            toast.success("savatga qo'shildi!")
        }
    }



    return (
        <div className=" bg-white2  w-80 h-130  flex items-center flex-col justify-between *:cursor-pointer p-7 pt-4 rounded cursor-pointer  " >
            <img src={item.image} className="w-[95%] h-50 rounded mb-5  " />
            <h2 className="mb-6" >{item.title}</h2>
            <button onClick={() => setItem(item)} className="bg-green-500 w-full h-12 rounded-md flex items-center justify-center" >savatga</button>
        </div>
    )
}

export default ITemMap