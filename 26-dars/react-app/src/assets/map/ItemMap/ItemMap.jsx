import { useContext, useState } from "react"
import { State } from "../../data/Context"
import { toast } from "react-toastify"
import { FaShop } from "react-icons/fa6"

function ItemMap({ item }) {
    const { basket, setBasket } = useContext(State)
    const [show, setShow] = useState(false)

    const addBasketItem = (item) => {
        const check = basket.some((element) => element.id === item.id)
        setShow(true)
        if (check) {
            const addBasket = basket.map((elem) => {
                return elem.id === item.id ? {
                    ...elem,
                    count: elem.count + 1,
                } : elem;
            });
            setBasket(addBasket)
            toast.success(" yana savatga qo'shildi")
        } else {

            setBasket([...basket, { ...item, count: 1 }])
            toast.success("savatga qo'shildi")

        }
    }

    const HomeaddCount = () => {

        // const check = basket.some((element) => element.id === item.id)

        // if (check) {
        //     const addBasket = basket.map((elem) => {
        //         return elem.id === item.id ? {
        //             ...elem,
        //             count: elem.count + 1,
        //         } : elem;
        //     });
        //     setBasket(addBasket)
        // }
        const check = basket.some((element) => element.id === item.id)

        if (check) {
            const addBasket = basket.map(elem => {
                return elem.id === item.id ? {

                    ...elem,
                    count: elem.count + 1
                } : elem
            });
            setBasket(addBasket)
        }
        
        
        
    }

    const HomeremoveCount = () => {
        const check = basket.some((element) => element.id === item.id)
        
        if (check) {
            const addBasket = basket.map(elem => {
                return elem.id === item.id ? {
                    
                    ...elem,
                    count: count = 0 ? elem.count = 1 : elem.count,
                    count: elem.count - 1
                } : elem
            });
            setBasket(addBasket)
        }

        //         if (check) {
        //             const addBasket = basket.map((elem) => {
        //                 return (elem.id === item.id) ? {
        //                     ...elem,
        //                     count: (elem.count = 1) ? (

        //                         elem.count = 1,
        //                         console.log("ishladi"),
        //                         console.log(elem.count),
        //                         setShow(false)
        //                     )

        //                         : elem.count - 1

        // } : elem;
        //             });
        // setBasket(addBasket)

        //         }
    }

    return (
        <div className="w-80 flex bg-white1 items-center flex-col justify-around cursor-pointer rounded-2xl *:cursor-pointer h-130 pt-5" >
            <img src={item.image} className="w-[90%] rounded-xl h-70 " />
            <h4 className=" w-[90%]" >{item.title}</h4>

                    <button onClick={() => addBasketItem(item)} className=" w-[90%] rounded-xl hover:bg-green-600 flex items-center justify-center gap-2 bg-green-700 text-[20px] h-15"> <FaShop /> savatga</button>
        </div >
    )
}

export default ItemMap